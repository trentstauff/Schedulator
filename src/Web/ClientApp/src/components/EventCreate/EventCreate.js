import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import DateTime from "react-datetime";

import "react-datetime/css/react-datetime.css";

const MINUTES = 1;
const HOURS = 2;

const EventCreate = () => {
  const [isTime, setIsTime] = useState(true);

  return (
    <Form className="m-3">
      <Form.Group controlId="formDatetime">
        <Form.Label>Date and time</Form.Label>
        <DateTime />
      </Form.Group>

      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Title" />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" placeholder="Description" />
      </Form.Group>

      <Form.Group controlId="formReminder">
        <Form.Label>Reminder</Form.Label>
        <Form.Control as="select">
          <option>None</option>
          <option>5 min</option>
          <option>10 min</option>
          <option>15 min</option>
          <option>30 min</option>
          <option>1 hr</option>
          <option>2 hr</option>
          <option>3 hr</option>
          <option>6 hr</option>
          <option>12 hr</option>
          <option>42 hr</option>
        </Form.Control>
      </Form.Group>

      <Form.Label>Do you know the time required</Form.Label>
      <Form.Row>
        <Form.Group as={Col} controlId="formisTimeRequired">
          <Form.Label>Yes</Form.Label>
          <Form.Control
            type="radio"
            defaultChecked={true}
            value={true}
            name="isTimeRequired"
            onChange={(e) => setIsTime(true)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formIsTimedRqueired">
          <Form.Label>No</Form.Label>
          <Form.Control
            type="radio"
            value={false}
            name="isTimeRequired"
            onChange={(e) => setIsTime(false)}
          />
        </Form.Group>
      </Form.Row>

      {isTime ? (
        <>
          <Form.Group controlId="formTimedRequired">
            <Form.Label>Time Required</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formTimedRequeiredUnit">
              <Form.Label>Minutes</Form.Label>
              <Form.Control
                type="radio"
                defaultChecked={true}
                value={MINUTES}
                name="units"
                onChange={() => ""}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formTimedRqueiredUnit">
              <Form.Label>Hours</Form.Label>
              <Form.Control
                type="radio"
                value={HOURS}
                name="units"
                onChange={() => ""}
              />
            </Form.Group>
          </Form.Row>
        </>
      ) : (
        <>
          <Form.Group controlId="formPriority">
            <Form.Label>Priority</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formDifficulty">
            <Form.Label>Difficulty</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
        </>
      )}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default EventCreate;
