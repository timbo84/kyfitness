"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Payment from "@/components/payment";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Container
      fluid
      className="d-flex flex-column min-vh-100 justify-content-center align-items-center"
      style={{
        backgroundImage: 'url("/images/workout.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <Row className="justify-content-center align-items-center w-100">
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
      </Row> */}
      <Row className="justify-content-center align-items-center w-100">
        <Col xs={12} md={8} lg={6}>
          <div
            className="p-4 rounded shadow-lg"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)", // Light transparency
              backdropFilter: "blur(5px)", // Adds a subtle blur for readability
              border: "1px solid rgba(255, 255, 255, 0.3)", // Light border for definition
              color: "#f1ffc4",
              textAlign: "center", // Center the content within the div
            }}
          >
             <Image
              src="/images/kyCashApp.jpg"
              alt="Strength Training"
              width={400}  // Adjust the width
              height={400} // Adjust the height
              layout="intrinsic"
              
            />
            <hr />
            <p className="text-center" style={{ fontWeight: "bold" }}>OR</p>
            <Link href="https://cash.app/$lkKYKY" style={{ textDecoration: "none"}}>
              <h4 style={{ textDecoration: "none", textAlign: "center" }}>
                If you can't scan the QR Code, click here &larr;
              </h4>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
