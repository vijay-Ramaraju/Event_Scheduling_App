import React, { useState } from "react";

const EventItem = ({ event, deleteEvent, editEvent }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedEvent, setUpdatedEvent] = useState(event);

  const handleUpdate = (e) => {
    e.preventDefault();
    editEvent(updatedEvent);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={updatedEvent.eventName}
            onChange={(e) =>
              setUpdatedEvent({ ...updatedEvent, eventName: e.target.value })
            }
          />
          <input
            type="date"
            value={updatedEvent.date}
            onChange={(e) =>
              setUpdatedEvent({ ...updatedEvent, date: e.target.value })
            }
          />
          <input
            type="time"
            value={updatedEvent.time}
            onChange={(e) =>
              setUpdatedEvent({ ...updatedEvent, time: e.target.value })
            }
          />
          <textarea
            value={updatedEvent.description}
            onChange={(e) =>
              setUpdatedEvent({ ...updatedEvent, description: e.target.value })
            }
          ></textarea>
          <button type="submit">Update Event</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <div>
          <h3>{event.eventName}</h3>
          <p>
            {event.date} at {event.time}
          </p>
          <p>{event.description}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteEvent(event.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default EventItem;
