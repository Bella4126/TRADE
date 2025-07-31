
'use client';

import React, { useState } from 'react';
import { Clock, Info } from 'lucide-react';

const Active = () => {
  const [activeTab, setActiveTab] = useState('ACTIVE');

  return (
    <div className="bg-[#1a1f2e] text-white min-h-screen">
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Tournaments</h1>
        
        {/* Tabs */}
        <div className="flex border-b border-gray-700 mb-6">
          <button 
            className={`pb-3 px-4 relative ${activeTab === 'ACTIVE' ? 'text-blue-400' : 'text-gray-400'}`}
            onClick={() => setActiveTab('ACTIVE')}
          >
            ACTIVE
            {activeTab === 'ACTIVE' && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"></div>
            )}
            <span className="ml-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 inline-flex items-center justify-center">
              3
            </span>
          </button>
          <button 
            className={`pb-3 px-4 relative ${activeTab === 'COMPLETED' ? 'text-blue-400' : 'text-gray-400'}`}
            onClick={() => setActiveTab('COMPLETED')}
          >
            COMPLETED
            {activeTab === 'COMPLETED' && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"></div>
            )}
          </button>
        </div>
        
        {/* Active Section */}
        {activeTab === 'ACTIVE' && (
          <>
            {/* Section Title */}
            <div className="text-center mb-6">
              <h2 className="text-lg font-medium">Available for participation (3)</h2>
              <div className="h-px bg-gray-700 mt-4"></div>
            </div>
            
            {/* Tournament Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 - Crazy Wednesday */}
              <div className="bg-[#252b3b] rounded-lg overflow-hidden">
                {/* Timer Badge */}
                <div className="p-4">
                  <div className="inline-flex items-center bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded">
                    <Clock size={16} className="mr-1" />
                    UNTIL START: 16 HOURS
                  </div>
                </div>
                
                {/* Tournament Name and Prize */}
                <div className="px-6 pb-4 flex justify-between items-center">
                  <h3 className="text-2xl font-bold">Crazy! Wednesday</h3>
                  <div className="text-right">
                    <div className="text-gray-400 text-sm">PRIZE POOL</div>
                    <div className="text-green-500 text-2xl font-bold">5000 $</div>
                  </div>
                </div>
                
                {/* Tournament Details */}
                <div className="grid grid-cols-3 text-center border-t border-gray-700">
                  <div className="py-4">
                    <div className="text-xl font-bold">10 $</div>
                    <div className="text-gray-400 text-sm">Entry fee</div>
                  </div>
                  <div className="py-4 border-l border-r border-gray-700">
                    <div className="text-xl font-bold">109</div>
                    <div className="text-gray-400 text-sm">Participants</div>
                  </div>
                  <div className="py-4">
                    <div className="text-xl font-bold">1 day</div>
                    <div className="text-gray-400 text-sm">Duration</div>
                  </div>
                </div>
                
                {/* Details Button */}
                <button 
                  className="w-full bg-[#2a3042] hover:bg-[#323a4e] py-3 text-center text-white font-medium flex items-center justify-center"
                  onClick={() => {/* Function to show details */}}
                >
                  Details
                  <Info size={18} className="ml-2 text-blue-400" />
                </button>
              </div>
              
              {/* Card 2 - Free Friday */}
              <div className="bg-[#252b3b] rounded-lg overflow-hidden">
                {/* Timer Badge */}
                <div className="p-4">
                  <div className="inline-flex items-center bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded">
                    <Clock size={16} className="mr-1" />
                    UNTIL START: 3 DAYS
                  </div>
                </div>
                
                {/* Tournament Name and Prize */}
                <div className="px-6 pb-4 flex justify-between items-center">
                  <h3 className="text-2xl font-bold">Free Friday</h3>
                  <div className="text-right">
                    <div className="text-gray-400 text-sm">PRIZE POOL</div>
                    <div className="text-green-500 text-2xl font-bold">600 $</div>
                  </div>
                </div>
                
                {/* Tournament Details */}
                <div className="grid grid-cols-3 text-center border-t border-gray-700">
                  <div className="py-4">
                    <div className="text-xl font-bold">0 $</div>
                    <div className="text-gray-400 text-sm">Entry fee</div>
                  </div>
                  <div className="py-4 border-l border-r border-gray-700">
                    <div className="text-xl font-bold">13684</div>
                    <div className="text-gray-400 text-sm">Participants</div>
                  </div>
                  <div className="py-4">
                    <div className="text-xl font-bold">1 day</div>
                    <div className="text-gray-400 text-sm">Duration</div>
                  </div>
                </div>
                
                {/* Details Button */}
                <button 
                  className="w-full bg-[#2a3042] hover:bg-[#323a4e] py-3 text-center text-white font-medium flex items-center justify-center"
                  onClick={() => {/* Function to show details */}}
                >
                  Details
                  <Info size={18} className="ml-2 text-blue-400" />
                </button>
              </div>
              
              {/* Card 3 - Weekend Battle */}
              <div className="bg-[#252b3b] rounded-lg overflow-hidden">
                {/* Timer Badge */}
                <div className="p-4">
                  <div className="inline-flex items-center bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded">
                    <Clock size={16} className="mr-1" />
                    UNTIL START: 4 DAYS
                  </div>
                </div>
                
                {/* Tournament Name and Prize */}
                <div className="px-6 pb-4 flex justify-between items-center">
                  <h3 className="text-2xl font-bold">Weekend Battle</h3>
                  <div className="text-right">
                    <div className="text-gray-400 text-sm">PRIZE POOL</div>
                    <div className="text-green-500 text-2xl font-bold">3000 $</div>
                  </div>
                </div>
                
                {/* Tournament Details */}
                <div className="grid grid-cols-3 text-center border-t border-gray-700">
                  <div className="py-4">
                    <div className="text-xl font-bold">1 $</div>
                    <div className="text-gray-400 text-sm">Entry fee</div>
                  </div>
                  <div className="py-4 border-l border-r border-gray-700">
                    <div className="text-xl font-bold">242</div>
                    <div className="text-gray-400 text-sm">Participants</div>
                  </div>
                  <div className="py-4">
                    <div className="text-xl font-bold">2 days</div>
                    <div className="text-gray-400 text-sm">Duration</div>
                  </div>
                </div>
                
                {/* Details Button */}
                <button 
                  className="w-full bg-[#2a3042] hover:bg-[#323a4e] py-3 text-center text-white font-medium flex items-center justify-center"
                  onClick={() => {/* Function to show details */}}
                >
                  Details
                  <Info size={18} className="ml-2 text-blue-400" />
                </button>
              </div>
            </div>
          </>
        )}
        
        {/* Completed Section */}
        {activeTab === 'COMPLETED' && (
          <>
            {/* Section Title */}
            <div className="text-center mb-6">
              <h2 className="text-lg font-medium">Completed tournaments</h2>
              <div className="h-px bg-gray-700 mt-4"></div>
            </div>
            
            {/* Tournament Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 - Weekend Battle */}
              <div className="bg-[#252b3b] rounded-lg overflow-hidden">
                {/* Finished Badge */}
                <div className="p-4">
                  <div className="inline-flex items-center bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded">
                    FINISHED
                  </div>
                </div>
                
                {/* Tournament Name and Prize */}
                <div className="px-6 pb-4 flex justify-between items-center">
                  <h3 className="text-2xl font-bold">Weekend Battle</h3>
                  <div className="text-right">
                    <div className="text-gray-400 text-sm">PRIZE POOL</div>
                    <div className="text-green-500 text-2xl font-bold">3000 $</div>
                  </div>
                </div>
                
                {/* Tournament Details */}
                <div className="grid grid-cols-3 text-center border-t border-gray-700">
                  <div className="py-4">
                    <div className="text-xl font-bold">1 $</div>
                    <div className="text-gray-400 text-sm">Entry fee</div>
                  </div>
                  <div className="py-4 border-l border-r border-gray-700">
                    <div className="text-xl font-bold">1925</div>
                    <div className="text-gray-400 text-sm">Participants</div>
                  </div>
                  <div className="py-4">
                    <div className="text-xl font-bold">2 days</div>
                    <div className="text-gray-400 text-sm">Duration</div>
                  </div>
                </div>
                
                {/* Details Button */}
                <button 
                  className="w-full bg-[#2a3042] hover:bg-[#323a4e] py-3 text-center text-white font-medium flex items-center justify-center"
                  onClick={() => {/* Function to show details */}}
                >
                  Details
                  <Info size={18} className="ml-2 text-blue-400" />
                </button>
              </div>
              
              {/* Card 2 - Free Friday */}
              <div className="bg-[#252b3b] rounded-lg overflow-hidden">
                {/* Finished Badge */}
                <div className="p-4">
                  <div className="inline-flex items-center bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded">
                    FINISHED
                  </div>
                </div>
                
                {/* Tournament Name and Prize */}
                <div className="px-6 pb-4 flex justify-between items-center">
                  <h3 className="text-2xl font-bold">Free Friday</h3>
                  <div className="text-right">
                    <div className="text-gray-400 text-sm">PRIZE POOL</div>
                    <div className="text-green-500 text-2xl font-bold">600 $</div>
                  </div>
                </div>
                
                {/* Tournament Details */}
                <div className="grid grid-cols-3 text-center border-t border-gray-700">
                  <div className="py-4">
                    <div className="text-xl font-bold">0 $</div>
                    <div className="text-gray-400 text-sm">Entry fee</div>
                  </div>
                  <div className="py-4 border-l border-r border-gray-700">
                    <div className="text-xl font-bold">53000</div>
                    <div className="text-gray-400 text-sm">Participants</div>
                  </div>
                  <div className="py-4">
                    <div className="text-xl font-bold">1 day</div>
                    <div className="text-gray-400 text-sm">Duration</div>
                  </div>
                </div>
                
                {/* Details Button */}
                <button 
                  className="w-full bg-[#2a3042] hover:bg-[#323a4e] py-3 text-center text-white font-medium flex items-center justify-center"
                  onClick={() => {/* Function to show details */}}
                >
                  Details
                  <Info size={18} className="ml-2 text-blue-400" />
                </button>
              </div>
              
              {/* Card 3 - Crazy Wednesday */}
              <div className="bg-[#252b3b] rounded-lg overflow-hidden">
                {/* Finished Badge */}
                <div className="p-4">
                  <div className="inline-flex items-center bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded">
                    FINISHED
                  </div>
                </div>
                
                {/* Tournament Name and Prize */}
                <div className="px-6 pb-4 flex justify-between items-center">
                  <h3 className="text-2xl font-bold">Crazy! Wednesday</h3>
                  <div className="text-right">
                    <div className="text-gray-400 text-sm">PRIZE POOL</div>
                    <div className="text-green-500 text-2xl font-bold">5000 $</div>
                  </div>
                </div>
                
                {/* Tournament Details */}
                <div className="grid grid-cols-3 text-center border-t border-gray-700">
                  <div className="py-4">
                    <div className="text-xl font-bold">10 $</div>
                    <div className="text-gray-400 text-sm">Entry fee</div>
                  </div>
                  <div className="py-4 border-l border-r border-gray-700">
                    <div className="text-xl font-bold">387</div>
                    <div className="text-gray-400 text-sm">Participants</div>
                  </div>
                  <div className="py-4">
                    <div className="text-xl font-bold">1 day</div>
                    <div className="text-gray-400 text-sm">Duration</div>
                  </div>
                </div>
                
                {/* Details Button */}
                <button 
                  className="w-full bg-[#2a3042] hover:bg-[#323a4e] py-3 text-center text-white font-medium flex items-center justify-center"
                  onClick={() => {/* Function to show details */}}
                >
                  Details
                  <Info size={18} className="ml-2 text-blue-400" />
                </button>
              </div>
              
              {/* Card 4 - Weekend Battle (second instance) */}
              <div className="bg-[#252b3b] rounded-lg overflow-hidden">
                {/* Finished Badge */}
                <div className="p-4">
                  <div className="inline-flex items-center bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded">
                    FINISHED
                  </div>
                </div>
                
                {/* Tournament Name and Prize */}
                <div className="px-6 pb-4 flex justify-between items-center">
                  <h3 className="text-2xl font-bold">Weekend Battle</h3>
                  <div className="text-right">
                    <div className="text-gray-400 text-sm">PRIZE POOL</div>
                    <div className="text-green-500 text-2xl font-bold">3000 $</div>
                  </div>
                </div>
                
                {/* Tournament Details */}
                <div className="grid grid-cols-3 text-center border-t border-gray-700">
                  <div className="py-4">
                    <div className="text-xl font-bold">1 $</div>
                    <div className="text-gray-400 text-sm">Entry fee</div>
                  </div>
                  <div className="py-4 border-l border-r border-gray-700">
                    <div className="text-xl font-bold">1835</div>
                    <div className="text-gray-400 text-sm">Participants</div>
                  </div>
                  <div className="py-4">
                    <div className="text-xl font-bold">2 days</div>
                    <div className="text-gray-400 text-sm">Duration</div>
                  </div>
                </div>
                
                {/* Details Button */}
                <button 
                  className="w-full bg-[#2a3042] hover:bg-[#323a4e] py-3 text-center text-white font-medium flex items-center justify-center"
                  onClick={() => {/* Function to show details */}}
                >
                  Details
                  <Info size={18} className="ml-2 text-blue-400" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Active;