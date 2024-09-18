import React, { useState } from "react";
import "./EventForm.css";

const EventForm = ({ addEvent }) => {
  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!eventName || !date || !time || !description) return;

    addEvent({ eventName, date, time, description });
    setEventName("");
    setDate("");
    setTime("");
    setDescription("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="user-input"
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
        required
      />
      <input
        className="user-input"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        className="user-input"
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <textarea
        className="user-input"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;
