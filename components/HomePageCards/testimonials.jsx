import { useEffect } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Testimonials() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
      const bootstrap = require("bootstrap");
      new bootstrap.Carousel(document.querySelector("#testimonialCarousel"), {
        interval: 5000,
        ride: "carousel",
        pause: "hover",
        wrap: true,
      });
    }
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      className="container text-center py-5"
      style={{ color: "#f1ffc4", background: "#5d576b" }}
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <motion.h2 className="fw-bold" variants={fadeInUp}>
        What Our Clients Say
      </motion.h2>
      <div id="testimonialCarousel" className="carousel slide mt-4">
        <div className="carousel-inner">
          {[
            { text: `"Best trainer I've ever had! I lost 20 pounds in 3 months!"`, author: "- Madisyn R." },
            { text: `"Great workouts and personalized meal plans that actually work!"`, author: "- A. J." },
            { text: `"Helped me build muscle and stay consistent with my fitness goals."`, author: "- Izzie G." },
          ].map((testimonial, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <motion.div
                className="card p-3 shadow"
                style={{ background: "#dceed1" }}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
              >
                <p>{testimonial.text}</p>
                <h6>{testimonial.author}</h6>
              </motion.div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </motion.section>
  );
}
