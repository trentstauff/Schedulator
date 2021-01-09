import React, { useState } from "react";
import { Button } from "react-bootstrap";
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
      componentToRender = <EventCreate></EventCreate>;
      break;
    case EDIT:
      componentToRender = <EventEdit event={event}></EventEdit>;
      break;
    default:
      componentToRender = <div>Empty</div>;
      break;
  }

  return (
    <div className="event-container text-center">
      {componentToRender}
      {containerState === VIEW || containerState === EMPTY ? (
        <>
          <Button onClick={() => setContainerState(CREATE)}>Create</Button>
          <Button onClick={() => setContainerState(EDIT)}>Edit</Button>
        </>
      ) : (
        <Button onClick={() => setContainerState(VIEW)}>Go Back</Button>
      )}
    </div>
  );
};

export default EventContainer;
