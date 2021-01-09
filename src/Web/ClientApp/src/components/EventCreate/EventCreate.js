import React from "react";
import { Form, Button } from "react-bootstrap";

const EventCreate = () => {
  return (
    <Form class="m-3">
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Title" />
        <Form.Text className="text-muted">Testing 123</Form.Text>
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" placeholder="Description" />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Priority</Form.Label>
        <Form.Control as="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Time Required</Form.Label>
        <Form.Control as="textarea" placeholder="Description" />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Difficulty</Form.Label>
        <Form.Control as="textarea" placeholder="Description" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default EventCreate;
