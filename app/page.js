"use client";
import HomeCTA from "@/components/HomePageCards/cta";
import HeroSection from "@/components/HomePageCards/heroSection";
import Services from "@/components/HomePageCards/services";
import Testimonials from "@/components/HomePageCards/testimonials";
import Link from "next/link";

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
      <div className="position-fixed bottom-0 end-0 p-3">
        {/* <Link href="/contact" className="btn btn-warning btn-lg shadow">
          Get Started →
        </Link> */}
      </div>
    </>
  );
}
