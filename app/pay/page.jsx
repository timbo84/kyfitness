"use client";
import Navbar from "@/components/navbar/navbar";
import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CheckoutForm from "@/components/checkout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

export default function Home() {
  const stripePromise = loadStripe(
    "pk_test_51QnUbt4YGDBpXQeTFA5gQQPoFN20bBnHQp6OX7oMupLO0kyXSch7k1UnhQvONzqy0Dqsziz45IWdVwuk7HpAWkeF00jel9xyrf"
  );

  useEffect(() => {
    const stripe = stripePromise;
    // You can now use the stripe instance to create payment elements
  }, []);

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
          <div className="p-4 rounded shadow-lg"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)", // Light transparency
              backdropFilter: "blur(5px)", // Adds a subtle blur for readability
              border: "1px solid rgba(255, 255, 255, 0.3)", // Light border for definition
              color: "#f1ffc4",
            }}>
            <h1>
              This is where you can pay for your session
            </h1>
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
