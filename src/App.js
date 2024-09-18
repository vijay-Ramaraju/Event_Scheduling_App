import React, { useState } from "react";
import EventForm from "./EventForm";
import EventList from "./EventList";
import "./styles.css";

const App = () => {
  const [events, setEvents] = useState([]);
  const [filterDate, setFilterDate] = useState("");

  // Add a new event
  const addEvent = (event) => {
    setEvents([...events, { ...event, id: Date.now() }]);
  };

  // Delete an event by ID
  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  // Edit an existing event
  const editEvent = (updatedEvent) => {
    setEvents(
      events.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
  };

  // Filter events by date
  const filteredEvents = filterDate
    ? events.filter(
        (event) =>
          new Date(event.date).toDateString() ===
          new Date(filterDate).toDateString()
      )
    : events;

  return (
    <div className="app">
      <h1>Event Scheduler</h1>
      <EventForm addEvent={addEvent} />
      <input
        type="date"
        onChange={(e) => setFilterDate(e.target.value)}
        placeholder="Filter by date"
      />
      <EventList
        events={filteredEvents}
        deleteEvent={deleteEvent}
        editEvent={editEvent}
      />
    </div>
  );
};

export default App;
