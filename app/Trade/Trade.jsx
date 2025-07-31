'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Plus, Info, BarChart3 } from 'lucide-react';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const WS_URL = process.env.NEXT_PUBLIC_WS_URL;

function formatTime(epochSec) {
  const d = new Date(epochSec * 1000);
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

const Trade = () => {
  const [assets, setAssets] = useState([]);
  const [selectedPair, setSelectedPair] = useState('USD/BRL (OTC)');
  const [selectedTimeframe, setSelectedTimeframe] = useState('1m');
  const [investment, setInvestment] = useState(70);
  const [tradeDirection, setTradeDirection] = useState(null);
  const [pendingTrade, setPendingTrade] = useState(false);
  const [payout, setPayout] = useState('135.10');
  const [currentPrice, setCurrentPrice] = useState(0.20306);
  const [hoverData, setHoverData] = useState(null);
  const [showTimeframeDropdown, setShowTimeframeDropdown] = useState(false);
  const [showAssetSelector, setShowAssetSelector] = useState(false);
  const [tradeEndTime, setTradeEndTime] = useState('00:01:00');
  const [tradeBeginningTime, setTradeBeginningTime] = useState(null);
  const [tradeEndingTime, setTradeEndingTime] = useState(null);
  const [tradeHistory, setTradeHistory] = useState([
    {
      id: 1,
      pair: 'CAD/JPY',
      time: '08:45',
      investment: '70 ₹',
      status: 'win',
      duration: '00:01:00'
    },
    {
      id: 2,
      pair: 'USD/BRL',
      time: '08:43',
      investment: '70 ₹',
      status: 'loss',
      duration: '00:01:00'
    }
  ]);

  const [candles, setCandles] = useState([]);
  const wsRef = useRef(null);
  const canvasRef = useRef(null);

  // Fetch assets from backend on mount
  useEffect(() => {
    fetch(`${API_URL}/api/v1/assets/getAssets`)
      .then(res => res.json())
      .then(data => {
        setAssets(data);
        if (data.length > 0) {
          const defaultPair = data.find(a => a.symbol === 'BTC/USD') ? 'BTC/USD' : data[0].symbol;
          setSelectedPair(defaultPair);
        }
      })
      .catch(error => console.error('Error fetching assets:', error));
  }, []);

  // Fetch historical candles when asset/timeframe changes
  useEffect(() => {
    if (!selectedPair) return;
    fetch(`${API_URL}/api/v1/candles/getCandles?asset=${selectedPair}&interval=${selectedTimeframe}`)
      .then(res => res.json())
      .then(data => {
        setCandles(
          data.candles.map((c) => ({
            ...c,
            time: formatTime(c.time),
          }))
        );
        if (data.candles.length) setCurrentPrice(data.candles[data.candles.length - 1].close);
      })
      .catch(error => console.error('Error fetching candles:', error));
  }, [selectedPair, selectedTimeframe]);

  // WebSocket connection for live updates
  useEffect(() => {
    if (!selectedPair) return;
    wsRef.current = new WebSocket(WS_URL);

    wsRef.current.onopen = () => {
      wsRef.current.send(JSON.stringify({ asset: selectedPair, interval: selectedTimeframe }));
    };

    wsRef.current.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.type === 'candle') {
        const newCandle = { ...msg.candle, time: formatTime(msg.candle.time) };
        setCandles((prev) => {
          if (prev.length && prev[prev.length - 1].time === newCandle.time) {
            return [...prev.slice(0, -1), newCandle];
          } else {
            return [...prev.slice(-99), newCandle];
          }
        });
        setCurrentPrice(msg.candle.close);
      }
    };

    return () => wsRef.current && wsRef.current.close();
  }, [selectedPair, selectedTimeframe]);

  // Chart drawing function
  const drawChart = (canvas, data, hoverIndex = null) => {
    if (!data || data.length === 0) return;
    
    const ctx = canvas.getContext('2d');
    const { width, height } = canvas;

    ctx.clearRect(0, 0, width, height);

    // Chart styling
    const chartArea = {
      left: 80,
      right: width - 20,
      top: 40,
      bottom: height - 40
    };

    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;

    // Find price range
    const allPrices = data.flatMap(d => [d.high, d.low]);
    const minPrice = Math.min(...allPrices) - 0.0005;
    const maxPrice = Math.max(...allPrices) + 0.0005;
    const priceRange = maxPrice - minPrice;

    // Draw grid
    ctx.strokeStyle = '#2a3441';
    ctx.lineWidth = 1;

    // Horizontal grid lines
    for (let i = 0; i <= 10; i++) {
      const y = chartArea.top + (chartHeight / 10) * i;
      ctx.beginPath();
      ctx.moveTo(chartArea.left, y);
      ctx.lineTo(chartArea.right, y);
      ctx.stroke();

      // Price labels
      const price = maxPrice - (priceRange / 10) * i;
      ctx.fillStyle = '#6b7280';
      ctx.font = '11px Arial';
      ctx.textAlign = 'right';
      ctx.fillText(price.toFixed(5), chartArea.left - 5, y + 3);
    }

    // Vertical grid lines
    const timeStep = Math.max(1, Math.floor(data.length / 10));
    for (let i = 0; i < data.length; i += timeStep) {
      const x = chartArea.left + (chartWidth / (data.length - 1)) * i;
      ctx.beginPath();
      ctx.moveTo(x, chartArea.top);
      ctx.lineTo(x, chartArea.bottom);
      ctx.stroke();

      // Time labels
      ctx.fillStyle = '#6b7280';
      ctx.font = '10px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(data[i].time, x, height - 10);
    }

    // Draw current price line
    const currentPriceY = chartArea.bottom - ((currentPrice - minPrice) / priceRange) * chartHeight;
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(chartArea.left, currentPriceY);
    ctx.lineTo(chartArea.right, currentPriceY);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw price label
    ctx.fillStyle = '#3b82f6';
    ctx.fillRect(chartArea.right - 50, currentPriceY - 10, 50, 20);
    ctx.fillStyle = 'white';
    ctx.font = '11px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(currentPrice.toFixed(5), chartArea.right - 25, currentPriceY + 4);
    
    // Draw beginning and end of trade indicators if active
    if (tradeBeginningTime && tradeEndingTime) {
      // Calculate positions based on time - for demo using fixed positions
      const tradeStartPos = chartArea.left + chartWidth * 0.35;
      const tradeEndPos = chartArea.left + chartWidth * 0.7;
      
      // Draw beginning line
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(tradeStartPos, chartArea.top);
      ctx.lineTo(tradeStartPos, chartArea.bottom);
      ctx.stroke();
      
      // Draw end line
      ctx.beginPath();
      ctx.moveTo(tradeEndPos, chartArea.top);
      ctx.lineTo(tradeEndPos, chartArea.bottom);
      ctx.stroke();
      ctx.setLineDash([]);
      
      // Add labels
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Beginning of trade', tradeStartPos, chartArea.top - 5);
      ctx.fillText('End of trade', tradeEndPos, chartArea.top - 5);
    }

    // Draw candlesticks
    const candleWidth = Math.max(2, (chartWidth / data.length) * 0.7);

    data.forEach((candle, index) => {
      const x = chartArea.left + (chartWidth / (data.length - 1)) * index;
      const openY = chartArea.bottom - ((candle.open - minPrice) / priceRange) * chartHeight;
      const closeY = chartArea.bottom - ((candle.close - minPrice) / priceRange) * chartHeight;
      const highY = chartArea.bottom - ((candle.high - minPrice) / priceRange) * chartHeight;
      const lowY = chartArea.bottom - ((candle.low - minPrice) / priceRange) * chartHeight;

      const isGreen = candle.close > candle.open;
      const isHovered = hoverIndex === index;

      // Highlight hovered candle
      if (isHovered) {
        ctx.fillStyle = 'rgba(59, 130, 246, 0.1)';
        ctx.fillRect(x - candleWidth, chartArea.top, candleWidth * 2, chartHeight);
      }

      // Draw wick
      ctx.strokeStyle = isGreen ? '#00c176' : '#ff4949';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x, highY);
      ctx.lineTo(x, lowY);
      ctx.stroke();

      // Draw body
      const bodyHeight = Math.abs(closeY - openY);
      const bodyTop = Math.min(openY, closeY);

      if (isGreen) {
        ctx.fillStyle = '#00c176';
        ctx.strokeStyle = '#00c176';
      } else {
        ctx.fillStyle = '#ff4949';
        ctx.strokeStyle = '#ff4949';
      }

      ctx.lineWidth = 1;
      ctx.fillRect(x - candleWidth / 2, bodyTop, candleWidth, bodyHeight || 1);
      ctx.strokeRect(x - candleWidth / 2, bodyTop, candleWidth, bodyHeight || 1);
    });

    // Draw hover info
    if (hoverIndex !== null && hoverData) {
      const candle = data[hoverIndex];
      const x = chartArea.left + (chartWidth / (data.length - 1)) * hoverIndex;

      // Hover line
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 2]);
      ctx.beginPath();
      ctx.moveTo(x, chartArea.top);
      ctx.lineTo(x, chartArea.bottom);
      ctx.stroke();
      ctx.setLineDash([]);

      // Tooltip
      const tooltipWidth = 120;
      const tooltipHeight = 90;
      const tooltipX = x > width - tooltipWidth - 20 ? x - tooltipWidth - 10 : x + 10;
      const tooltipY = 30;

      ctx.fillStyle = 'rgba(31, 41, 55, 0.95)';
      ctx.fillRect(tooltipX, tooltipY, tooltipWidth, tooltipHeight);
      ctx.strokeStyle = '#4b5563';
      ctx.strokeRect(tooltipX, tooltipY, tooltipWidth, tooltipHeight);

      ctx.fillStyle = '#ffffff';
      ctx.font = '11px Arial';
      ctx.textAlign = 'left';
      ctx.fillText(`Time: ${candle.time}`, tooltipX + 8, tooltipY + 15);
      ctx.fillText(`Open: ${candle.open.toFixed(5)}`, tooltipX + 8, tooltipY + 30);
      ctx.fillText(`High: ${candle.high.toFixed(5)}`, tooltipX + 8, tooltipY + 45);
      ctx.fillText(`Low: ${candle.low.toFixed(5)}`, tooltipX + 8, tooltipY + 60);
      ctx.fillText(`Close: ${candle.close.toFixed(5)}`, tooltipX + 8, tooltipY + 75);
    }
  };

  // Mouse event handlers
  const handleMouseMove = (e) => {
    const canvas = canvasRef.current;
    if (!canvas || !candles.length) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const chartArea = {
      left: 60,
      right: canvas.width - 20,
      top: 20,
      bottom: canvas.height - 40
    };

    if (x >= chartArea.left && x <= chartArea.right && y >= chartArea.top && y <= chartArea.bottom) {
      const chartWidth = chartArea.right - chartArea.left;
      const relativeX = x - chartArea.left;
      const index = Math.min(
        candles.length - 1,
        Math.max(0, Math.round((relativeX / chartWidth) * (candles.length - 1)))
      );

      setHoverData(candles[index]);
      drawChart(canvas, candles, index);
    } else {
      setHoverData(null);
      drawChart(canvas, candles);
    }
  };

  const handleMouseLeave = () => {
    setHoverData(null);
    const canvas = canvasRef.current;
    if (canvas) {
      drawChart(canvas, candles);
    }
  };

  // Initialize chart and redraw on data change
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeObserver = new ResizeObserver(() => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      drawChart(canvas, candles);
    });

    resizeObserver.observe(canvas);

    // Initial draw
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    drawChart(canvas, candles);

    return () => resizeObserver.disconnect();
  }, [candles, currentPrice, hoverData, tradeBeginningTime, tradeEndingTime]);

  const handleTradeClick = (direction) => {
    setTradeDirection(direction);
    setPendingTrade(true);
    
    // Set trade beginning time
    setTradeBeginningTime(new Date());
    
    // Calculate trade end time
    const endTime = new Date();
    const [hours, minutes, seconds] = tradeEndTime.split(':').map(Number);
    endTime.setMinutes(endTime.getMinutes() + minutes);
    endTime.setSeconds(endTime.getSeconds() + seconds);
    setTradeEndingTime(endTime);

    const newTrade = {
      id: Date.now(),
      pair: selectedPair,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      investment: `${investment} ₹`,
      status: 'pending',
      duration: tradeEndTime
    };

    setTradeHistory([newTrade, ...tradeHistory.slice(0, 4)]);

    setTimeout(() => {
      setPendingTrade(false);
      setTradeDirection(null);
      setTradeBeginningTime(null);
      setTradeEndingTime(null);
      setTradeHistory(prev =>
        prev.map(trade =>
          trade.id === newTrade.id
            ? { ...trade, status: Math.random() > 0.5 ? 'win' : 'loss' }
            : trade
        )
      );
    }, 60000); // 1 minute timeout
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Top Navigation */}
      <div className="flex flex-wrap items-center justify-between bg-gray-900 py-3 px-4 border-b border-gray-800 relative">
        <div className="flex items-center space-x-2">
          <button className="bg-blue-500 hover:bg-blue-600 p-2 rounded transition-colors duration-200">
            <Plus size={16} />
          </button>
          <div 
            className="flex items-center space-x-2 px-3 py-2 rounded cursor-pointer bg-[#252b3b] border border-gray-700 hover:bg-[#2a324a] transition-colors duration-200"
            onClick={() => setShowAssetSelector(!showAssetSelector)}
          >
            <div className="flex items-center">
              <div className="w-6 h-6 flex items-center justify-center">
                <img src="https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg" alt="USD" className="w-4 h-4 rounded-full" />
                <img src="https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BR.svg" alt="BRL" className="w-4 h-4 rounded-full ml-1" />
              </div>
              <span className="font-medium ml-2">{selectedPair}</span>
              <span className="text-sm text-orange-500 ml-1">93%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 bg-gray-900">
        {/* Chart Area */}
        <div className="flex-1 relative">
          {/* Chart Controls */}
          <div className="absolute top-8 left-4 z-10">
            <button className="text-blue-400 hover:text-blue-300 bg-transparent border-none flex items-center transition-colors duration-200">
              <Info size={16} className="mr-1" />
              <span className="text-xs">PAIR INFORMATION</span>
            </button>
            <div className="text-2xl font-bold mt-2 text-white">{currentPrice.toFixed(5)}</div>
          </div>

          {/* Timeframe Selector */}
          <div className="absolute top-4 right-4 z-10">
            <div className="flex items-center space-x-1">
              {['1m', '5m', '15m', '30m', '1h'].map((tf) => (
                <button
                  key={tf}
                  onClick={() => setSelectedTimeframe(tf)}
                  className={`px-3 py-1 text-xs rounded transition-colors duration-200 ${
                    tf === selectedTimeframe
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-400 hover:text-white bg-transparent'
                  }`}
                >
                  {tf}
                </button>
              ))}
              <button 
                className="text-gray-400 hover:text-white p-1 bg-transparent transition-colors duration-200"
                onClick={() => setShowTimeframeDropdown(!showTimeframeDropdown)}
              >
                <BarChart3 size={16} />
              </button>
            </div>
          </div>

          {/* Asset Selector Dropdown */}
          {showAssetSelector && (
            <div className="absolute top-16 left-4 z-20 bg-[#252b3b] rounded-md shadow-lg border border-gray-700 w-64">
              <div className="p-3 border-b border-gray-700">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-[#1a1f2e] border border-gray-700 rounded px-3 py-2 text-white"
                />
              </div>
              <div className="max-h-80 overflow-y-auto">
                {assets && assets.length > 0 ? (
                  assets.map((asset, index) => (
                    <div
                      key={index}
                      className={`p-3 flex items-center justify-between hover:bg-[#2a324a] cursor-pointer ${
                        asset.symbol === selectedPair ? 'bg-[#2a324a]' : ''
                      }`}
                      onClick={() => {
                        setSelectedPair(asset.symbol);
                        setShowAssetSelector(false);
                      }}
                    >
                      <div className="flex items-center">
                        <div className="w-6 h-6 flex items-center justify-center mr-2">
                          <img src={asset.iconUrl || "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg"} alt={asset.symbol} className="w-4 h-4 rounded-full" />
                        </div>
                        <span className="text-white">{asset.symbol}</span>
                      </div>
                      <span className="text-orange-500 text-sm">{asset.payout || '93%'}</span>
                    </div>
                  ))
                ) : (
                  <div className="p-4 text-center text-gray-400">No assets available</div>
                )}
              </div>
            </div>
          )}

          {/* Chart Canvas */}
          <canvas
            ref={canvasRef}
            className="w-full h-full bg-gray-900"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
        </div>

        {/* Trade Panel */}
        <div className="w-60 bg-[#252b3b] border-l border-gray-800 flex flex-col rounded-l-xl overflow-hidden">
          <div className="p-4 border-b border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <img src="https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg" alt="USD" className="w-4 h-4 rounded-full" />
                  <img src="https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BR.svg" alt="BRL" className="w-4 h-4 rounded-full ml-1" />
                </div>
                <span className="font-medium text-white">{selectedPair}</span>
              </div>
              <div className="text-xs text-orange-500">93%</div>
            </div>

            {/* Pending Trade Toggle */}
            <div className="flex items-center justify-between mb-4">
              <div className="text-xs font-medium text-gray-400">PENDING TRADE</div>
              <div 
                className="w-10 h-5 bg-gray-700 rounded-full flex items-center p-0.5 cursor-pointer"
                onClick={() => setPendingTrade(!pendingTrade)}
              >
                <div className={`w-4 h-4 rounded-full transition-all duration-200 ${pendingTrade ? 'bg-blue-500 ml-4' : 'bg-gray-500'}`}></div>
              </div>
            </div>

            {/* Time Control */}
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Time</span>
                <button className="text-xs text-blue-400 hover:text-blue-300 transition-colors duration-200">SWITCH TIME</button>
              </div>
              <div className="mt-2 flex items-center bg-[#1a1f2e] rounded border border-gray-700">
                <button 
                  className="w-10 py-2 text-gray-400 hover:text-white transition-colors duration-200"
                  onClick={() => {
                    const [hours, minutes, seconds] = tradeEndTime.split(':').map(Number);
                    if (minutes > 0 || seconds > 30) {
                      let newSeconds = seconds - 30;
                      let newMinutes = minutes;
                      if (newSeconds < 0) {
                        newSeconds += 60;
                        newMinutes -= 1;
                      }
                      setTradeEndTime(`00:${newMinutes.toString().padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`);
                    }
                  }}
                >-</button>
                <input
                  type="text"
                  className="flex-1 bg-transparent border-0 text-center text-white"
                  value={tradeEndTime}
                  onChange={(e) => setTradeEndTime(e.target.value)}
                />
                <button 
                  className="w-10 py-2 text-gray-400 hover:text-white transition-colors duration-200"
                  onClick={() => {
                    const [hours, minutes, seconds] = tradeEndTime.split(':').map(Number);
                    let newSeconds = seconds + 30;
                    let newMinutes = minutes;
                    if (newSeconds >= 60) {
                      newSeconds -= 60;
                      newMinutes += 1;
                    }
                    setTradeEndTime(`00:${newMinutes.toString().padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`);
                  }}
                >+</button>
              </div>
            </div>

            {/* Investment Control */}
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Investment</span>
                <button className="text-xs text-blue-400 hover:text-blue-300 transition-colors duration-200">SWITCH</button>
              </div>
              <div className="mt-2 flex items-center bg-[#1a1f2e] rounded border border-gray-700">
                <button 
                  className="w-10 py-2 text-gray-400 hover:text-white transition-colors duration-200"
                  onClick={() => setInvestment(prev => Math.max(1, prev - 1))}
                >-</button>
                <input
                  type="number"
                  className="flex-1 bg-transparent border-0 text-center text-white"
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  min={1}
                />
                <span className="mr-2 text-white">₹</span>
                <button 
                  className="w-10 py-2 text-gray-400 hover:text-white transition-colors duration-200"
                  onClick={() => setInvestment(prev => prev + 1)}
                >+</button>
              </div>
            </div>

            {/* Payout Display */}
            <div className="mb-4">
              <div className="text-sm text-gray-400">Your payout:</div>
              <div className="text-lg font-bold text-white">{payout} ₹</div>
            </div>

            {/* Trade Buttons */}
            <div className="space-y-2">
              <button
                className="w-full bg-green-500 hover:bg-green-600 text-white rounded-md py-3 font-bold text-lg flex items-center justify-center transition-colors duration-200"
                disabled={pendingTrade}
                onClick={() => handleTradeClick('up')}
              >
                Up
                <span className="ml-2">↑</span>
              </button>
              <button
                className="w-full bg-red-500 hover:bg-red-600 text-white rounded-md py-3 font-bold text-lg flex items-center justify-center transition-colors duration-200"
                disabled={pendingTrade}
                onClick={() => handleTradeClick('down')}
              >
                Down
                <span className="ml-2">↓</span>
              </button>
            </div>
          </div>

          {/* Trade History */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <h3 className="font-medium text-white">Trades</h3>
                <div className="ml-2 px-2 bg-gray-700 rounded text-xs text-white">0</div>
              </div>
            </div>

            {/* Date Display */}
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded-full">
                24 MAY
                <span className="ml-1 w-4 h-4 bg-gray-600 inline-flex items-center justify-center rounded-full text-xs">
                  1
                </span>
              </div>
            </div>

            {tradeHistory.length > 0 ? (
              <div className="space-y-2">
                {tradeHistory.map((trade) => (
                  <div key={trade.id} className="flex items-center justify-between p-2 border-b border-gray-700">
                    <div>
                      <div className="text-sm font-medium text-white">{trade.pair}</div>
                      <div className="text-xs text-gray-400">{trade.time}</div>
                    </div>
                    <div className={`text-sm font-medium ${
                      trade.status === 'win' ? 'text-green-500' : 
                      trade.status === 'loss' ? 'text-red-500' : 
                      'text-gray-400'
                    }`}>
                      {trade.status === 'win' ? '+' : ''}{trade.investment}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-32 text-gray-500">
                <div className="mb-2">You don't have a trade</div>
                <div className="text-3xl">↑</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;