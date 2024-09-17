import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FiPlusCircle } from "react-icons/fi";
const initialEvents = [
  { id: 1, day: "Thursday", date: "25 Apr 2024", name: "New Event" },
  // Add more Events if needed
];

const ReactCalendar = ({ onEventClick }) => {
  const days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  const abbreviatedDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const startDay = new Date(currentYear, currentMonth, 1).getDay();

  const getCurrentDateString = () => `${months[currentMonth]} ${currentYear}`;

  const getDayTextColor = (day) => {
    return day === 1 || day === 15 || day === 28 || day === 5 || day === 20
      ? "text-[#204349]"
      : "text-[#204349]";
  };

  const renderDays = () => {
    let daysArray = [];

    for (let i = 0; i < startDay; i++) {
      daysArray.push(<div key={`empty-${i}`} className="day empty"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const dayTextColor = getDayTextColor(i);
      const isToday =
        i === currentDate.getDate() &&
        currentMonth === currentDate.getMonth() &&
        currentYear === currentDate.getFullYear();
      const dayClasses = `day text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl m-1 sm:m-2 ${dayTextColor} ${
        isToday ? "bg-[#FDE68A] rounded-full" : ""
      }`;

      daysArray.push(
        <div key={i} className={dayClasses} onClick={() => onEventClick(i)}>
          <span className="font-roboto font-medium">{i}</span>
        </div>
      );
    }

    return daysArray;
  };

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className="calendar-container p-2 sm:p-4">
      <div className="max-w-full mx-auto bg-white rounded-lg overflow-hidden p-4">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <h2 className="font-semibold text-lg sm:text-xl md:text-2xl text-[#204349] mb-2 sm:mb-0">
            {getCurrentDateString()}
          </h2>
          <div className="flex space-x-2 mb-2 sm:mb-0">
            <button
              className="text-[#204349] hover:text-gray-800 focus:outline-none rounded-full border border-[#204349] bg-transparent p-2 sm:p-3 text-sm sm:text-base"
              onClick={goToPreviousMonth}
            >
              <GoChevronLeft />
            </button>
            <button
              className="text-[#204349] hover:text-gray-800 focus:outline-none rounded-full border border-[#204349] bg-transparent p-2 sm:p-3 text-sm sm:text-base"
              onClick={goToNextMonth}
            >
              <GoChevronRight />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center font-semibold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
          {abbreviatedDays.map((day, index) => (
            <div key={index} className="hidden sm:flex justify-center">
              {day}
            </div>
          ))}
          {days.map((day, index) => (
            <div key={index} className="flex sm:hidden justify-center">
              {day}
            </div>
          ))}
          {renderDays()}
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  const [events, setEvents] = useState(initialEvents);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    day: "",
    date: "",
    name: "",
  });
  const [editEventId, setEditEventId] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [deleteEventId, setDeleteEventId] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] =
    useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleDeleteEvent = () => {
    const updatedHolidays = holidays.filter(
      (holiday) => holiday.id !== deleteHolidayId
    );
    setHolidays(updatedHolidays);
    setShowDeleteSuccessMessage(true);

    setTimeout(() => {
      setShowDeleteSuccessMessage(false);
    }, 3000);
  };

  const handleAddEvent = () => {
    const dateObj = new Date(newEvent.date);
    const dayName = dateObj.toLocaleString("default", { weekday: "long" });

    if (editEventId !== null) {
      const updatedEvents = events.map((event) => {
        if (event.id === editEventId) {
          return {
            ...event,
            day: dayName,
            date: newEvent.date,
            name: newEvent.name,
          };
        }
        return event;
      });
      setEvents(updatedEvents);
      setShowSuccessMessage(true);
    } else {
      const newEventObject = {
        id:
          events.length > 0
            ? Math.max(...events.map((event) => event.id)) + 1
            : 1,
        day: dayName,
        date: newEvent.date,
        name: newEvent.name,
      };
      setEvents([...events, newEventObject]);
      setShowSuccessMessage(true);
    }
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);

    closeModal();
  };

  const openEditModal = (eventId) => {
    const eventToEdit = events.find((event) => event.id === eventId);
    setEditEventId(eventId);
    setNewEvent({
      day: eventToEdit.day,
      date: eventToEdit.date,
      name: eventToEdit.name,
    });
    setIsModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setDeleteEventId(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditEventId(null);
    setNewEvent({
      day: "",
      date: "",
      name: "",
    });
  };

  const openDeleteModal = (holidayId) => {
    setDeleteEventId(holidayId);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteHoliday = () => {
    const updatedEvents = events.filter((event) => event.id !== deleteEventId);
    setEvents(updatedEvents);
    setShowDeleteSuccessMessage(true);

    setTimeout(() => {
      setShowDeleteSuccessMessage(false);
    }, 3000);

    closeDeleteModal();
  };

  const handleEventClick = (day) => {
    const selectedDate = new Date(currentYear, currentMonth, day);
    const dateString = `${selectedDate.getFullYear()}-${String(
      selectedDate.getMonth() + 1
    ).padStart(2, "0")}-${String(selectedDate.getDate()).padStart(2, "0")}`;
    const dayName = selectedDate.toLocaleString("default", { weekday: "long" });

    setSelectedDate(day);
    setNewEvent((prev) => ({
      ...prev,
      date: dateString,
      day: dayName,
    }));
    setIsModalOpen(true);
  };

  return (
    <div className="p-4 mt-4  ">
      <h2 className="text-[#204349] lg:text-lg text-sm  font-bold mb-4">
        Hr / Events
      </h2>
      <div className="flex justify-end mb-4  ">
        <button
          className="bg-[#204349] text-white  flex justify-center  items-center py-3  p-4   rounded-lg"
          onClick={() => setIsModalOpen(true)}
        >
          <FiPlusCircle className="text-white text-lg mr-2" />
          <span className="text-sm lg:text-lg">Add New Event</span>
        </button>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Calendar Container */}
        <div className="w-full lg:w-[70vw] bg-white rounded-lg p-4 lg:order-1">
          <ReactCalendar onEventClick={handleEventClick} />
        </div>

       
      </div>

      

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-[#204349] rounded-lg p-6 w-[60vw]">
            <h2 className="text-2xl mb-4 text-white">
              {editEventId ? "Edit Holiday" : "Add Holiday"}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block mb-2 text-white">Date</label>
                <input
                  type="date"
                  name="date"
                  value={newEvent.date}
                  onChange={handleInputChange}
                  className="border p-2 w-full border-[#204349] border-opacity-40 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-2 text-white">Holiday Name</label>
                <input
                  type="text"
                  name="name"
                  value={newEvent.name}
                  onChange={handleInputChange}
                  className="border p-2 w-full border-[#204349] border-opacity-40 focus:outline-none"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-white border border-[#204349] font-semibold text-[#204349] px-4 py-2 rounded mr-2"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="bg-white text-[#204349] px-4 py-2 rounded"
                onClick={handleAddEvent}
              >
                {editEventId ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}

      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-[#204349] rounded-lg p-10 w-[400px] flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold mb-4 text-[#204349]">
              Delete Holiday
            </h2>
            <p className="text-[#204349]">Are you sure you want to delete?</p>
            <div className="mt-4 flex gap-5">
              <button
                className="bg-[#204349] text-white px-10 py-2 rounded"
                onClick={handleDeleteHoliday}
              >
                Delete
              </button>
              <button
                className="bg-white border border-[#204349] font-semibold text-[#204349] px-10 py-2 rounded mr-2"
                onClick={closeDeleteModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccessMessage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#204349] p-8 rounded-lg text-center text-white">
            <h2 className="text-xl mb-4">
              <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
            </h2>
            <p>
              {editEventId
                ? "Event updated successfully!"
                : "Event added successfully!"}
            </p>
          </div>
        </div>
      )}

      {showDeleteSuccessMessage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-red-500 p-8 rounded-lg text-center text-white">
            <h2 className="text-xl mb-4">
              <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
            </h2>
            <p>Event deleted successfully!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
