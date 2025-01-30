"use client";  

import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";

const Calendar = () => {
  const [events, setEvents] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });

  // Load events from localStorage on mount
  useEffect(() => {
    const savedEvents = localStorage.getItem("calendarEvents");
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents));
    }
  }, []);

  // Save events to localStorage whenever events change
  useEffect(() => {
    localStorage.setItem("calendarEvents", JSON.stringify(events));
  }, [events]);

  const handleDateSelect = (selectInfo) => {
    // Convert FullCalendar's UTC date to local timezone
    const startDate = new Date(selectInfo.startStr + "T00:00:00");
    startDate.setHours(8, 0, 0); // Default start time
  
    const endDate = new Date(selectInfo.startStr + "T00:00:00");
    endDate.setHours(9, 0, 0); // Default end time
  
    setNewEvent({
      title: "",
      start: formatDateTime(startDate),
      end: formatDateTime(endDate),
    });
  
    setSelectedEvent(null);
    setShowModal(true);
  };
  

  const handleEventClick = (clickInfo) => {
    setSelectedEvent(clickInfo.event.id);
    setNewEvent({
      title: clickInfo.event.title,
      start: formatDateTime(new Date(clickInfo.event.start)),
      end: formatDateTime(new Date(clickInfo.event.end)),
    });
    setShowModal(true);
  };

  const handleSaveEvent = () => {
    if (newEvent.title && newEvent.start && newEvent.end) {
      if (selectedEvent) {
        // Update existing event
        setEvents(events.map(event =>
          event.id === selectedEvent ? { ...newEvent, id: selectedEvent } : event
        ));
      } else {
        // Add new event
        setEvents([...events, { ...newEvent, id: String(Date.now()) }]);
      }
      setShowModal(false);
    } else {
      alert("Please fill out all fields.");
    }
  };

  const handleDeleteEvent = () => {
    if (selectedEvent) {
      setEvents(events.filter(event => event.id !== selectedEvent));
      setShowModal(false);
    }
  };

  const formatDateTime = (date) => date.toISOString().slice(0, 16);

  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[resourceTimelinePlugin, dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        nowIndicator={true}
        editable={true}
        selectable={true}
        selectMirror={true}
        events={events}
        select={handleDateSelect}
        eventClick={handleEventClick}
      />

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedEvent ? "Edit Event" : "Add Event"}</h2>
            <label>Title:</label>
            <input
              type="text"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            />

            <label>Start Time:</label>
            <input
              type="datetime-local"
              value={newEvent.start}
              onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}
            />

            <label>End Time:</label>
            <input
              type="datetime-local"
              value={newEvent.end}
              onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
            />

            <button onClick={handleSaveEvent}>
              {selectedEvent ? "Save Changes" : "Add Event"}
            </button>
            {selectedEvent && <button onClick={handleDeleteEvent} className="delete-btn">Delete</button>}
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 300px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
          z-index: 1001;
        }
        input {
          padding: 8px;
          margin: 5px 0;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        button {
          padding: 10px;
          cursor: pointer;
          border: none;
          border-radius: 5px;
          background-color: #007bff;
          color: white;
          font-weight: bold;
          margin-top: 10px;
        }
        button:hover {
          background-color: #0056b3;
        }
        .delete-btn {
          background-color: red;
        }
        .delete-btn:hover {
          background-color: darkred;
        }
      `}</style>
    </div>
  );
};

export default Calendar;


// use this code when you have supabase pro!

// "use client";

// import React, { useState, useEffect } from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
// import { supabase } from "../lib/supabaseClient";

// const Calendar = () => {
//   const [events, setEvents] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });

//   // Fetch events from Supabase on mount
//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = async () => {
//     const { data, error } = await supabase.from("events").select("*");
//     if (error) console.error("Error fetching events:", error);
//     else setEvents(data);
//   };

//   const handleDateSelect = (selectInfo) => {
//     const startDate = new Date(selectInfo.startStr);
//     startDate.setHours(8, 0, 0);
//     const endDate = new Date(selectInfo.startStr);
//     endDate.setHours(9, 0, 0);

//     setNewEvent({
//       title: "",
//       start: formatDateTime(startDate),
//       end: formatDateTime(endDate),
//     });

//     setSelectedEvent(null);
//     setShowModal(true);
//   };

//   const handleEventClick = (clickInfo) => {
//     setSelectedEvent(clickInfo.event.id);
//     setNewEvent({
//       title: clickInfo.event.title,
//       start: formatDateTime(new Date(clickInfo.event.start)),
//       end: formatDateTime(new Date(clickInfo.event.end)),
//     });
//     setShowModal(true);
//   };

//   const handleSaveEvent = async () => {
//     if (newEvent.title && newEvent.start && newEvent.end) {
//       if (selectedEvent) {
//         // Update existing event
//         const { error } = await supabase
//           .from("events")
//           .update({ title: newEvent.title, start: newEvent.start, end: newEvent.end })
//           .eq("id", selectedEvent);

//         if (error) {
//           console.error("Error updating event:", error);
//         }
//       } else {
//         // Insert new event
//         const { error } = await supabase.from("events").insert([
//           { title: newEvent.title, start: newEvent.start, end: newEvent.end },
//         ]);

//         if (error) {
//           console.error("Error inserting event:", error);
//         }
//       }

//       setShowModal(false);
//       fetchEvents(); // Refresh events after adding/updating
//     } else {
//       alert("Please fill out all fields.");
//     }
//   };

//   const handleDeleteEvent = async () => {
//     if (selectedEvent) {
//       const { error } = await supabase.from("events").delete().eq("id", selectedEvent);
//       if (error) {
//         console.error("Error deleting event:", error);
//       }
//       setShowModal(false);
//       fetchEvents(); // Refresh events after deletion
//     }
//   };

//   const formatDateTime = (date) => date.toISOString().slice(0, 16);

//   return (
//     <div className="calendar-container">
//       <FullCalendar
//         plugins={[resourceTimelinePlugin, dayGridPlugin, timeGridPlugin, interactionPlugin]}
//         initialView="dayGridMonth"
//         nowIndicator={true}
//         editable={true}
//         selectable={true}
//         selectMirror={true}
//         events={events}
//         select={handleDateSelect}
//         eventClick={handleEventClick}
//       />

//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>{selectedEvent ? "Edit Event" : "Add Event"}</h2>
//             <label>Title:</label>
//             <input
//               type="text"
//               value={newEvent.title}
//               onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
//             />

//             <label>Start Time:</label>
//             <input
//               type="datetime-local"
//               value={newEvent.start}
//               onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}
//             />

//             <label>End Time:</label>
//             <input
//               type="datetime-local"
//               value={newEvent.end}
//               onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
//             />

//             <button onClick={handleSaveEvent}>
//               {selectedEvent ? "Save Changes" : "Add Event"}
//             </button>
//             {selectedEvent && <button onClick={handleDeleteEvent} className="delete-btn">Delete</button>}
//             <button onClick={() => setShowModal(false)}>Cancel</button>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         .modal {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: rgba(0, 0, 0, 0.7);
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           z-index: 1000;
//         }
//         .modal-content {
//           background: white;
//           padding: 20px;
//           border-radius: 10px;
//           display: flex;
//           flex-direction: column;
//           gap: 10px;
//           width: 300px;
//           box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
//           z-index: 1001;
//         }
//         input {
//           padding: 8px;
//           margin: 5px 0;
//           border: 1px solid #ccc;
//           border-radius: 5px;
//         }
//         button {
//           padding: 10px;
//           cursor: pointer;
//           border: none;
//           border-radius: 5px;
//           background-color: #007bff;
//           color: white;
//           font-weight: bold;
//           margin-top: 10px;
//         }
//         button:hover {
//           background-color: #0056b3;
//         }
//         .delete-btn {
//           background-color: red;
//         }
//         .delete-btn:hover {
//           background-color: darkred;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Calendar;
