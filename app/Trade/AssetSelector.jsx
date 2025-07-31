'use client';

import React, { useState } from 'react';

const AssetSelector = ({ selectedPair, assets, onSelect, showSelector, toggleSelector }) => {
  const [activeTab, setActiveTab] = useState('CURRENCIES');
  
  const tabs = ['CURRENCIES', 'CRYPTO', 'COMMODITIES', 'STOCKS'];
  
  return (
    <div className="relative">
      <div 
        className="flex items-center space-x-2 px-3 py-2 rounded cursor-pointer bg-[#252b3b] border border-gray-700"
        onClick={toggleSelector}
      >
        <div className="flex items-center">
          <div className="w-6 h-6 flex items-center justify-center mr-2">
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
          <span className="font-medium">{selectedPair}</span>
        </div>
        <span className="text-sm text-orange-500 ml-1">93%</span>
        <svg 
          className={`ml-1 w-4 h-4 text-gray-400 transform ${showSelector ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      
      {showSelector && (
        <div className="absolute top-full left-0 z-50 mt-1 w-96 bg-[#1a1f2e] border border-gray-700 rounded-md shadow-lg">
          <div className="flex justify-between p-2 border-b border-gray-700">
            <h3 className="text-sm font-medium">Select trade pair</h3>
            <button 
              className="text-gray-400 hover:text-white"
              onClick={toggleSelector}
            >
              ✕
            </button>
          </div>
          
          {/* Tabs */}
          <div className="flex border-b border-gray-700">
            {tabs.map(tab => (
              <button
                key={tab}
                className={`px-4 py-2 text-xs font-medium ${activeTab === tab ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          
          {/* Search */}
          <div className="p-2 border-b border-gray-700">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-[#252b3b] border border-gray-600 rounded px-3 py-2 pl-8 text-sm"
              />
              <svg 
                className="absolute left-2 top-2.5 w-4 h-4 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
          {/* Table header */}
          <div className="grid grid-cols-12 px-4 py-2 text-xs text-gray-400 border-b border-gray-700">
            <div className="col-span-5">Name</div>
            <div className="col-span-3">24h changing</div>
            <div className="col-span-2">Profit 1+ min</div>
            <div className="col-span-2">5+ min</div>
          </div>
          
          {/* Asset list */}
          <div className="max-h-64 overflow-y-auto">
            {assets.map((asset, index) => (
              <div 
                key={index}
                className="grid grid-cols-12 px-4 py-3 hover:bg-[#252b3b] cursor-pointer border-b border-gray-700"
                onClick={() => {
                  onSelect(asset.symbol);
                  toggleSelector();
                }}
              >
                <div className="col-span-5 flex items-center">
                  <button className="mr-2 text-gray-400 hover:text-white">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </button>
                  <div className="flex items-center">
                    {asset.icon1 && asset.icon2 ? (
                      <>
                        <img src={asset.icon1} alt="" className="w-4 h-4 rounded-full" />
                        <img src={asset.icon2} alt="" className="w-4 h-4 rounded-full ml-1" />
                      </>
                    ) : (
                      <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center">
                        <span className="text-xs">$</span>
                      </div>
                    )}
                    <span className="ml-2 text-sm">{asset.symbol}</span>
                    {asset.isNew && (
                      <span className="ml-2 text-xs bg-blue-500 text-white px-1 rounded">
                        ADDED
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-span-3 flex items-center">
                  <span className={`text-sm ${asset.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {asset.change >= 0 ? '+' : ''}{asset.change}%
                  </span>
                </div>
                <div className="col-span-2 text-sm text-orange-500">{asset.profit1min}%</div>
                <div className="col-span-2 text-sm text-orange-500">{asset.profit5min}%</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AssetSelector;