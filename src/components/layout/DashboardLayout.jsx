import React, { ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';



const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* <Header /> */}
        <main className="flex-1 overflow-y-auto bg-white p-3">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;