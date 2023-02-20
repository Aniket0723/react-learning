import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";

function CardsBS() {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img src="images/p1.png" width="200"></Card.Img>
            <Card.Body>
              <Card.Title>THIS IS TITLE</Card.Title>
              <Card.Subtitle>THIS IS SUBTITLE</Card.Subtitle>
              <Card.Text>
                THIS IS AMERICAN FOOD YOU WILL LOVE IT THIS IS AMERICAN FOOD YOU
                WILL LOVE IT THIS IS AMERICAN FOOD YOU WILL LOVE IT
              </Card.Text>
              
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CardsBS;
