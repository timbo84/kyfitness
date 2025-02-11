"use client";
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
      
      <section id="strength">
  <h2>Strength Training</h2>
  <p>Details about strength training...</p>
</section>

<section id="weight-loss">
  <h2>Weight Loss</h2>
  <p>Details about weight loss...</p>
</section>

<section id="personal-coaching">
  <h2>Personal Coaching</h2>
  <p>Details about personal coaching...</p>
</section>
    </Container>
  );
}
