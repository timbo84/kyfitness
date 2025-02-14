import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HomeCTA() {
  const [clients, setClients] = useState(100);
  const [workouts, setWorkouts] = useState(5000);
  const [reviews, setReviews] = useState(50);

  useEffect(() => {
    const animateNumbers = (setState, finalValue) => {
      let start = 0;
      const increment = Math.ceil(finalValue / 100);
      const interval = setInterval(() => {
        start += increment;
        if (start >= finalValue) {
          start = finalValue;
          clearInterval(interval);
        }
        setState(start);
      }, 20);
    };
    
    animateNumbers(setClients, 100);
    animateNumbers(setWorkouts, 5000);
    animateNumbers(setReviews, 50);
  }, []);

  return (
    <section className="container text-center py-5" style={{color: "#f1ffc4" }}>
      {/* Transformation CTA */}
      <div className="mb-5">
        <h2 className="fw-bold " style={{color: "#f1ffc4" }}>Real People. Real Results.</h2>
        <p>See how our clients have transformed their fitness journey!</p>
        <Link href="/transformations" className="custom-btn">View Transformations</Link>
      </div>
      

      {/* Quiz CTA */}
      <div className="mb-5"style={{color: "#f1ffc4" }}>
        <h2>Not Sure Where to Start?</h2>
        <p>Take our quick quiz to find the perfect training program for you!</p>
        <Link href="/quiz" className="custom-btn">Take the Quiz</Link>
      </div>

      {/* Animated Stats Counter */}
      <div className="row  my-5" style={{color: "#f1ffc4" }}>
        <div className="col-md-4">
          <h3 className="fw-bold">{clients}+</h3>
          <p>Clients Transformed</p>
        </div>
        <div className="col-md-4">
          <h3 className="fw-bold">{workouts}+</h3>
          <p>Workouts Completed</p>
        </div>
        <div className="col-md-4">
          <h3 className="fw-bold">{reviews}+</h3>
          <p>5-Star Reviews</p>
        </div>
      </div>

      {/* Free Consultation CTA */}
      <motion.div whileHover={{ scale: 1.05 }}>
        <div className="p-4 rounded shadow-lg" style={{ background: "#5d576b", color: "#f1ffc4" }}>
          <h2 className="fw-bold">Get a Free Consultation</h2>
          <p>Not sure which program is right for you? Let's chat!</p>
          <Link href="/contact" className="custom-btn">Book a Free Call</Link>
        </div>
      </motion.div>
    </section>
  );
}
