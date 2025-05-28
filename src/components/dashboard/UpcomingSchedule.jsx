import { upcomingAppointments } from '../../data/calendarData';
import AppointmentCard from './AppointmentCard';
import React from 'react';

const UpcomingSchedule = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-neutral-800 mb-4">The Upcoming Schedule</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-sm text-neutral-500 mb-3">On Thursday</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upcomingAppointments.thursday.map((appointment) => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-sm text-neutral-500 mb-3">On Saturday</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upcomingAppointments.saturday.map((appointment) => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;