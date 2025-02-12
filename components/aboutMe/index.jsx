export default function AboutMe() {
    return (
      <section className="container text-center py-5">
        <h2 className="fw-bold" style={{ color: "#f1ffc4" }}>About Me</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <img 
              src="/images/ky.jpg" 
              alt="Fitness Trainer" 
              className="img-fluid rounded-circle mb-4" 
              style={{ width: "400px", height: "400px", objectFit: "cover" }} 
            />
            <p style={{ color: "#f1ffc4", background: "#5d576b", padding: "20px", borderRadius: "10px" }}>
              Hi, I'm Kylynn Roberts, a passionate fitness trainer dedicated to helping you reach your full potential. 
              My journey in fitness started with a simple goal—to push myself beyond my limits. 
              Over time, I realized that true success isn't just about personal growth; it's about building a team, 
              inspiring others, and working together towards a shared vision. 
            </p>
            <p style={{ color: "#f1ffc4", background: "#5d576b", padding: "20px", borderRadius: "10px" }}>
              My training philosophy is built on discipline, teamwork, and goal-setting. Whether you're looking to gain strength, 
              lose weight, or build confidence, I'm here to guide and support you every step of the way. 
              Together, we’ll push boundaries, break barriers, and create the strongest version of YOU.
            </p>
            <p style={{ fontWeight: "bold", color: "#f1ffc4" }}>Let's make every workout count—because fitness is a team effort!</p>
          </div>
        </div>
      </section>
    );
  }
  