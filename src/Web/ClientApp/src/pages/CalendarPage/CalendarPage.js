import React, { useEffect, useState, useRef } from "react";
import authService from "../../components/api-authorization/AuthorizeService";
import Axios from "axios";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import EventView from "../../components/EventView";

import "./CalendarPage.css";

const mapEvents = (events) => {
  return events.map((e) => ({
    title: e.title,
    start: new Date(e.startDatetime).toISOString(),
    end: new Date(e.endDatetime).toISOString(),
  }));
};

const getUpcomingEvent = (events) => {
  return events
    .sort((a, b) => Date.parse(a.startDatetime) - Date.parse(b.startDatetime)) // sorts startdate ascendingly
    .find((event) => Date.parse(event.endDatetime) >= Date.now());
};

const CalendarPage = () => {
  const [events, setEvents] = useState();
  const calRef = useRef();

  useEffect(() => {
    const fetchEvents = async () => {
      const token = await authService.getAccessToken();
      const response = await Axios.get("api/events", {
        headers: !token ? {} : { Authorization: `Bearer ${token}` },
      });
      setEvents(response.data);
    };

    fetchEvents();
  }, []);

  return events ? (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <EventView event={getUpcomingEvent(events)} />
        </div>
        <div className="calendar-view col-9 p-4">
          <FullCalendar
            ref={calRef}
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            initialEvents={mapEvents(events)}
          />
        </div>
      </div>
    </div>
  ) : (
    <div>Loading Moem</div>
  );
};

export default CalendarPage;
