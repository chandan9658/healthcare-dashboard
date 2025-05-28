import React from 'react';
import { Search, ChevronRight } from 'lucide-react';
import { healthStatusData } from '../../data/healthData';
import HealthStatusCard from './HealthStatusCard';
import humanBody from '../../assets/images/humanBody.png';
const AnatomySection = () => {
  return (
    <div className=" p-6 rounded-2xl">
      <div className="relative">
        {/* <div className="absolute top-0 left-0 z-10">
          <div className="p-2 bg-white rounded-full shadow-md">
            <Search className="w-5 h-5 text-neutral-400" />
          </div>
        </div> */}
        
        <div className="relative flex">
          <div className="w-1/2 relative min-h-[400px] flex items-center justify-center">
            <img 
              src={humanBody}
              alt="Human anatomy" 
              className="h-[400px] object-contain"
            />
            
            {/* {healthStatusData.map((item) => {
              if (item.id === 'heart' || item.id === 'leg') {
                return (
                  <div 
                    key={item.id}
                    className={`health-status-indicator healthy`}
                    style={{ 
                      top: item.position.top, 
                      left: item.position.left,
                      right: item.position.right
                    }}
                  >
                    <span className="mr-1">{item.icon}</span>
                    {item.name}
                  </div>
                );
              }
              return null;
            })} */}
          </div>
          
          <div className="w-1/2 pl-4 space-y-4">
            {healthStatusData
              .filter(item => item.id !== 'heart' && item.id !== 'leg')
              .map((item) => (
                <HealthStatusCard key={item.id} data={item} />
              ))}
          </div>
        </div>
        
        <div className="absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="w-8 h-1 bg-neutral-300 rounded-full mb-1"></div>
        </div>
        
        <div className="absolute bottom-[-32px] right-0 mt-2 flex items-center text-primary-500 text-sm font-medium">
          <span>Details</span>
          <ChevronRight className="w-4 h-4 ml-1" />
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;