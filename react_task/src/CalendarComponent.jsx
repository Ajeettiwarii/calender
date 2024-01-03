
import React, { useState } from 'react';
import moment from 'moment-timezone';

export const CalendarComponent = () => {
  const [currentDate, setCurrentDate] = useState(moment().utc());
  const [timezone, setTimezone] = useState('UTC');
  const [events, setEvents] = useState([]);

  const loadWeeklyData = () => {
  
  };  

  const handleDateChange = (newDate) => {
    setCurrentDate(newDate);
    loadWeeklyData();
  };

  const handleTimezoneChange = (newTimezone) => {
    setTimezone(newTimezone);

  };

  return (
    <div className="bg-gray-200 p-4">
      <h1 className="text-2xl font-bold mb-4">Calendar</h1>
      <div className="mb-4">
        <p className="mb-2">Date: {currentDate.format('YYYY-MM-DD')}</p>
        <button className="bg-blue-500 text-white px-2 py-1 mr-2" onClick={() => handleDateChange(currentDate.clone().subtract(7, 'days'))}>
          Previous
        </button>
        <button className="bg-blue-500 text-white px-2 py-1" onClick={() => handleDateChange(currentDate.clone().add(7, 'days'))}>Next</button>
      </div>
      <div className="mb-4">
        <label className="mr-2">Timezone:</label>
        <select className="p-2" onChange={(e) => handleTimezoneChange(e.target.value)} value={timezone}>
          <option value="UTC">UTC</option>
          <option value="America/New_York">America/New_York</option>

        </select>
      </div>
 
    </div>
  );
};

export default CalendarComponent;
