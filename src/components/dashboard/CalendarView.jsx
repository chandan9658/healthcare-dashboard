import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { calendarData, appointmentData } from '../../data/calendarData';

const CalendarView = () => {
  const { month, year, days } = calendarData;

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-neutral-800">{month} {year}</h2>
        <div className="flex items-center">
          <button className="p-1 rounded-md hover:bg-neutral-100">
            <ChevronLeft className="w-5 h-5 text-neutral-500" />
          </button>
          <button className="p-1 rounded-md hover:bg-neutral-100 ml-2">
            <ChevronRight className="w-5 h-5 text-neutral-500" />
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-2xl shadow-card overflow-hidden mb-4">
        <div className="grid grid-cols-7">
          {days.map((day) => (
            <div key={day.day} className="calendar-cell border-b border-r border-neutral-100 last:border-r-0">
              <div className="text-xs text-neutral-500 mb-1">{day.dayName}</div>
              <div className="calendar-date">{day.day}</div>
              {day.times.map((time, index) => (
                <div key={index} className="calendar-time">
                  {time}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {appointmentData.map((appointment) => (
          <div 
            key={appointment.id}
            className={`p-4 rounded-2xl text-white ${appointment.color}`}
          >
            <div className="flex items-center justify-between mb-1">
              
              <h3 className="font-medium">{appointment.title}</h3>
              <span className="text-xl mr-2">{appointment.icon}</span>
            </div>
            <p className="text-sm mb-1">{appointment.time}</p>
            <p className="text-sm opacity-90">{appointment.doctor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;