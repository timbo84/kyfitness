"use client";


import AboutMe from "@/components/aboutMe";
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
       <AboutMe />
      </Container>
    </>
  );
}
