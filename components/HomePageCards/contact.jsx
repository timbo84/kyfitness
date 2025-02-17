import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      const emailParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      const res = await emailjs.send(serviceID, templateID, emailParams, userID);
      if (res.status === 200) {
        alert("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Error sending email. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again later.");
    }
  };

  return (
    <section id="contact" className="container py-5">
      <h2 className="text-center fw-bold" style={{ color: "#f1ffc4" }}>
        Get in Touch
      </h2>{" "}
     
      <div className="row justify-content-center align-items-center flex-grow-1">
        <div className="col-md-6">
          <form
            className="p-4 rounded shadow-lg"
            onSubmit={handleSubmit}
            style={{
              backgroundColor: "#5d576b",
              color: "#f1ffc4",
            }}
          >
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
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
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
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
