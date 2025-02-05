"use client";
import ContactForm from "@/components/HomePageCards/contact";
import Footer from "@/components/HomePageCards/footer";
import HeroSection from "@/components/HomePageCards/heroSection";
import Services from "@/components/HomePageCards/services";
import Testimonials from "@/components/HomePageCards/testimonials";
import Navbar from "@/components/navbar/navbar";
import WorkoutCalculator from "@/components/workoutCalculator";
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
        

        <HeroSection />
        <Services />
        <Testimonials />
        <br />
  
      </Container>

      
    </>
  );
}
