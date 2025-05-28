import React from 'react';
import AnatomySection from './AnatomySection';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import { Search, ChevronDown, PlusSquare } from 'lucide-react';

const DashboardContent = () => {
  return (
    <div>
     

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="w-100 flex items-center gap-6">
            <h1 className="text-2xl font-bold text-neutral-800">Dashboard</h1>

            <div className="w-full max-w-md">
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
          </div>
          <AnatomySection />
          <ActivityFeed />
        </div>
        <div className="bg-neutral-50 p-5 rounded-[10px]">
          <div className="w-100 flex justify-end items-center">
            <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center me-2">
              <img
                src="https://i.pravatar.cc/100?img=68"
                alt="User avatar"
                className="w-8 h-8 rounded-md"
              />
            </div>

            <button className="p-2 bg-secondary-700 text-white rounded-lg hover:bg-secondary-800 transition-colors">
              <PlusSquare className="h-5 w-5" />
            </button>
            {/* <span className="text-sm text-neutral-600 mr-2">This Week</span>
           <ChevronDown className="w-4 h-4 text-neutral-400" /> */}
          </div>
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;