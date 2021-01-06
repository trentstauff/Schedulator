import React, { useEffect, useState, useRef } from "react";
import Axios from "axios";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const mapEvents = (events) => {
  return events.map((e) => ({
    title: e.title,
    start: new Date(e.startDatetime).toISOString(),
    end: new Date(e.endDatetime).toISOString(),
  }));
};

const CalendarPage = () => {
  const [events, setEvents] = useState();
  const calRef = useRef();

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await Axios.get("api/events");
      setEvents(response.data);
    };

    fetchEvents();
  }, []);

  return events ? (
    <FullCalendar
      ref={calRef}
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      initialEvents={mapEvents(events)}
    />
  ) : (
    <div>Loading Moem</div>
  );
};

export default CalendarPage;
