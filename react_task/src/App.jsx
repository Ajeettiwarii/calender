
import React from 'react';
import CalendarComponent from './CalendarComponent';
// import CalendarWithData from './CalendarWithData'; 
import CalendarWithData from './CalenderWithData';


const App = () => {


  
  const sampleEvents = [
    { date: '2023-07-20', time: '22:30', isChecked: false },
    { date: '2023-07-21', time: '09:00', isChecked: false },
    // Add more events as needed
  ];


  return (
    <div>
      <CalendarComponent />
      <CalendarWithData events={sampleEvents} />
    </div>
  );
};


export default App;
