import Link from "next/link";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section className="container text-center py-5">
      <h2 className="fw-bold" style={{ color: "#f1ffc4" }}>Our Training Programs</h2>
      <div className="row mt-4">
        {/* Strength Training */}
        <motion.div className="col-md-4" whileHover={{ scale: 1.05 }}>
          <div className="card shadow h-100">
            <img src="/images/strength.jpg" className="card-img-top" alt="Strength Training" />
            <div className="card-body d-flex flex-column" style={{ color: "#f1ffc4", background: "#5d576b" }}>
              <h5 className="card-title">Strength Training</h5>
              <p className="card-text mt-auto">Build strength, boost endurance, and unlock your full potential with expert training.</p>
              <Link href="/programs/strength" className="custom-btn text-decoration-none fw-bold">
                Learn More <span className="ms-1"> &rarr; </span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Weight Loss */}
        <motion.div className="col-md-4 mt-4 mt-md-0" whileHover={{ scale: 1.05 }}>
          <div className="card shadow h-100">
            <img src="/images/weightloss.jpg" className="card-img-top" alt="Weight Loss" />
            <div className="card-body d-flex flex-column" style={{ color: "#f1ffc4", background: "#5d576b" }}>
              <h5 className="card-title">Weight Loss</h5>
              <p className="card-text mt-auto">Burn fat, build confidence, and transform your body with our proven weight loss programs.</p>
              <Link href="/programs/weight-loss" className="custom-btn text-decoration-none fw-bold">
                Learn More <span className="ms-1"> &rarr; </span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Personal Coaching */}
        <motion.div className="col-md-4 mt-4 mt-md-0" whileHover={{ scale: 1.05 }}>
          <div className="card shadow h-100">
            <img src="/images/personal.jpg" className="card-img-top" alt="Personal Coaching" />
            <div className="card-body d-flex flex-column" style={{ color: "#f1ffc4", background: "#5d576b" }}>
              <h5 className="card-title">Personal Coaching with a Team Mindset</h5>
              <p className="card-text mt-auto">Achieve your goals with expert guidance and a strong support system—because fitness is a team effort.</p>
              <Link href="/programs/personal-coaching" className="custom-btn text-decoration-none fw-bold">
                Learn More <span className="ms-1"> &rarr; </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
