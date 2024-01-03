
import React, { useState } from 'react';
import { format } from 'date-fns';

const CalendarWithData = ({ events }) => {
  const [selectedDates, setSelectedDates] = useState([]);

  const handleCheckboxChange = (date) => {
    if (selectedDates.includes(date)) {
      setSelectedDates(selectedDates.filter((d) => d !== date));
    } else {
      setSelectedDates([...selectedDates, date]);
    }
  };

  return (
    <div className="bg-gray-200 p-4">
      <h2 className="text-xl font-bold mb-4">Weekly Calendar</h2>
      <div>
        {events.map((event) => (
          <div key={event.date} className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={selectedDates.includes(event.date)}
                onChange={() => handleCheckboxChange(event.date)}
                className="mr-2"
              />
              <span>{format(new Date(event.date), 'eeee, MMMM d')}</span>
            </label>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarWithData;
