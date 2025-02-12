"use client";
import Programs from "@/components/programs/index";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Home() {
  

  return (
    <Container
      fluid
      className="d-flex flex-column min-vh-100 p-3"
      style={{
        backgroundImage: 'url("/images/workout.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Programs />
    </Container>
  );
}
