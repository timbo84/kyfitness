export default function ContactForm() {
  return (
    <section id="contact" className="container py-5">
      <h2 className="text-center fw-bold" style={{ color: "#f1ffc4" }}>
        Get in Touch
      </h2>{" "}
      {/* Changed text to white for visibility */}
      <div className="row justify-content-center align-items-center flex-grow-1">
        <div className="col-md-6">
          <form
            className="p-4 rounded shadow-lg"
            style={{
              backgroundColor: "#5d576b",
              color: "#f1ffc4",
            }}
          >
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                required
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  border: "none",
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                required
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  border: "none",
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Your Message"
                required
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  border: "none",
                }}
              ></textarea>
            </div>
            <button type="submit" className="custom-btn w-100">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
