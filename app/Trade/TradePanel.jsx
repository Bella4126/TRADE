'use client';

import React from 'react';

const TradePanel = ({ 
  investment, 
  setInvestment, 
  payout, 
  tradeDirection, 
  pendingTrade, 
  handleTradeClick,
  tradeEndTime,
  setTradeEndTime,
  tradeHistory,
  currentPrice,
  selectedPair
}) => {
  
  const handleTimeChange = (value) => {
    // Make sure time is at least 00:01:00
    setTradeEndTime(value);
  };
  
  const handleInvestmentChange = (value) => {
    setInvestment(Math.max(1, value));
  };
  
  return (
    <div className="bg-[#252b3b] w-72 border-l border-gray-800 flex flex-col">
      {/* Trade Controls */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 flex items-center justify-center">
              <img 
                src="https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg" 
                alt="USD" 
                className="w-4 h-4 rounded-full" 
              />
              <img 
                src="https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BR.svg" 
                alt="BRL" 
                className="w-4 h-4 rounded-full ml-1" 
              />
            </div>
            <span className="text-sm font-medium">{selectedPair}</span>
          </div>
          <div className="text-xs font-medium text-blue-400 rounded-full bg-blue-400/10 px-2 py-0.5">
            93%
          </div>
        </div>
        
        {/* Pending trade status */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs font-medium text-gray-400">PENDING TRADE</div>
          <div className="w-10 h-5 bg-gray-700 rounded-full flex items-center p-0.5">
            <div className={`w-4 h-4 rounded-full transition-all ${pendingTrade ? 'bg-blue-500 ml-4' : 'bg-gray-500'}`}></div>
          </div>
        </div>
        
        {/* Time */}
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-400">Time</div>
            <button className="text-xs text-blue-400 hover:text-blue-300">
              SWITCH TIME
            </button>
          </div>
          <div className="mt-2 relative">
            <div className="flex items-center bg-[#1a1f2e] rounded border border-gray-700">
              <button className="text-gray-400 hover:text-white px-3 py-2">-</button>
              <input
                type="text"
                className="bg-transparent border-0 text-center flex-grow text-white focus:outline-none"
                value={tradeEndTime}
                onChange={(e) => handleTimeChange(e.target.value)}
              />
              <button className="text-gray-400 hover:text-white px-3 py-2">+</button>
            </div>
          </div>
        </div>
        
        {/* Investment */}
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-400">Investment</div>
            <button className="text-xs text-blue-400 hover:text-blue-300">
              SWITCH
            </button>
          </div>
          <div className="mt-2 relative">
            <div className="flex items-center bg-[#1a1f2e] rounded border border-gray-700">
              <button 
                className="text-gray-400 hover:text-white px-3 py-2"
                onClick={() => handleInvestmentChange(investment - 1)}
              >
                -
              </button>
              <input
                type="number"
                className="bg-transparent border-0 text-center flex-grow text-white focus:outline-none"
                value={investment}
                onChange={(e) => handleInvestmentChange(Number(e.target.value))}
                min={1}
              />
              <span className="mr-1">₹</span>
              <button 
                className="text-gray-400 hover:text-white px-3 py-2"
                onClick={() => handleInvestmentChange(investment + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>
        
        {/* Payout display */}
        <div className="mb-4">
          <div className="text-sm text-gray-400 mb-1">Your payout:</div>
          <div className="text-lg font-bold">{payout}</div>
        </div>
        
        {/* Trade buttons */}
        <div className="space-y-2">
          <button
            className="w-full bg-green-500 hover:bg-green-600 text-white rounded-md py-3 font-bold text-lg flex items-center justify-center"
            disabled={pendingTrade}
            onClick={() => handleTradeClick('up')}
          >
            Up
            <span className="ml-2">↑</span>
          </button>
          
          <button
            className="w-full bg-red-500 hover:bg-red-600 text-white rounded-md py-3 font-bold text-lg flex items-center justify-center"
            disabled={pendingTrade}
            onClick={() => handleTradeClick('down')}
          >
            Down
            <span className="ml-2">↓</span>
          </button>
        </div>
      </div>
      
      {/* Trade History */}
      <div className="p-4 flex-grow">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <h3 className="font-medium">Trades</h3>
            <div className="ml-2 px-2 bg-gray-700 rounded text-xs">0</div>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5 rounded-full border border-gray-600 flex items-center justify-center text-xs mr-2">
              ?
            </div>
            <div className="text-gray-400 text-xs">0</div>
          </div>
        </div>
        
        {/* Date display */}
        <div className="flex items-center justify-center mb-4">
          <div className="bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded-full">
            24 MAY
            <span className="ml-1 w-4 h-4 bg-gray-600 inline-flex items-center justify-center rounded-full text-xs">
              1
            </span>
          </div>
        </div>
        
        {/* Sample trade row */}
        {tradeHistory.length > 0 ? (
          <div className="space-y-2">
            {tradeHistory.map((trade, index) => (
              <div key={trade.id} className="flex items-center justify-between p-2 border-b border-gray-700">
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-2 bg-gray-700 rounded flex items-center justify-center">
                    <img 
                      src="https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CA.svg" 
                      alt="CAD" 
                      className="w-4 h-4" 
                    />
                  </div>
                  <div>
                    <div className="text-sm font-medium">CAD/JPY</div>
                    <div className="text-xs text-gray-400">{trade.time}</div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className={`text-sm font-medium ${trade.status === 'win' ? 'text-green-500' : trade.status === 'loss' ? 'text-red-500' : 'text-gray-400'}`}>
                    {trade.status === 'win' ? '+' : ''}{trade.investment}
                  </div>
                  <div className="text-xs text-gray-500">00:01:00</div>
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
  );
};

export default TradePanel;