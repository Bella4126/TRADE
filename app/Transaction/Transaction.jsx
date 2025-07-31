'use client';

import React, { useState } from 'react';
import { ArrowUpRight, ArrowDownLeft, Clock, CheckCircle, XCircle, Filter } from 'lucide-react';
import Link from 'next/link';

const Transaction = () => {
  const [filterType, setFilterType] = useState('all');
  const [dateRange, setDateRange] = useState('7days');

  // Sample transaction data
  const transactions = [
    {
      id: 'TXN001',
      type: 'deposit',
      amount: 50000,
      currency: 'INR',
      status: 'completed',
      date: '2024-01-20 14:30:25',
      method: 'UPI',
      reference: 'UPI202401201430'
    },
    {
      id: 'TXN002',
      type: 'withdrawal',
      amount: 25000,
      currency: 'INR',
      status: 'pending',
      date: '2024-01-19 16:45:12',
      method: 'Bank Transfer',
      reference: 'WD202401191645'
    },
    {
      id: 'TXN003',
      type: 'deposit',
      amount: 75000,
      currency: 'INR',
      status: 'completed',
      date: '2024-01-18 09:15:33',
      method: 'IMPS',
      reference: 'IMPS202401180915'
    },
    {
      id: 'TXN004',
      type: 'withdrawal',
      amount: 12500,
      currency: 'INR',
      status: 'failed',
      date: '2024-01-17 11:22:44',
      method: 'UPI',
      reference: 'UPI202401171122'
    },
    {
      id: 'TXN005',
      type: 'deposit',
      amount: 100000,
      currency: 'INR',
      status: 'completed',
      date: '2024-01-16 13:55:17',
      method: 'NEFT',
      reference: 'NEFT202401161355'
    },
    {
      id: 'TXN006',
      type: 'withdrawal',
      amount: 35000,
      currency: 'INR',
      status: 'completed',
      date: '2024-01-15 10:30:08',
      method: 'Bank Transfer',
      reference: 'WD202401151030'
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle size={16} className="text-green-500" />;
      case 'pending':
        return <Clock size={16} className="text-yellow-500" />;
      case 'failed':
        return <XCircle size={16} className="text-red-500" />;
      default:
        return <Clock size={16} className="text-gray-500" />;
    }
  };

  const getTypeIcon = (type) => {
    return type === 'deposit' 
      ? <ArrowDownLeft size={16} className="text-green-500" />
      : <ArrowUpRight size={16} className="text-red-500" />;
  };

  const formatAmount = (amount, type) => {
    const sign = type === 'deposit' ? '+' : '-';
    return `${sign}₹${amount.toLocaleString()}`;
  };

  const getAmountColor = (type) => {
    return type === 'deposit' ? 'text-green-500' : 'text-red-500';
  };

  const filteredTransactions = transactions.filter(tx => {
    if (filterType === 'all') return true;
    return tx.type === filterType;
  });

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
          <Link href="/Withdraw">
            <button className="py-3 px-4 text-gray-400 whitespace-nowrap">Withdrawal</button>
          </Link>
          <Link href="/Transaction">
            <button className="py-3 px-4 bg-[#2a3042] text-white whitespace-nowrap">Transactions</button>
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
          <Link href="/Analytics">
            <button className="py-3 px-4 text-gray-400 whitespace-nowrap">Analytics</button>
          </Link>
        </div>

        {/* Currency Info */}
        <div className="flex flex-wrap justify-between items-center mb-6 text-sm">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
            <span className="text-gray-400">My current currency</span>
            <div className="flex items-center">
              <span className="mr-2">₹ INR</span>
              <button className="bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded text-xs">
                CHANGE
              </button>
            </div>
            <span className="text-gray-400">Available for withdrawal</span>
            <span>0.00₹</span>
            <span className="text-gray-400">In the account</span>
            <span>0.00₹</span>
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-[#252b3b] rounded-lg p-4 mb-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center">
              <Filter size={16} className="text-gray-400 mr-2" />
              <span className="text-gray-400 text-sm mr-3">Filter by:</span>
            </div>
            
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="bg-[#1a1f2e] border border-gray-600 rounded px-3 py-2 text-white text-sm"
            >
              <option value="all">All Types</option>
              <option value="deposit">Deposits</option>
              <option value="withdrawal">Withdrawals</option>
            </select>

            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="bg-[#1a1f2e] border border-gray-600 rounded px-3 py-2 text-white text-sm"
            >
              <option value="7days">Last 7 days</option>
              <option value="30days">Last 30 days</option>
              <option value="3months">Last 3 months</option>
              <option value="1year">Last year</option>
            </select>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-[#252b3b] rounded-lg overflow-hidden">
          <div className="p-4 border-b border-gray-600">
            <h2 className="text-xl font-semibold">Transaction History</h2>
            <p className="text-gray-400 text-sm mt-1">
              Showing {filteredTransactions.length} transactions
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#1a1f2e]">
                <tr>
                  <th className="text-left py-3 px-4 text-gray-400 text-sm font-medium">Type</th>
                  <th className="text-left py-3 px-4 text-gray-400 text-sm font-medium">Amount</th>
                  <th className="text-left py-3 px-4 text-gray-400 text-sm font-medium">Status</th>
                  <th className="text-left py-3 px-4 text-gray-400 text-sm font-medium">Method</th>
                  <th className="text-left py-3 px-4 text-gray-400 text-sm font-medium">Date & Time</th>
                  <th className="text-left py-3 px-4 text-gray-400 text-sm font-medium">Reference</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((transaction, index) => (
                  <tr key={transaction.id} className={`border-b border-gray-700 hover:bg-[#2a3042] transition-colors ${index % 2 === 0 ? 'bg-[#252b3b]' : 'bg-[#1f2332]'}`}>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        {getTypeIcon(transaction.type)}
                        <span className="ml-2 capitalize">{transaction.type}</span>
                      </div>
                    </td>
                    <td className={`py-4 px-4 font-semibold ${getAmountColor(transaction.type)}`}>
                      {formatAmount(transaction.amount, transaction.type)}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        {getStatusIcon(transaction.status)}
                        <span className="ml-2 capitalize text-sm">{transaction.status}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-300">{transaction.method}</td>
                    <td className="py-4 px-4 text-gray-300 text-sm">
                      <div>{transaction.date.split(' ')[0]}</div>
                      <div className="text-gray-500">{transaction.date.split(' ')[1]}</div>
                    </td>
                    <td className="py-4 px-4 text-gray-400 text-sm font-mono">
                      {transaction.reference}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredTransactions.length === 0 && (
            <div className="text-center py-8 text-gray-400">
              <p>No transactions found for the selected filters.</p>
            </div>
          )}
        </div>

        {/* Transaction Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-[#252b3b] rounded-lg p-4">
            <div className="text-gray-400 text-sm mb-1">Total Deposits</div>
            <div className="text-green-500 text-xl font-semibold">
              +₹{transactions.filter(t => t.type === 'deposit' && t.status === 'completed').reduce((sum, t) => sum + t.amount, 0).toLocaleString()}
            </div>
          </div>
          
          <div className="bg-[#252b3b] rounded-lg p-4">
            <div className="text-gray-400 text-sm mb-1">Total Withdrawals</div>
            <div className="text-red-500 text-xl font-semibold">
              -₹{transactions.filter(t => t.type === 'withdrawal' && t.status === 'completed').reduce((sum, t) => sum + t.amount, 0).toLocaleString()}
            </div>
          </div>
          
          <div className="bg-[#252b3b] rounded-lg p-4">
            <div className="text-gray-400 text-sm mb-1">Pending Transactions</div>
            <div className="text-yellow-500 text-xl font-semibold">
              {transactions.filter(t => t.status === 'pending').length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;