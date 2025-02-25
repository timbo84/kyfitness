import { notFound } from "next/navigation";
import { Container, Row, Col, Card } from "react-bootstrap";

const programs = {
  "strength": {
    title: "Strength Training",
    description:
      "Strength training is more than just lifting weights—it's about building resilience, confidence, and control over your body. Whether you're increasing muscle mass or enhancing performance, structured strength training helps you progress safely and effectively.\n\nBut strength isn’t built alone. Teamwork plays a crucial role—having a coach or training partner pushes you beyond limits you didn’t think possible. Accountability, motivation, and shared success turn the weight room into a place of transformation, both physically and mentally.",
    image: "/images/strength.jpg",
  },
  "weight-loss": {
    title: "Weight Loss",
    description:
      "Losing weight isn’t about crash diets or endless cardio—it’s about sustainable habits that fuel a healthier lifestyle. A successful weight loss journey combines targeted workouts, balanced nutrition, and a mindset shift that prioritizes consistency over quick fixes.\n\nHaving the right support system makes all the difference. A coach or workout partner provides guidance, motivation, and encouragement, ensuring you stay committed to your goals. Teamwork fuels progress, making the process more enjoyable, effective, and rewarding. Together, we turn small changes into lifelong success.",
    image: "/images/weightloss.jpg",
  },
  "personal-coaching": {
    title: "Personal Coaching",
    description:
      "A personal coach does more than create workouts—they craft a roadmap for your success, tailoring every session to your unique strengths, weaknesses, and goals. Whether you want to build muscle, lose weight, improve mobility, or boost athletic performance, a personalized plan ensures you reach your full potential.\n\nMore importantly, coaching isn’t just about what you do in the gym—it’s about having a partner in your fitness journey. Accountability, support, and expert guidance help break through plateaus and keep motivation high. With teamwork, we celebrate progress, overcome challenges, and make fitness a lifelong commitment.",
    image: "/images/personal.jpg",
  },
  "endurance": {
    title: "Endurance Training",
    description:
      "Endurance training is all about pushing your limits and improving your body's ability to sustain effort over time. Whether you're training for a race, increasing stamina, or just wanting to move with more energy throughout the day, endurance workouts build cardiovascular strength and muscular efficiency.\n\nBut endurance isn’t just physical—it’s mental. Training with a coach or community keeps you motivated, helping you push through challenges and reach new milestones. Through structured progressions, strategic recovery, and unwavering support, you'll build the resilience needed to go the distance—stronger and faster than ever before.",
    image: "/images/endurance.jpg",
  },
  "general-fitness": {
    title: "General Fitness",
    description:
      "General fitness isn’t about extreme goals—it’s about feeling strong, healthy, and confident in your everyday life. A well-rounded approach combines strength, endurance, mobility, and flexibility to help you move better, prevent injuries, and enjoy an active lifestyle.\n\nThe best part? You don’t have to figure it out alone. A coach or training partner helps personalize your workouts, keeping things fresh, engaging, and effective. Whether you're getting started or looking to maintain lifelong fitness, teamwork and consistency will keep you on track toward a healthier, more energized you.",
    image: "/images/general-fitness.jpg",
  },
  "hiit-weight-loss": {
    title: "HIIT for Weight Loss",
    description:
      "High-Intensity Interval Training (HIIT) is one of the most effective ways to burn fat, boost metabolism, and build endurance—all in a shorter amount of time. By combining intense bursts of exercise with strategic rest periods, HIIT keeps your body in fat-burning mode long after your workout ends.\n\nBut pushing yourself to the limit isn’t easy alone. With the right coach or training partner, you'll stay accountable, maintain intensity, and get the best results from every session. Whether you're short on time or looking for a dynamic, efficient way to lose weight, HIIT keeps things fast, fun, and effective.",
    image: "/images/hiit-weight-loss.jpg",
  },
  "calisthenics-strength": {
    title: "Calisthenics Strength",
    description:
      "Calisthenics is the art of mastering your own body weight—building raw strength, flexibility, and control without relying on heavy equipment. From push-ups to advanced movements like muscle-ups and planches, calisthenics challenges both strength and mobility in a way that’s functional and rewarding.\n\nAnd just like any skill, progress is faster with guidance and teamwork. Whether you're learning the basics or unlocking advanced skills, having a structured plan and the support of a coach or community helps you stay consistent. With calisthenics, you don’t just build muscle—you build confidence, agility, and complete control over your body.",
    image: "/images/calisthenics-strength.jpg",
  },
};




export async function generateMetadata({ params }) {
  const programKey = params.program; 

  if (!programKey || !programs[programKey]) {
    return { title: "Not Found", description: "This program does not exist." };
  }

  return {
    title: programs[programKey].title,
    description: programs[programKey].description,
  };
}


export default async function ProgramPage({ params }) {
  const programKey = params.program; 
  const program = programs[programKey];

  if (!program) {
    return notFound(); 
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
