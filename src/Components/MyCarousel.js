import React from "react";
import { Container, Row, Col, Carousel } from "bootstrap";

function MyCarousel() {
  return (
    <p>
      <Container>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img src="Images/s1.png" width='400' />
              </Carousel.Item>
              <Carousel.Item>
                <img src="Images/s2.png" width='400' />
              </Carousel.Item>
              <Carousel.Item>
                <img src="Images/p1.png"  width='400'/>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </p>
  );
}

export default MyCarousel;
