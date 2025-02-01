"use client";
import Navbar from "@/components/navbar/navbar";
import CalendlyPopup from "@/components/calendly";
import { Container, Row, Col } from "react-bootstrap";
import Payment from "@/components/payment";

export default function Home() {
  return (<>
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
      <Navbar />
      <Row className="justify-content-center align-items-center flex-grow-1">
        <Col xs={12} md={8} lg={6}>
          <div className="text-center p-4 rounded shadow-lg bg-white">
            <h1 className="text-primary">Hi Kylynn! This is going to be your home page</h1>
            <CalendlyPopup />
          </div>
        </Col>
      </Row>
    </Container>
    <Payment />
  </>
    
  );
}
