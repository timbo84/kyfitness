"use client";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Programs() {

    
  const programs = [
    {
      id: "strength",
      title: "Strength Training",
      description:
        "Strength training is more than just lifting weights—it's about building resilience, confidence, and control over your body. Whether you're increasing muscle mass or enhancing performance, structured strength training helps you progress safely and effectively.\n\nBut strength isn’t built alone. Teamwork plays a crucial role—having a coach or training partner pushes you beyond limits you didn’t think possible. Accountability, motivation, and shared success turn the weight room into a place of transformation, both physically and mentally.",
      imgSrc: "/images/strength.jpg",
    },
    {
      id: "weightloss",
      title: "Weight Loss",
      description:
        "Losing weight isn’t about crash diets or endless cardio—it’s about sustainable habits that fuel a healthier lifestyle. A successful weight loss journey combines targeted workouts, balanced nutrition, and a mindset shift that prioritizes consistency over quick fixes.\n\nHaving the right support system makes all the difference. A coach or workout partner provides guidance, motivation, and encouragement, ensuring you stay committed to your goals. Teamwork fuels progress, making the process more enjoyable, effective, and rewarding. Together, we turn small changes into lifelong success.",
      imgSrc: "/images/weightloss.jpg",
    },
    {
      id: "personal",
      title: "Personal Coaching",
      description:
        "A personal coach does more than create workouts—they craft a roadmap for your success, tailoring every session to your unique strengths, weaknesses, and goals. Whether you want to build muscle, lose weight, improve mobility, or boost athletic performance, a personalized plan ensures you reach your full potential.\n\nMore importantly, coaching isn’t just about what you do in the gym—it’s about having a partner in your fitness journey. Accountability, support, and expert guidance help break through plateaus and keep motivation high. With teamwork, we celebrate progress, overcome challenges, and make fitness a lifelong commitment.",
      imgSrc: "/images/personal.jpg",
    },
  ];

  return (
    <>
      {programs.map((program, index) => (
        <Row
          key={program.id}
          className="align-items-center my-5"
          style={{ color: "#f1ffc4" }}
        >
          {/* Image Column - Now Properly Centered */}
          <Col
            xs={12}
            md={6}
            className={`d-flex justify-content-center ${
              index % 2 === 0 ? "order-md-1" : "order-md-2"
            }`}
          >
            <div className="d-flex justify-content-center w-100">
              <Card className="border-0 bg-transparent">
                <Card.Img
                  src={program.imgSrc}
                  alt={program.title}
                  className="img-fluid rounded mx-auto d-block"
                  style={{ maxWidth: "80%", height: "auto" }} // Ensures proper centering
                />
              </Card>
            </div>
          </Col>

          {/* Text Column - Centered on Mobile, Left/Right on Desktop */}
          <Col
            xs={12}
            md={6}
            className={`text-center text-md-start ${
              index % 2 === 0 ? "order-md-2" : "order-md-1"
            }`}
          >
            <Card className="border-0 bg-transparent">
              <Card.Body>
                <Card.Title style={{ fontSize: "2rem", color: "#f1ffc4" }}>
                  {program.title}
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: "1.2rem",
                    color: "#f1ffc4",
                    whiteSpace: "pre-line",
                  }}
                >
                  {program.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </>
  );
}
