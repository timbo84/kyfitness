export default function ParallaxSection({ image, children }) {
    return (
      <div
        className="parallax-section d-flex align-items-center justify-content-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="overlay"></div>
        <div className="content text-center">{children}</div>
      </div>
    );
  }
  