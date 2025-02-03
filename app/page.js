"use client";
import ContactForm from "@/components/HomePageCards/contact";
import Footer from "@/components/HomePageCards/footer";
import HeroSection from "@/components/HomePageCards/heroSection";
import Services from "@/components/HomePageCards/services";
import Testimonials from "@/components/HomePageCards/testimonials";
import Navbar from "@/components/navbar/navbar";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Container
        fluid
        className="d-flex flex-column min-vh-100"
        style={{
          backgroundImage: 'url("/images/workout.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <Navbar />
        <Row className="justify-content-center align-items-center flex-grow-1">
          <Col xs={12} md={8} lg={6}>
            <div
              className="text-center p-4 rounded shadow-lg"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.6)", // Semi-transparent white
                backdropFilter: "blur(5px)", // Glassmorphism effect
              }}
            >
              <h1 className="text-primary">
                Hi Kylynn! This is going to be your home page
              </h1>
            </div>
          </Col>
        </Row>
        <HeroSection />
        <Services />
        <Testimonials />
        <ContactForm />
      </Container>

      <Footer />
    </>
  );
}
