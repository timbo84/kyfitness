"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Payment from "@/components/payment";

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
          <div
            className="p-4 rounded shadow-lg"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)", // Light transparency
              backdropFilter: "blur(5px)", // Adds a subtle blur for readability
              border: "1px solid rgba(255, 255, 255, 0.3)", // Light border for definition
              color: "#f1ffc4",
            }}
          >
            <Payment />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
