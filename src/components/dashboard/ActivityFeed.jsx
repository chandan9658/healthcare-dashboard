import React from 'react';
import { activityData } from '../../data/calendarData';

const ActivityFeed = () => {
  const maxHeight = 100; // Maximum height for visualization
  
  return (
    <div className="bg-neutral-50 p-6 rounded-2xl shadow-card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-neutral-800">Activity</h2>
        <p className="text-sm text-neutral-500">3 appointment on this week</p>
      </div>
      
      <div className="flex items-end h-[180px] justify-between">
        {activityData.map((day, dayIndex) => (
          <div key={dayIndex} className="flex items-end">
            {day.appointments.map((value, index) => {
              const height = (value / 40) * maxHeight;
              const colors = [ 'bg-secondary-100', 'bg-primary-400','bg-primary-200'];
              
              return (
                <div 
                  key={index}
                  className={`activity-bar ${colors[index % colors.length]}`}
                  style={{ 
                    width:'5px',
                    height: `${height}px`,
                  }}
                ></div>
              );
            })}
          </div>
        ))}
      </div>
      
      <div className="flex justify-between mt-2">
        {activityData.map((day, index) => (
          <div key={index} className="text-xs text-neutral-500">{day.day}</div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;