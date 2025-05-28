import { 
  LayoutDashboard, 
  History, 
  Calendar, 
  ClipboardList,
  BarChart2,
  TestTube,
  MessageSquare,
  HeadphonesIcon,
  Settings 
} from 'lucide-react';

export const generalNavLinks = [
  { 
    name: 'Dashboard', 
    icon: LayoutDashboard, 
    path: '/', 
    active: true 
  },
  { 
    name: 'History', 
    icon: History, 
    path: null, 
    active: false 
  },
  { 
    name: 'Calendar', 
    icon: Calendar, 
    path: null, 
    active: false 
  },
  { 
    name: 'Appointments', 
    icon: ClipboardList, 
    path: null, 
    active: false 
  },
  { 
    name: 'Statistics', 
    icon: BarChart2, 
    path: null, 
    active: false 
  }
];

export const toolsNavLinks = [

  { 
    name: 'Chat', 
    icon: MessageSquare, 
    path: null, 
    active: false 
  },
  { 
    name: 'Support', 
    icon: HeadphonesIcon, 
    path: null, 
    active: false 
  },

];