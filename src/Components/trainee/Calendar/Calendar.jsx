// import React, { useState, useEffect } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import Navbar from "../../Navbar";
// import Footer from "../../Home/footer/Footer";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import IMG from "../../../assets/Calender/undraw_Booked_re_vtod.png"

// const localizer = momentLocalizer(moment);

// const eventData = [
//     {
//         id: 1,
//         title: 'Meeting with Client',
//         start: new Date(2024, 4, 10, 10, 0),
//         end: new Date(2024, 4, 10, 12, 0),
//         type: 'video', // added event type
//     },
//     {
//         id: 2,
//         title: 'Team Lunch',
//         start: new Date(2024, 4, 15, 12, 0),
//         end: new Date(2024, 4, 15, 13, 0),
//         type: 'audio', // added event type
//     },
// ];

// const GoogleCalendar = () => {
//     const [events, setEvents] = useState(eventData);
//     const [selectedDate, setSelectedDate] = useState(null);
//     const [showAddModal, setShowAddModal] = useState(false);
//     const [showRemoveModal, setShowRemoveModal] = useState(false);
//     const [eventTitle, setEventTitle] = useState('');
//     const [eventIdToRemove, setEventIdToRemove] = useState(null);
//     const [startTime, setStartTime] = useState('');
//     const [endTime, setEndTime] = useState('');
//     const [eventType, setEventType] = useState(''); // new state for event type

//     useEffect(() => {
//         // Schedule reminders for initial events
//         events.forEach(scheduleReminder);
//     }, []);

//     const scheduleReminder = (event) => {
//         const now = new Date();
//         const eventStart = new Date(event.start);
//         const timeUntilEvent = eventStart.getTime() - now.getTime();
//         const timeUntilReminder = timeUntilEvent - 5 * 60 * 1000; // 5 minutes before the event

//         if (timeUntilReminder > 0) {
//             setTimeout(() => {
//                 toast.info(`Reminder: ${event.title} is starting in 5 minutes!`);
//             }, timeUntilReminder);
//         }
//     };

//     const handleDateChange = slotInfo => {
//         setSelectedDate(slotInfo.start);
//         setShowAddModal(true);
//     };

//     const handleAddEvent = () => {
//         if (selectedDate && eventTitle && startTime && endTime && eventType) {
//             const startDateTime = new Date(selectedDate);
//             const endDateTime = new Date(selectedDate);
//             const [startHours, startMinutes] = startTime.split(':').map(Number);
//             const [endHours, endMinutes] = endTime.split(':').map(Number);

//             startDateTime.setHours(startHours, startMinutes);
//             endDateTime.setHours(endHours, endMinutes);

//             const newEvent = {
//                 id: events.length + 1,
//                 title: eventTitle,
//                 start: startDateTime,
//                 end: endDateTime,
//                 type: eventType, // added event type
//             };

//             setEvents([...events, newEvent]);
//             setShowAddModal(false);
//             setEventTitle('');
//             setStartTime('');
//             setEndTime('');
//             setEventType(''); // reset event type
//             setSelectedDate(null);
//             toast.success('Event added successfully!');
//             scheduleReminder(newEvent);
//         }
//     };

//     const handleRemoveEvent = () => {
//         if (eventIdToRemove) {
//             setEvents(events.filter(event => event.id !== eventIdToRemove));
//             setEventIdToRemove(null);
//             setShowRemoveModal(false);
//             toast.success('Event removed successfully!');
//         }
//     };

//     return (
//         <div>
//             {/* <Navbar /> */}
//             <h2 className='text-xl font-bold text-center'>Calendar</h2>
//             <div className='flex flex-col md:flex-row p-5 justify-center items-center'>
//                 <div>
//                     <Calendar
//                         className='md:w-[650px] md:h-[500px] w-auto h-auto '
//                         localizer={localizer}
//                         events={events}
//                         startAccessor="start"
//                         endAccessor="end"
//                         style={{ height: 500 }}
//                         selectable
//                         onSelectSlot={handleDateChange}
//                         onSelectEvent={event => {
//                             setEventIdToRemove(event.id);
//                             setShowRemoveModal(true);
//                         }}
//                     />
//                     {showAddModal && (
//                         <div className="modal-overlay" style={{ display: showAddModal ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 999 }}>
//                             <div className="modal opacity-100 relative border-2 text-white w-[300px] h-auto ml-[25%] mt-[10%] bg-[#075985] rounded-lg shadow-lg">
//                                 <span className="close text-xl cursor-pointer p-4" onClick={() => setShowAddModal(false)}>&times;</span>
//                                 <div className="modal-content p-5">
//                                     <h3 className='text-white'>Add Event</h3>
//                                     <p>Selected Date: {selectedDate && moment(selectedDate).format('MMMM Do YYYY')}</p>
//                                     <input
//                                         type="text"
//                                         placeholder="Event Title"
//                                         className='border-2 text-black w-full mt-2 mb-2'
//                                         value={eventTitle}
//                                         onChange={e => setEventTitle(e.target.value)}
//                                         required
//                                     />
//                                     <input
//                                         type="time"
//                                         className='border-2 text-black w-full mt-2 mb-2'
//                                         value={startTime}
//                                         onChange={e => setStartTime(e.target.value)}
//                                         required
//                                     />
//                                     <input
//                                         type="time"
//                                         className='border-2 text-black w-full mt-2 mb-2'
//                                         value={endTime}
//                                         onChange={e => setEndTime(e.target.value)}
//                                         required
//                                     />
//                                     <select
//                                         className='border-2 text-black w-full mt-2 mb-2'
//                                         value={eventType}
//                                         onChange={e => setEventType(e.target.value)}
//                                         required
//                                     >
//                                         <option value="">Select Type</option>
//                                         <option value="video">Video</option>
//                                         <option value="audio">Audio</option>
//                                     </select>
//                                     <button onClick={handleAddEvent} className='mt-2 bg-blue-500 text-white px-4 py-2 rounded'>Add Event</button>
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                     {showRemoveModal && (
//                         <div className="modal-overlay" style={{ display: showRemoveModal ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 999 }}>
//                             <div className="modal border-2 w-[300px] h-auto justify-center bg-[#075985] rounded-lg shadow-lg">
//                                 <div className="modal-content p-5">
//                                     <span className="close" onClick={() => setShowRemoveModal(false)}>&times;</span>
//                                     <h3 className='text-white'>Remove Event</h3>
//                                     <p className='text-white'>Are you sure you want to remove this event?</p>
//                                     <button onClick={handleRemoveEvent} className='mt-2 bg-red-500 text-white px-4 py-2 rounded'>Yes, Remove Event</button>
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                     <ToastContainer />
//                 </div>
//                 {/* <div>
//                     <img src={IMG} />
//                 </div> */}
//             </div>
//             {/* <Footer /> */}
//         </div>
//     );
// };

// export default GoogleCalendar;

import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Calender from "../../../assets/Calender/calender.png"
const localizer = momentLocalizer(moment);

const eventData = [
    {
        id: 1,
        title: 'Meeting with Client',
        start: new Date(2024, 4, 10, 10, 0),
        end: new Date(2024, 4, 10, 12, 0),
        type: 'video', // added event type
    },
    {
        id: 2,
        title: 'Team Lunch',
        start: new Date(2024, 4, 15, 12, 0),
        end: new Date(2024, 4, 15, 13, 0),
        type: 'audio', // added event type
    },
];

const GoogleCalendar = () => {
    const [events, setEvents] = useState(eventData);
    const [selectedDate, setSelectedDate] = useState(null);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showRemoveModal, setShowRemoveModal] = useState(false);
    const [eventTitle, setEventTitle] = useState('');
    const [eventIdToRemove, setEventIdToRemove] = useState(null);
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [eventType, setEventType] = useState('');
    const [selectedEventDetails, setSelectedEventDetails] = useState(null);

    useEffect(() => {
        events.forEach(scheduleReminder);
    }, [events]);

    const scheduleReminder = (event) => {
        const now = new Date();
        const eventStart = new Date(event.start);
        const timeUntilEvent = eventStart.getTime() - now.getTime();
        const timeUntilReminder = timeUntilEvent - 5 * 60 * 1000;

        if (timeUntilReminder > 0) {
            setTimeout(() => {
                toast.info(`Reminder: ${event.title} is starting in 5 minutes!`);
            }, timeUntilReminder);
        }
    };

    const handleDateChange = (slotInfo) => {
        setSelectedDate(slotInfo.start);
        setShowAddModal(true);
    };

    const handleAddEvent = () => {
        if (selectedDate && eventTitle && startTime && endTime && eventType) {
            const startDateTime = new Date(selectedDate);
            const endDateTime = new Date(selectedDate);
            const [startHours, startMinutes] = startTime.split(':').map(Number);
            const [endHours, endMinutes] = endTime.split(':').map(Number);

            startDateTime.setHours(startHours, startMinutes);
            endDateTime.setHours(endHours, endMinutes);

            const newEvent = {
                id: events.length + 1,
                title: eventTitle,
                start: startDateTime,
                end: endDateTime,
                type: eventType,
            };

            setEvents([...events, newEvent]);
            setShowAddModal(false);
            setEventTitle('');
            setStartTime('');
            setEndTime('');
            setEventType('');
            setSelectedDate(null);
            toast.success('Event added successfully!');
            scheduleReminder(newEvent);

            // Set the selected event details state to display below the calendar
            setSelectedEventDetails(newEvent);
        }
    };

    const handleRemoveEvent = () => {
        if (eventIdToRemove) {
            setEvents(events.filter((event) => event.id !== eventIdToRemove));
            setEventIdToRemove(null);
            setShowRemoveModal(false);
            toast.success('Event removed successfully!');
        }
    };

    return (
        <div>
            <h2 className='text-xl font-bold text-center'>Calendar</h2>

            <div className='flex flex-col md:flex-row p-5 gap-8 justify-center items-center'>
              
                <div>
                    <Calendar
                        className=' w-auto h-auto '
                        localizer={localizer}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: 500 }}
                        selectable
                        onSelectSlot={handleDateChange}
                        onSelectEvent={(event) => {
                            setEventIdToRemove(event.id);
                            setShowRemoveModal(true);
                        }}
                    />

                    {/* Modal for adding event */}
                    {showAddModal && (
                        <div className="modal-overlay" style={{ display: showAddModal ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 999 }}>
                            <div className="modal opacity-100 relative border-2 text-white w-[300px] h-auto ml-[25%] mt-[10%] bg-[#075985] rounded-lg shadow-lg">
                                <span className="close text-xl cursor-pointer p-4" onClick={() => setShowAddModal(false)}>&times;</span>
                                <div className="modal-content p-5">
                                    <h3 className='text-white'>Add Event</h3>
                                    <p>Selected Date: {selectedDate && moment(selectedDate).format('MMMM Do YYYY')}</p>
                                    <input
                                        type="text"
                                        placeholder="Event Title"
                                        className='border-2 text-black w-full mt-2 mb-2'
                                        value={eventTitle}
                                        onChange={e => setEventTitle(e.target.value)}
                                        required
                                    />
                                    <input
                                        type="time"
                                        className='border-2 text-black w-full mt-2 mb-2'
                                        value={startTime}
                                        onChange={e => setStartTime(e.target.value)}
                                        required
                                    />
                                    <input
                                        type="time"
                                        className='border-2 text-black w-full mt-2 mb-2'
                                        value={endTime}
                                        onChange={e => setEndTime(e.target.value)}
                                        required
                                    />
                                    <select
                                        className='border-2 text-black w-full mt-2 mb-2'
                                        value={eventType}
                                        onChange={e => setEventType(e.target.value)}
                                        required
                                    >
                                        <option value="">Select Type</option>
                                        <option value="video">Video</option>
                                        <option value="audio">Audio</option>
                                    </select>
                                    <button onClick={handleAddEvent} className='mt-2 bg-blue-500 text-white px-4 py-2 rounded'>Add Event</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Display selected event details */}
                    {selectedEventDetails && (
                        <div className='mt-4 bg-blue-200 border border-blue-800 text-start p-5'>
                            <h3 className='font-bold '>Your Event Details:</h3>
                            <p>Title: {selectedEventDetails.title}</p>
                            <p>Start: {moment(selectedEventDetails.start).format('MMMM Do YYYY, h:mm a')}</p>
                            <p>End: {moment(selectedEventDetails.end).format('MMMM Do YYYY, h:mm a')}</p>
                            <p>Type: {selectedEventDetails.type}</p>
                        </div>
                    )}

                    <ToastContainer />
                </div>
                <div>
<img src={Calender} className='md:h-[400px] md:w-[400px] mt-16'/>
                </div>
            </div>
        </div>
    );
};

export default GoogleCalendar;

