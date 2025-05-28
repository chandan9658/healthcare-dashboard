import React from 'react';
import DashboardLayout from './components/layout/DashboardLayout';
import DashboardContent from './components/dashboard/DashboardContent';

function App() {
  return (
    <div className="min-h-screen bg-neutral-100">
      <DashboardLayout>
        <DashboardContent />
      </DashboardLayout>
    </div>
  );
}

export default App;