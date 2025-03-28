"use client";
import HomeCTA from "@/components/HomePageCards/cta";
import HeroSection from "@/components/HomePageCards/heroSection";
import Services from "@/components/HomePageCards/services";
import Testimonials from "@/components/HomePageCards/testimonials";

import { Container } from "react-bootstrap";

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
        <HomeCTA />
        <Testimonials />
        <br />
      </Container>
    </>
  );
}
