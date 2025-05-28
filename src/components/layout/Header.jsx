import React from 'react';
import { Search, Bell, PlusSquare } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-16 px-6 bg-white flex items-center justify-between border-b border-neutral-200">
      <div className="flex items-center">
        {/* <h1 className="text-2xl font-bold text-primary-500">Healthcare.</h1> */}
      </div>
      
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-neutral-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-neutral-200 rounded-lg bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Search"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-neutral-500 hover:bg-neutral-100 rounded-lg">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-primary-500 rounded-full"></span>
        </button>
        
        <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
          <img 
            src="https://i.pravatar.cc/100?img=68" 
            alt="User avatar" 
            className="w-8 h-8 rounded-md"
          />
        </div>
        
        <button className="p-2 bg-secondary-700 text-white rounded-lg hover:bg-secondary-800 transition-colors">
          <PlusSquare className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;