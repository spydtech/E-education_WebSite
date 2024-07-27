import React, { useState, useEffect } from "react";

const MeetingForm = ({ addMeeting }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
    setGroups(storedGroups);
  }, []);

  const generateMeetingLink = (title) => {
    const baseLink = "https://meet.jit.si/";
    const meetingId = encodeURIComponent(title.trim().replace(/\s+/g, "-"));
    return `${baseLink}${meetingId}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const link = generateMeetingLink(title);
    addMeeting({ title, date, time, link });
    setTitle("");
    setDate("");
    setTime("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md">
      <div className="mb-4">
        <label
          htmlFor="groupSelect"
          className="block mb-2 text-sm font-medium text-gray-700"
        ></label>
        <div className="relative">
          <select
            id="groupSelect"
            className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="" disabled selected>
              Select a group
            </option>
            {groups.map((group) => (
              <option key={group.id} value={group.id}>
                {group.groupName}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Meeting Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 p-2 border rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mt-1 p-2 border rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Time</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="mt-1 p-2 border rounded w-full"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Schedule Meeting
      </button>
    </form>
  );
};

export default MeetingForm;
