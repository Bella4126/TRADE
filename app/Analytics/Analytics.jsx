'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Eye, CircleUser, Check } from 'lucide-react';
import { Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title } from 'chart.js';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title);

const Analytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Month');

  // Pie chart data
  const pieData = {
    labels: ['BRLUSD_otc 36%', 'USDARS_otc 17%', 'NZDCAD_otc 16%', 'USDBDT_otc 16%', 'USDINR_otc 14%'],
    datasets: [
      {
        data: [36, 17, 16, 16, 14],
        backgroundColor: [
          '#32CD32', // Green
          '#1E90FF', // Blue
          '#FF6347', // Red
          '#800000', // Dark Red
          '#FFA500', // Orange
        ],
        borderWidth: 0,
        hoverOffset: 10
      },
    ],
  };

  // Line chart options (same for both line charts)
  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#999',
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#999',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    },
  };

  // Line chart data for Statistics of profitable trades
  const statisticsLineData = {
    labels: ['28. Apr', '5. May', '12. May', '19. May'],
    datasets: [
      {
        data: [0, 0, 0, 0],
        borderColor: '#32CD32', // Green
        backgroundColor: 'transparent',
        tension: 0.4,
      },
    ],
  };

  // Line chart data for Percentage % of profitable trades
  const percentageLineData = {
    labels: ['28. Apr', '5. May', '12. May', '19. May'],
    datasets: [
      {
        data: [0, 0, 0, 0],
        borderColor: '#32CD32', // Green
        backgroundColor: 'transparent',
        tension: 0.4,
      },
    ],
  };

  // Pie chart options
  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `${context.label}`;
          }
        }
      }
    },
    cutout: '30%',
  };

  return (
    <div className="bg-[#1a1f2e] text-white min-h-screen">
      <div className="p-4">
        {/* Navigation Tabs */}
        <div className="bg-[#252b3b] rounded-lg mb-6 flex overflow-x-auto">
           <Link href="/Deposit">
            <button className="py-3 px-4 text-gray-400 whitespace-nowrap">
              Deposit
            </button>
          </Link>
            <Link href="/Withdraw"><button className="py-3 px-4 text-gray-400 whitespace-nowrap">Withdrawal</button></Link>
                    <Link href="/Transaction">
                  <button className="py-3 px-4 text-gray-400 whitespace-nowrap">Transactions</button>
                </Link>
                <Link href="/Trade">
                  <button className="py-3 px-4 text-gray-400 whitespace-nowrap">Trades</button>
                </Link>
                <Link href="/Account">
                  <button className="py-3 px-4 text-gray-400 whitespace-nowrap">Account</button>
                </Link>
                <Link href="/Market">
                  <button className="py-3 px-4 text-gray-400 whitespace-nowrap">Market</button>
                </Link>
                <Link href="/Tournament">
                  <button className="py-3 px-4 text-gray-400 whitespace-nowrap">Tournaments</button>
                </Link>
                <Link href="/Analytics"><button className="py-3 px-4 bg-[#2a3042] text-white whitespace-nowrap">Analytics</button></Link>
        </div>

        {/* User Info Bar */}
        <div className="flex flex-wrap justify-between items-center mb-6">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
            <div className="flex items-center">
              <CircleUser size={36} className="text-blue-500 mr-3" />
              <div>
                <div className="text-sm text-gray-400">singh.nikhil@webseeder.tech</div>
                <div className="flex items-center">
                  <span>ID: 59245077</span>
                  <Check size={16} className="text-green-500 ml-1" />
                </div>
              </div>
            </div>
            
            <div className="border-l border-gray-700 h-12 mx-2"></div>
            
            <div>
              <div className="text-sm text-gray-400">Location</div>
              <div>India</div>
            </div>
            
            <div className="border-l border-gray-700 h-12 mx-2"></div>
            
            <div>
              <div className="text-sm text-gray-400">In the account</div>
              <div>₹0.00</div>
            </div>
            
            <div className="border-l border-gray-700 h-12 mx-2"></div>
            
            <div className="flex items-center">
              <div>
                <div className="text-sm text-gray-400">In the demo</div>
                <div>₹700,000.00</div>
              </div>
              <Eye size={18} className="ml-2 text-gray-400" />
            </div>
          </div>
          
          <div className="relative">
            <button className="flex items-center justify-between bg-[#252b3b] rounded-md px-4 py-2 w-40">
              <span>{selectedPeriod}</span>
              <ChevronDown size={16} className="ml-2" />
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* General Data Section */}
          <div className="bg-[#252b3b] rounded-lg overflow-hidden">
            <div className="p-4 border-b border-gray-700">
              <h2 className="text-lg font-semibold">General data</h2>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-3 gap-6 mb-10">
                <div className="flex flex-col items-center">
                  <div className="relative w-24 h-24 flex items-center justify-center mb-2">
                    <div className="absolute inset-0 rounded-full border-4 border-gray-700"></div>
                    <span className="text-3xl font-bold">0</span>
                  </div>
                  <span className="text-sm text-gray-400">Trades count</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="mb-2">
                    <span className="text-3xl font-bold">0 $</span>
                  </div>
                  <span className="text-sm text-gray-400">Trades profit</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="relative w-24 h-24 flex items-center justify-center mb-2">
                    <div className="absolute inset-0 rounded-full border-4 border-gray-700"></div>
                    <div className="flex flex-col items-center">
                      <span className="text-3xl font-bold">0</span>
                      <span className="text-xs text-gray-400">0%</span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-400">Profitable trades</span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mb-10">
                <div className="flex flex-col">
                  <div className="mb-1">
                    <span className="text-xl font-bold">0 $</span>
                  </div>
                  <div className="h-1 bg-gray-700 mb-1"></div>
                  <span className="text-sm text-gray-400">Average profit</span>
                </div>
                
                <div className="flex flex-col">
                  <div className="mb-1">
                    <span className="text-xl font-bold">0 $</span>
                  </div>
                  <div className="h-1 bg-gray-700 mb-1"></div>
                  <span className="text-sm text-gray-400">Net turnover</span>
                </div>
                
                <div className="flex flex-col">
                  <div className="mb-1">
                    <span className="text-xl font-bold">0 $</span>
                  </div>
                  <div className="h-1 bg-gray-700 mb-1"></div>
                  <span className="text-sm text-gray-400">Hedged trades</span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="flex flex-col">
                  <div className="mb-1">
                    <span className="text-xl font-bold">0 $</span>
                  </div>
                  <div className="h-1 bg-gray-700 mb-1"></div>
                  <span className="text-sm text-gray-400">Min trade amount</span>
                </div>
                
                <div className="flex flex-col">
                  <div className="mb-1">
                    <span className="text-xl font-bold">0 $</span>
                  </div>
                  <div className="h-1 bg-gray-700 mb-1"></div>
                  <span className="text-sm text-gray-400">Max trade amount</span>
                </div>
                
                <div className="flex flex-col">
                  <div className="mb-1">
                    <span className="text-xl font-bold">0 $</span>
                  </div>
                  <div className="h-1 bg-gray-700 mb-1"></div>
                  <span className="text-sm text-gray-400">Max trade profit</span>
                </div>
              </div>
              
              {/* Color Scale */}
              <div className="mt-8">
                <div className="flex">
                  <div className="h-3 w-1/4 bg-red-600"></div>
                  <div className="h-3 w-1/4 bg-yellow-500"></div>
                  <div className="h-3 w-1/4 bg-green-500"></div>
                  <div className="h-3 w-1/4 bg-green-700"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>-1K</span>
                  <span>0</span>
                  <span>+1K</span>
                </div>
              </div>
              
              {/* Top 5 Instruments */}
              <div className="mt-10">
                <h3 className="text-lg font-semibold mb-6">Top 5 most profitable instruments among traders</h3>
                
                <div className="flex justify-between">
                  <div className="w-2/5 h-64">
                    <Pie data={pieData} options={pieOptions} />
                  </div>
                  
                  <div className="w-3/5 pl-8">
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                        <span>BRLUSD_otc 36%</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                        <span>USDARS_otc 17%</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-red-400 rounded-full mr-3"></div>
                        <span>NZDCAD_otc 16%</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-red-900 rounded-full mr-3"></div>
                        <span>USDBDT_otc 16%</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-orange-500 rounded-full mr-3"></div>
                        <span>USDINR_otc 14%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side Charts */}
          <div className="space-y-6">
            {/* Statistics Chart */}
            <div className="bg-[#252b3b] rounded-lg overflow-hidden">
              <div className="p-4 border-b border-gray-700">
                <h2 className="text-lg font-semibold">Statistics of profitable trades</h2>
              </div>
              
              <div className="p-4">
                <div style={{ height: "250px" }}>
                  <Line data={statisticsLineData} options={lineOptions} />
                </div>
              </div>
            </div>
            
            {/* Percentage Chart */}
            <div className="bg-[#252b3b] rounded-lg overflow-hidden">
              <div className="p-4 border-b border-gray-700">
                <h2 className="text-lg font-semibold">Percentage % of profitable trades</h2>
              </div>
              
              <div className="p-4">
                <div style={{ height: "250px" }}>
                  <Line data={percentageLineData} options={lineOptions} />
                </div>
              </div>
            </div>
            
            {/* Statistics Profit & Loss */}
            <div className="bg-[#252b3b] rounded-lg overflow-hidden">
              <div className="p-4 border-b border-gray-700">
                <h2 className="text-lg font-semibold">Statistics Profit & Loss by instruments</h2>
              </div>
              
              <div className="p-4 flex items-center justify-center" style={{ height: "200px" }}>
                <span className="text-3xl text-gray-500">No data</span>
              </div>
            </div>
            
            {/* Distribution Chart */}
            <div className="bg-[#252b3b] rounded-lg overflow-hidden">
              <div className="p-4 border-b border-gray-700">
                <h2 className="text-lg font-semibold">Distribution of trades by instruments, %</h2>
              </div>
              
              <div className="p-4 flex items-center justify-center" style={{ height: "200px" }}>
                <span className="text-3xl text-gray-500">No data</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;