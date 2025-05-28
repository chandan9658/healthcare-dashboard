import React from 'react';



const HealthStatusCard = ({ data }) => {
  const { name, status, date, icon, progress } = data;
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'healthy':
        return 'bg-success-500';
      case 'warning':
        return 'bg-warning-500';
      case 'danger':
        return 'bg-danger-500';
      default:
        return 'bg-neutral-500';
    }
  };

  return (
    <div className="health-status-card">
      <div className="flex items-center">
        <div className="mr-3 text-2xl">{icon}</div>
        <div>
          <h3 className="font-medium">{name}</h3>
          {date && <p className="text-xs text-neutral-500">Date: {date}</p>}
        </div>
      </div>
      
      {progress !== undefined && (
        <div className="w-24">
          <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
            <div 
              className={`h-full ${getStatusColor(status)}`} 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthStatusCard;