import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function GridBS() {
  return (
    <Container fluid ="lg">
      <Row>
        <Col md={{offset:2}}>
          <div className="bg-info p-3">MY DIV</div>
        </Col>
        <Col >
          <div className="bg-danger p-3">MY DIV</div>
        </Col>
        <Col>
          <div className="bg-success p-2 text-white bg-opacity-75 p-3">
            MY DIV
          </div>
        </Col>
      </Row>
      
    </Container>
    // <div>
    // <Button variant="outline-danger">Submit</Button>
    // <Button variant="outline-primary">Submit</Button>
    // <Button variant="outline-dark">Submit</Button>
    // </div>
  );
}

export default GridBS;
