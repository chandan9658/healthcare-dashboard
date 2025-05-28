import React from 'react';
import { PencilIcon } from 'lucide-react';



const AppointmentCard= ({ appointment }) => {
  const { title, time, icon } = appointment;
  
  return (
    <div className="bg-secondary-50 p-4 rounded-2xl shadow-card flex justify-between items-center">
      <div>
        <div className="flex items-center">
          <span className="text-xl mr-2">{icon}</span>
          <h3 className="font-medium">{title}</h3>
        </div>
        <p className="text-sm text-neutral-500 mt-1">{time}</p>
      </div>
      
      <button className="text-neutral-400 hover:text-neutral-600">
        <PencilIcon className="w-4 h-4" />
      </button>
    </div>
  );
};

export default AppointmentCard;