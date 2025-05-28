import React from 'react';
import { generalNavLinks, toolsNavLinks } from '../../data/navigationLinks';
import {Link} from 'react-router-dom'
const Sidebar = () => {
  return (
    <aside className="w-56 bg-white border-r border-neutral-200 py-6 flex flex-col h-full">
      <div className="px-6 mb-6">
        <h1 className="text-2xl font-bold"><span className="text-[#04e4f3]">Health</span><span className='text-primary-500'>care.</span> </h1>
      </div>
      
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="mb-6">
          <h2 className="px-6 mb-2 text-xs font-medium uppercase text-neutral-400">General</h2>
          <nav>
            <ul>
              {generalNavLinks.map((link) => (
                <li key={link.name} className="mb-1 px-3">
                  <Link key={link.path} to={link.path}  className={`nav-item ${link.active ? 'active' : ''}`}>
                    <link.icon className="h-5 w-5" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        <div>
          <h2 className="px-6 mb-2 text-xs font-medium uppercase text-neutral-400">Tools</h2>
          <nav>
            <ul>
              {toolsNavLinks.map((link) => (
                <li key={link.name} className="mb-1 px-3">
                  <Link key={link.path} to={link.path}  className={`nav-item ${link.active ? 'active' : ''}`}>
                    <link.icon className="h-5 w-5" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;