import React, { useState } from "react";
import "./EventContainer.css";
import EventView from "../EventView/EventView.js";
import EventCreate from "../EventCreate/EventCreate.js";
import EventEdit from "../EventEdit/EventEdit.js";

const VIEW = 1;
const CREATE = 2;
const EDIT = 3;
const EMPTY = 4;

const EventContainer = ({ event }) => {
  const [containerState, setContainerState] = useState(event ? VIEW : EMPTY);

  let componentToRender;

  switch (containerState) {
    case VIEW:
      componentToRender = <EventView event={event}></EventView>;
      break;
    case CREATE:
      componentToRender = <EventCreate event={event}></EventCreate>;
      break;
    case EDIT:
      componentToRender = <EventEdit event={event}></EventEdit>;
      break;
    default:
      break;
  }

  return (
    <div className="event-container text-center">
      {componentToRender}
      <button>Create</button>
      <button>Edit</button>
    </div>
  );
};

export default EventContainer;
