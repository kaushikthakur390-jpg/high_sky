const HeroCarousel = () => {
  return (
    <div className="hero-carousel">
      <div className="hero-carousel-track">
        {[...Array(2)].map((_, index) => (
          <div className="hero-carousel-group" key={index}>
            <div className="hero-card">Speech Therapy</div>
            <div className="hero-card">Occupational Therapy</div>
            <div className="hero-card">Behaviour Therapy</div>
            <div className="hero-card">Special Education</div>
            <div className="hero-card">ABA Therapy</div>
            <div className="hero-card">Physiotherapy</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;