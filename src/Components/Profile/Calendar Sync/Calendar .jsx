<<<<<<< HEAD
import React, { useState } from "react";

const holidays = {
  "2024-01-01": "New Year's Day",
  "2024-12-25": "Christmas Day",
  "2024-07-04": "Independence Day",
};

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState({});
  const [newEvent, setNewEvent] = useState("");
  const [eventTime, setEventTime] = useState("");

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const startDay = new Date(currentYear, currentMonth, 1).getDay();
  const days = Array.from(
    { length: daysInMonth(currentYear, currentMonth) },
    (_, i) => i + 1
  );

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDayClick = (day) => {
    const dateKey = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    setSelectedDate(dateKey);
    setNewEvent(events[dateKey]?.event || "");
    setEventTime(events[dateKey]?.time || "");
  };

  const handleAddEvent = () => {
    if (selectedDate && newEvent.trim() && eventTime.trim()) {
      setEvents({
        ...events,
        [selectedDate]: { event: newEvent, time: eventTime },
      });
      setNewEvent("");
      setEventTime("");
    }
  };

  const getDayClass = (day) => {
    const dateKey = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    if (holidays[dateKey]) return "bg-red-200 text-red-800";
    if (new Date(currentYear, currentMonth, day).getDay() === 0)
      return "bg-blue-100 text-blue-800";
    return "bg-gray-100 hover:bg-gray-200";
  };
=======
import React, { useEffect } from "react";
>>>>>>> e7ba3ce9cbe1e03664d35dc8a8523ef9d2126af7

  return (
<<<<<<< HEAD
    <div className="p-5 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-5">Calendar</h1>

      {/* Month & Year Selector */}
      <div className="flex justify-between items-center mb-5">
        <button
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          onClick={handlePrevMonth}
        >
          Prev
        </button>
        <h2 className="text-lg font-semibold">
          {new Date(currentYear, currentMonth).toLocaleString("default", {
            month: "long",
          })}{" "}
          {currentYear}
        </h2>
        <button
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          onClick={handleNextMonth}
        >
          Next
        </button>
=======
    <div>
      <div className="bg-white  relative mx-auto w-full md:h-[17rem] h-full ">
        <h2 className="text-lg font-bold text-gray-800 p-10">Calendar Sync</h2>
        <p className="px-10">
          Automatically sync all the deadlines and other related items from all
          active courses to your calendar.
        </p>
        <h2 className="px-10 pt-2 font-semibold ">Add to my calendar</h2>
        <div className="px-10 md:space-x-10 md:pb-0 pb-5  space-y-2 md:space-y-0 text-sm pt-2 flex flex-col md:flex-row">
          <a className="border border-2 p-2  border-blue-600 rounded hover:bg-blue-100 cursor-pointer">
            Calendar
          </a>
          {/* <a className="border border-2 p-2 border-blue-600 rounded hover:bg-blue-100 cursor-pointer">
            Apple Calendar
          </a>
          <a className="border border-2 p-2 border-blue-600 rounded hover:bg-blue-100 cursor-pointer">
            Other Calendar
          </a> */}
        </div>
>>>>>>> e7ba3ce9cbe1e03664d35dc8a8523ef9d2126af7
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2 border p-3 rounded-lg bg-gray-50 shadow-md">
        {/* Weekdays */}
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="text-center font-bold uppercase text-gray-700"
          >
            {day}
          </div>
        ))}

        {/* Empty Days */}
        {Array.from({ length: startDay }).map((_, i) => (
          <div key={i} className="p-3"></div>
        ))}

        {/* Days */}
        {days.map((day) => {
          const dateKey = `${currentYear}-${String(currentMonth + 1).padStart(
            2,
            "0"
          )}-${String(day).padStart(2, "0")}`;
          return (
            <div
              key={day}
              className={`p-3 text-center border rounded-lg cursor-pointer ${getDayClass(
                day
              )}`}
              onClick={() => handleDayClick(day)}
            >
              <span className="font-bold">{day}</span>
              {holidays[dateKey] && (
                <div className="text-sm text-gray-600">{holidays[dateKey]}</div>
              )}
              {events[dateKey] && (
                <div className="text-xs text-green-600">
                  {events[dateKey].event} ({events[dateKey].time})
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Event Form */}
      {selectedDate && (
        <div className="mt-5 p-4 border rounded-lg bg-white shadow-lg">
          <h2 className="text-lg font-semibold mb-3">
            Add Event for {selectedDate}
          </h2>
          <input
            type="text"
            className="w-full p-2 border rounded-lg mb-3 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter event details"
            value={newEvent}
            onChange={(e) => setNewEvent(e.target.value)}
          />
          <input
            type="time"
            className="w-full p-2 border rounded-lg mb-3 focus:outline-none focus:ring focus:ring-blue-300"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={handleAddEvent}
          >
            Save Event
          </button>
        </div>
      )}
    </div>
  );
};

export default Calendar;
