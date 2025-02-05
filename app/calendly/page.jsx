"use client";
import Navbar from "@/components/navbar/navbar";
import CalendlyPopup from "@/components/calendly";
import { Container, Row, Col } from "react-bootstrap";

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
        <Col xs={12} md={8} lg={6}>
          <div className="text-center p-4 rounded shadow-lg" style={{ color: "#f1ffc4", background: "#5d576b"  }}>
            <h1>
              Hi Kylynn! This is going to be your calendar page
            </h1>
            <CalendlyPopup />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
