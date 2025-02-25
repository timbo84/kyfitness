import Link from "next/link";
import { motion } from "framer-motion";


const programs = {
  "strength": {
    title: "Strength Training",
    description: "Build strength, boost endurance, and unlock your full potential with expert training.",
    image: "/images/strength.jpg",
  },
  "weight-loss": {
    title: "Weight Loss",
    description: "Burn fat, build confidence, and transform your body with our proven weight loss programs.",
    image: "/images/weightloss.jpg",
  },
  "personal-coaching": {
    title: "Personal Coaching",
    description: "Achieve your goals with expert guidance and a strong support system—because fitness is a team effort.",
    image: "/images/personal.jpg",
  },
  "endurance": {
    title: "Endurance Training",
    description: "Increase stamina, boost cardiovascular strength, and push your limits with structured endurance training.",
    image: "/images/endurance.jpg",
  },
  "general-fitness": {
    title: "General Fitness",
    description: "Stay active, move better, and build a healthier lifestyle with a balanced fitness approach.",
    image: "/images/general-fitness.jpg",
  },
  "hiit-weight-loss": {
    title: "HIIT for Weight Loss",
    description: "Torch calories, improve endurance, and get results fast with high-intensity interval training.",
    image: "/images/hiit-weight-loss.jpg",
  },
  "calisthenics-strength": {
    title: "Calisthenics Strength",
    description: "Master bodyweight training, gain flexibility, and develop full-body control through calisthenics.",
    image: "/images/calisthenics-strength.jpg",
  },
};

export default function Services() {
  return (
    <section className="container text-center py-5">
      <h2 className="fw-bold" style={{ color: "#f1ffc4" }}>Our Training Programs</h2>
      <div className="row mt-4">
      {Object.entries(programs).map(([key, program], index) => (
        <motion.div 
          key={key} 
          className={`col-md-4 ${index > 2 ? "mt-4" : ""}`} 
          whileHover={{ scale: 1.05 }}
        >
          <div className="card shadow h-100">
            <img src={program.image} className="card-img-top" alt={program.title} />
            <div className="card-body d-flex flex-column" style={{ color: "#f1ffc4", background: "#5d576b" }}>
              <h5 className="card-title">{program.title}</h5>
              <p className="card-text mt-auto">{program.description}</p>
              <Link href={`/programs/${key}`} className="custom-btn text-decoration-none fw-bold">
                Learn More <span className="ms-1"> &rarr; </span>
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
    </section>
  );
}
