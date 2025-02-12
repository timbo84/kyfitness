import { notFound } from "next/navigation";
import { Container, Row, Col, Card } from "react-bootstrap";

const programs = {
  "strength": {
    title: "Strength Training",
    description:
     "Strength training is more than just lifting weights—it's about building resilience, confidence, and control over your body. Whether you're increasing muscle mass or enhancing performance, structured strength training helps you progress safely and effectively.\n\nBut strength isn’t built alone. Teamwork plays a crucial role—having a coach or training partner pushes you beyond limits you didn’t think possible. Accountability, motivation, and shared success turn the weight room into a place of transformation, both physically and mentally.",
    image: "/images/strength.jpg",
  },
  "weightloss": {
    title: "Weight Loss",
    description:
    "Losing weight isn’t about crash diets or endless cardio—it’s about sustainable habits that fuel a healthier lifestyle. A successful weight loss journey combines targeted workouts, balanced nutrition, and a mindset shift that prioritizes consistency over quick fixes.\n\nHaving the right support system makes all the difference. A coach or workout partner provides guidance, motivation, and encouragement, ensuring you stay committed to your goals. Teamwork fuels progress, making the process more enjoyable, effective, and rewarding. Together, we turn small changes into lifelong success.",
    image: "/images/weightloss.jpg",
  },
  "personal": {
    title: "Personal Coaching",
    description:
    "A personal coach does more than create workouts—they craft a roadmap for your success, tailoring every session to your unique strengths, weaknesses, and goals. Whether you want to build muscle, lose weight, improve mobility, or boost athletic performance, a personalized plan ensures you reach your full potential.\n\nMore importantly, coaching isn’t just about what you do in the gym—it’s about having a partner in your fitness journey. Accountability, support, and expert guidance help break through plateaus and keep motivation high. With teamwork, we celebrate progress, overcome challenges, and make fitness a lifelong commitment.",
    image: "/images/personal.jpg",
  },
};



export async function generateMetadata({ params }) {
  const programKey = params.program; // Ensure params exist

  if (!programKey || !programs[programKey]) {
    return { title: "Not Found", description: "This program does not exist." };
  }

  return {
    title: programs[programKey].title,
    description: programs[programKey].description,
  };
}

// ✅ Fix: Don't use `await` in the main function
export default async function ProgramPage({ params }) {
  const programKey = params.program; // No need for async/await
  const program = programs[programKey];

  if (!program) {
    return notFound(); // Show 404 if program doesn't exist
  }

  return (
    <Container
      fluid
      className="d-flex flex-column min-vh-100 p-3"
      style={{
        backgroundImage: 'url("/images/workout.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <section className="container text-center py-5">
      <h1 className="fw-bold" style={{ color: "#f1ffc4" }}>{program.title}</h1>
      <img src={program.image} alt={program.title} className="img-fluid rounded shadow my-4" />
      <p className="lead" style={{ color: "#f1ffc4", whiteSpace: "pre-line" }} >{program.description}</p>
    </section>
    </Container>
   
  );
}
