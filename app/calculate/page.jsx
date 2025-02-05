"use client";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "@/components/HomePageCards/contact";
import MacroCalculator from "@/components/workoutCalculator";

export default function Home() {
  return (
    <Container
      fluid
      className="d-flex flex-column min-vh-100"
      style={{
        backgroundImage: 'url("/images/workout.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      
      <Row className="justify-content-center align-items-center flex-grow-1">
        <Col >
          <MacroCalculator />
        </Col>
      </Row>
    </Container>
  );
}
