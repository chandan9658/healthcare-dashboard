
export const calendarData = {
  month: 'October',
  year: 2021,
  days: [
    { day: 25, dayName: 'Mon', times: ['10:00', '11:00', '12:00'] },
    { day: 26, dayName: 'Tues', times: ['08:00', '09:00', '10:00'] },
    { day: 27, dayName: 'Wed', times: ['12:00', '13:00'] },
    { day: 28, dayName: 'Thurs', times: ['10:00', '11:00'] },
    { day: 29, dayName: 'Fri', times: ['14:00', '16:00'] },
    { day: 30, dayName: 'Sat', times: ['11:00', '14:00', '15:00'] },
    { day: 31, dayName: 'Sun', times: ['09:00', '10:00', '11:00'] },
  ],
};

export const appointmentData = [
  {
    id: 1,
    title: 'Dentist',
    time: '09:00-11:00',
    doctor: 'Dr. Cameron Williamson',
    icon: '🦷',
    color: 'bg-secondary-700',
  },
  {
    id: 2,
    title: 'Physiotherapy Appointment',
    time: '11:00-12:00',
    doctor: 'Dr. Kevin Djones',
    icon: '💆',
    color: 'bg-secondary-200',
  },
];

export const upcomingAppointments = {
  thursday: [
    {
      id: 1,
      title: 'Health checkup complete',
      time: '11:00 AM',
      icon: '✅',
    },
    {
      id: 2,
      title: 'Ophthalmologist',
      time: '14:00 PM',
      icon: '👁️',
    },
  ],
  saturday: [
    {
      id: 3,
      title: 'Cardiologist',
      time: '12:00 AM',
      icon: '❤️',
    },
    {
      id: 4,
      title: 'Neurologist',
      time: '16:00 PM',
      icon: '🧠',
    },
  ],
};

export const activityData = [
  { day: 'Mon', appointments: [20, 30, 15] },
  { day: 'Tues', appointments: [40, 10] },
  { day: 'Wed', appointments: [25, 35, 10] },
  { day: 'Thurs', appointments: [15, 25, 35] },
  { day: 'Fri', appointments: [30, 20] },
  { day: 'Sat', appointments: [40, 10, 20] },
  { day: 'Sun', appointments: [15, 30] },
];