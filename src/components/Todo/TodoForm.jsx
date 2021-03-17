import React from 'react';
import {
  Row, Col, Form, Button,
} from 'react-bootstrap';
import './Todo.scss';

export default function TodoForm() {
  return (
    <Row>
      <Col xl={9} lg={9}>
        <Form.Group>
          <Form.Control placeholder="Insert your daily activity" />
        </Form.Group>
      </Col>
      <Col>
        <Button onClick={() => alert('App Todo')}>Add Todo</Button>
      </Col>
    </Row>
  );
}
