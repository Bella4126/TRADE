'use client';

import React, { useRef, useEffect, useState } from 'react';
import { formatTime } from './utils/timeUtils'; // Adjust the import path as needed

const CandleChart = ({ candles, currentPrice, tradeEndTime, timeframe }) => {
  const canvasRef = useRef(null);
  const [hoverData, setHoverData] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [showTimeframeDropdown, setShowTimeframeDropdown] = useState(false);
  
  // Calculate end trade timestamp from current time plus trade end time
  const getEndTradeTime = () => {
    const [minutes, seconds] = tradeEndTime.split(':').map(Number);
    const now = new Date();
    now.setMinutes(now.getMinutes() + minutes);
    now.setSeconds(now.getSeconds() + seconds);
    return now;
  };
  
  const endTradeTimestamp = getEndTradeTime();
  
  // Chart drawing function
  const drawChart = (canvas) => {
    if (!canvas || !candles || candles.length === 0) return;
    
    const ctx = canvas.getContext('2d');
    const { width, height } = canvas;
    
    ctx.clearRect(0, 0, width, height);
    
    // Chart styling
    const chartArea = {
      left: 60,
      right: width - 20,
      top: 20,
      bottom: height - 40
    };
    
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    
    // Find price range
    const allPrices = candles.flatMap(d => [d.high, d.low]);
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
    const timeStep = Math.max(1, Math.floor(candles.length / 10));
    for (let i = 0; i < candles.length; i += timeStep) {
      const x = chartArea.left + (chartWidth / (candles.length - 1)) * i;
      ctx.beginPath();
      ctx.moveTo(x, chartArea.top);
      ctx.lineTo(x, chartArea.bottom);
      ctx.stroke();
      
      // Time labels
      ctx.fillStyle = '#6b7280';
      ctx.font = '10px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(candles[i].time, x, height - 10);
    }
    
    // Draw end trade time line
    const tradeTimePosition = calculateTimePosition(endTradeTimestamp, candles, chartArea, chartWidth);
    if (tradeTimePosition) {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(tradeTimePosition, chartArea.top);
      ctx.lineTo(tradeTimePosition, chartArea.bottom);
      ctx.stroke();
      ctx.setLineDash([]);
      
      // End of trade label
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.font = '10px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('End of trade', tradeTimePosition, chartArea.top - 5);
      
      // Time remaining label
      const timeLeft = formatTimeRemaining(endTradeTimestamp);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.font = '10px Arial';
      ctx.fillText(timeLeft, tradeTimePosition, chartArea.top + 15);
    }
    
    // Draw beginning of trade line (current time)
    const beginningLine = chartArea.left + chartWidth * 0.4;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(beginningLine, chartArea.top);
    ctx.lineTo(beginningLine, chartArea.bottom);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Beginning of trade label
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.font = '10px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Beginning of trade', beginningLine, chartArea.top - 5);
    
    // Draw current price line
    const currentPriceY = chartArea.bottom - ((currentPrice - minPrice) / priceRange) * chartHeight;
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(chartArea.left, currentPriceY);
    ctx.lineTo(chartArea.right, currentPriceY);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Draw price label on right side
    ctx.fillStyle = '#3b82f6';
    ctx.fillRect(chartArea.right - 50, currentPriceY - 10, 50, 20);
    ctx.fillStyle = 'white';
    ctx.font = '11px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(currentPrice.toFixed(5), chartArea.right - 25, currentPriceY + 4);
    
    // Draw candlesticks
    const candleWidth = Math.max(2, (chartWidth / candles.length) * 0.7);
    
    candles.forEach((candle, index) => {
      const x = chartArea.left + (chartWidth / (candles.length - 1)) * index;
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
      const candle = candles[hoverIndex];
      const x = chartArea.left + (chartWidth / (candles.length - 1)) * hoverIndex;
      
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
  
  // Calculate position of time on chart
  const calculateTimePosition = (timestamp, candles, chartArea, chartWidth) => {
    if (!candles.length) return null;
    
    const chartStartTime = new Date();
    chartStartTime.setMinutes(chartStartTime.getMinutes() - candles.length * getTimeframeMinutes(timeframe));
    
    const chartEndTime = new Date();
    chartEndTime.setMinutes(chartEndTime.getMinutes() + 5);
    
    if (timestamp < chartStartTime || timestamp > chartEndTime) return null;
    
    const timeRange = chartEndTime - chartStartTime;
    const timePosition = (timestamp - chartStartTime) / timeRange;
    
    return chartArea.left + chartWidth * timePosition;
  };
  
  // Get timeframe in minutes
  const getTimeframeMinutes = (tf) => {
    const unit = tf.charAt(tf.length - 1);
    const value = parseInt(tf);
    
    switch(unit) {
      case 's': return value / 60;
      case 'm': return value;
      case 'h': return value * 60;
      case 'd': return value * 24 * 60;
      default: return 1;
    }
  };
  
  // Format time remaining until trade end
  const formatTimeRemaining = (endTime) => {
    const now = new Date();
    const diffMs = endTime - now;
    
    if (diffMs <= 0) return '00:00';
    
    const diffSec = Math.floor(diffMs / 1000);
    const minutes = Math.floor(diffSec / 60);
    const seconds = diffSec % 60;
    
    return `00:${minutes.toString().padStart(2, '0')}`;
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
      setHoverIndex(index);
    } else {
      setHoverData(null);
      setHoverIndex(null);
    }
  };
  
  const handleMouseLeave = () => {
    setHoverData(null);
    setHoverIndex(null);
  };
  
  // Initialize chart and redraw on data change
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const resizeObserver = new ResizeObserver(() => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      drawChart(canvas);
    });
    
    resizeObserver.observe(canvas);
    
    // Initial draw
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    drawChart(canvas);
    
    // Cleanup
    return () => resizeObserver.disconnect();
  }, [candles, currentPrice, hoverIndex, tradeEndTime]);
  
  // Redraw on hover state change
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      drawChart(canvas);
    }
  }, [hoverData, hoverIndex]);
  
  // Redraw every second to update timers
  useEffect(() => {
    const interval = setInterval(() => {
      const canvas = canvasRef.current;
      if (canvas) {
        drawChart(canvas);
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [candles, currentPrice, tradeEndTime]);
  
  return (
    <div className="relative w-full h-[calc(100vh-58px)]">
      <canvas
        ref={canvasRef}
        className="w-full h-full bg-[#1a1f2e] cursor-crosshair"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default CandleChart;