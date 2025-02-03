


export default function Testimonials() {
    return (
      <section className="container text-center py-5" style={{ color: "#f1ffc4", background: "#5d576b"  }}>
        <h2 className="fw-bold">What Our Clients Say</h2>
        <div id="testimonialCarousel" className="carousel slide mt-4" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card p-3 shadow" style={{background: "#dceed1"}}>
                <p>"Best trainer I've ever had! I lost 20 pounds in 3 months!"</p>
                <h6>- Sarah J.</h6>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card p-3 shadow">
                <p>"Great workouts and personalized meal plans that actually work!"</p>
                <h6>- James L.</h6>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card p-3 shadow">
                <p>"Helped me build muscle and stay consistent with my fitness goals."</p>
                <h6>- Maria R.</h6>
              </div>
            </div>
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
      </section>
    );
  }
  