'use client';
import React from 'react';
import CustomFilters from './CustomFilters';
const Navbar = () => {
  return (
    <nav className="w-full px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 shadow-md flex items-center justify-between">
      {/* Logo */}
      <div className="text-white text-2xl font-bold tracking-wide">
        Pokédex
      </div>

      <CustomFilters />
    </nav>
  );
};

export default Navbar;
