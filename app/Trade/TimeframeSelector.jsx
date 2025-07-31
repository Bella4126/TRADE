'use client';

import React, { useState } from 'react';

const TimeframeSelector = ({ selectedTimeframe, onSelect }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  
  const timeframes = [
    // Seconds
    { label: '5s', value: '5s' },
    { label: '10s', value: '10s' },
    { label: '15s', value: '15s' },
    { label: '30s', value: '30s' },
    // Minutes
    { label: '1m', value: '1m' },
    { label: '2m', value: '2m' },
    { label: '3m', value: '3m' },
    { label: '5m', value: '5m' },
    { label: '10m', value: '10m' },
    { label: '15m', value: '15m' },
    { label: '30m', value: '30m' },
    // Hours
    { label: '1h', value: '1h' },
    { label: '4h', value: '4h' },
    // Days
    { label: '1d', value: '1d' },
  ];
  
  // Group timeframes by category
  const groupedTimeframes = {
    'Seconds': timeframes.filter(tf => tf.value.endsWith('s')),
    'Minutes': timeframes.filter(tf => tf.value.endsWith('m')),
    'Hours': timeframes.filter(tf => tf.value.endsWith('h')),
    'Days': timeframes.filter(tf => tf.value.endsWith('d')),
  };
  
  const handleSelect = (value) => {
    onSelect(value);
    setShowDropdown(false);
  };
  
  return (
    <div className="relative">
      <div className="flex items-center space-x-2">
        {/* Standard timeframe buttons */}
        <div className="flex items-center space-x-1 bg-transparent">
          {['1m', '5m', '15m', '30m', '1h'].map((tf) => (
            <button
              key={tf}
              onClick={() => onSelect(tf)}
              className={`px-3 py-1 text-xs rounded transition-colors ${
                tf === selectedTimeframe
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-400 hover:text-white bg-transparent'
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
        
        {/* Chart type and settings buttons */}
        <button 
          className="text-gray-400 hover:text-white p-1 bg-transparent border-none"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        <button className="text-gray-400 hover:text-white p-1 bg-transparent border-none">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>
      
      {/* Dropdown for all timeframes */}
      {showDropdown && (
        <div className="absolute top-full right-0 mt-1 w-48 bg-[#252b3b] border border-gray-700 rounded shadow-lg z-10">
          {Object.entries(groupedTimeframes).map(([category, options]) => (
            <div key={category}>
              <div className="text-xs text-gray-500 px-3 py-1 border-t border-gray-700">
                {category}
              </div>
              <div className="grid grid-cols-3 gap-1 p-1">
                {options.map((tf) => (
                  <button
                    key={tf.value}
                    onClick={() => handleSelect(tf.value)}
                    className={`px-2 py-1 text-xs rounded ${
                      tf.value === selectedTimeframe
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    {tf.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimeframeSelector;