export default function ContactForm() {
    return (
      <section id="contact" className="container py-5">
        <h2 className="text-center fw-bold text-white">Get in Touch</h2> {/* Changed text to white for visibility */}
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form
              className="p-4 rounded shadow-lg"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)", // Light transparency
                backdropFilter: "blur(5px)", // Adds a subtle blur for readability
                border: "1px solid rgba(255, 255, 255, 0.3)", // Light border for definition
              }}
            >
              <div className="mb-3">
                <label className="form-label text-white">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  required
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.3)", border: "none" }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label text-white">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.3)", border: "none" }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label text-white">Message</label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Your Message"
                  required
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.3)", border: "none" }}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
  