import React from "react";

import "./EventView.css";

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const EventView = ({ event }) => {
  if (event) {
    return (
      <div>
        <div className="event-view text-center">
          <div>{event.title}</div>
          {/* if multidated, "startdate - enddate" */}
          <div>
            {new Date(event.startDatetime).toLocaleDateString("en-US", options)}
          </div>
          <div>{event.description}</div>
          <div></div>
          <button>Hello</button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="event-view text-center">
          <div>No Upcoming Events!</div>
        </div>
      </div>
    );
  }
};

export default EventView;
