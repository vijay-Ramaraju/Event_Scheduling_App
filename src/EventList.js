import React from "react";
import EventItem from "./EventItem";

const EventList = ({ events, deleteEvent, editEvent }) => {
  return (
    <div>
      <h2>Upcoming Events</h2>
      {events.map((event) => (
        <EventItem
          key={event.id}
          event={event}
          deleteEvent={deleteEvent}
          editEvent={editEvent}
        />
      ))}
    </div>
  );
};

export default EventList;
