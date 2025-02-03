export default function HeroSection() {
    return (
      <section className="container text-center py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold">Transform Your Body with Expert Training</h1>
            <p className="lead">Get fit, stay healthy, and achieve your goals with personalized training plans.</p>
            <a href="#contact" className="btn btn-primary btn-lg mt-3">Get Started</a>
          </div>
          <div className="col-lg-6">
            <img src="/images/fitnesshero.jpg" alt="Personal Training" className="img-fluid rounded" />
          </div>
        </div>
      </section>
    );
  }
  