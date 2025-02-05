export default function Services() {
    return (
      <section className="container text-center py-5">
        <h2 className="fw-bold" style={{ color: "#f1ffc4" }}>Our Training Programs</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card shadow">
              <img src="/images/strength.jpg" className="card-img-top" alt="Strength Training" />
              <div className="card-body" style={{ color: "#f1ffc4", background: "#5d576b"  }}>
                <h5 className="card-title">Strength Training</h5>
                <p className="card-text">Build muscle and increase endurance with expert strength training.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="card shadow">
              <img src="/images/weightloss.jpg" className="card-img-top" alt="Weight Loss" />
              <div className="card-body" style={{ color: "#f1ffc4", background: "#5d576b" }}>
                <h5 className="card-title">Weight Loss</h5>
                <p className="card-text">Effective programs to help you shed fat and get lean.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="card shadow">
              <img src="/images/personal.jpg" className="card-img-top" alt="Online Coaching" />
              <div className="card-body" style={{ color: "#f1ffc4", background: "#5d576b"  }}>
                <h5 className="card-title" >In Person Coaching</h5>
                <p className="card-text" >Get that One on One personal coaching sessions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  