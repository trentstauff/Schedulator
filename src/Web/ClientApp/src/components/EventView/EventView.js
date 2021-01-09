import React from "react";

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const EventView = ({ event }) => {
  return (
    <div>
      <div className="text-center">
        <div>{event.title}</div>
        {/* if multidated, "startdate - enddate" */}
        <div>
          {new Date(event.startDatetime).toLocaleDateString("en-US", options)}
        </div>
        <div>{event.description}</div>
      </div>
    </div>
  );
};

export default EventView;
