'use client';

import React from 'react';

const NavItem = ({ icon, label, isOpen, active, multiline, onClick }) => {
  return (
    <div 
      className={`w-full flex flex-col items-center py-4 px-2 cursor-pointer transition-all duration-200 ${
        active 
          ? 'bg-blue-500 text-white shadow-lg' 
          : 'hover:bg-gray-800 hover:text-blue-300'
      }`}
      onClick={onClick}
    >
      <div className="relative">
        {icon}
      </div>
      {isOpen ? (
        <div className={`mt-1 text-xs font-medium ${multiline ? 'text-center leading-tight' : ''}`}>
          {label}
        </div>
      ) : (
        <div className={`mt-1 text-xs font-medium ${multiline ? 'text-center leading-none' : ''}`}>
          {multiline ? (
            <>
              TOURNA-<br />MENTS
            </>
          ) : (
            label
          )}
        </div>
      )}
    </div>
  );
};

export default NavItem;