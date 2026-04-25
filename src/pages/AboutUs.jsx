import { useEffect, useState } from 'react';
import './AboutUs.css';
import whereItBegan from '../assets/pages/about us/where it began.png';
import commitment from '../assets/pages/about us/comitment.png';
import milestones from '../assets/pages/about us/milestone.png';
import transform from '../assets/pages/about us/transform.png';
import frameA from '../assets/pages/about us/tmkc.png';
import frameB from '../assets/pages/about us/Frame 49.png';
import frameC from '../assets/pages/about us/tmkb.png';
import swoosh from '../assets/pages/about us/Frame 48.png';
import ribbon from '../assets/pages/about us/ribbon3.png';
import frameDivider from '../assets/pages/home/Frame 21.svg';
import frame43 from '../assets/pages/about us/Frame 43.png';
import group185 from '../assets/pages/about us/Group 185.jpg';
import group150 from '../assets/pages/about us/Group 150.png';
import frame44 from '../assets/pages/about us/Frame 44.png';
import group166 from '../assets/pages/about us/Group 166.png';
import frame45 from '../assets/pages/about us/Frame 45.png';

const momentImages = [
  'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1600&q=80'
];

export default function AboutUs() {
  const [activeMoment, setActiveMoment] = useState(0);

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setActiveMoment((prev) => (prev + 1) % momentImages.length);
    }, 2000);

    return () => window.clearInterval(timerId);
  }, []);

  const showPrevMoment = () => {
    setActiveMoment((prev) => (prev - 1 + momentImages.length) % momentImages.length);
  };

  const showNextMoment = () => {
    setActiveMoment((prev) => (prev + 1) % momentImages.length);
  };

  return (
    <div className="about-journey-page">
      <section className="journey-canvas">
         <h1 className="journey-title">OUR JOURNEY!</h1>

        <div className="journey-row journey-row-1">
          <img className="journey-frame" src={swoosh} alt="Journey photo frame" />
          <img className="journey-bubble" src={whereItBegan} alt="Where It All Began" />
        </div>

        <div className="journey-row journey-row-2">
          <img className="journey-bubble" src={commitment} alt="A Commitment to Inclusion" />
          <img className="journey-frame" src={frameB} alt="Journey photo frame" />
        </div>

        <div className="journey-row journey-row-3">
          <img className="journey-frame" src={frameC} alt="Journey photo frame" />
          <img className="journey-bubble" src={milestones} alt="Milestones of Growth" />
        </div>

        <div className="journey-row journey-row-4">
          <img className="journey-bubble" src={transform} alt="Transforming Lives" />
          <img className="journey-frame" src={frameA} alt="Journey photo frame" />
          <img className="journey-ribbon" src={ribbon} alt="" aria-hidden="true" />
        </div>
</section>

      <section className="team-divider-section" aria-hidden="true">
        <img className="team-divider-wave" src={frameDivider} alt="" />
      </section>

      <section className="about-team-section">
        <img className="about-team-bg" src={group150} alt="" aria-hidden="true" />

        <div className="about-team-inner">
          <h2 className="about-team-title">OUR TEAM</h2>

          <div className="about-team-lead">
            <img className="about-team-lead-photo" src={group185} alt="Dr. Priyanka Gupta" />
            <div className="about-team-lead-copy">
              <h3>CENTRE DIRECTOR &amp; FOUNDER</h3>
              <h4>DR. PRIYANKA GUPTA</h4>
              <p>Senior Occupational Therapist</p>
              <p>Certified Sensory Integration Therapist</p>
              <p>Certified LWT, BG, Reflex Integration</p>
            </div>
          </div>

          <div className="about-team-grid-wrap">
            <img className="about-team-grid" src={frame43} alt="High Sky team members" />
          </div>
        </div>
      </section>

      <section className="about-solutions-section">
        <img className="about-solutions-bg" src={group166} alt="" aria-hidden="true" />
        <img
          className="about-solutions-cards"
          src={frame44}
          alt="Comprehensive child development solutions offered by us"
        />
      </section>

      <section className="about-moments-section">
        <img className="about-moments-frame" src={frame45} alt="" aria-hidden="true" />

        <div className="about-moments-inner">
          <h2 className="about-moments-title">MOMENTS FROM OUR CENTRE</h2>

          <div className="about-moments-slider-wrap">
            <button
              type="button"
              className="about-moments-arrow about-moments-arrow-left"
              onClick={showPrevMoment}
              aria-label="Show previous image"
            >
              &#10094;
            </button>

            <div className="about-moments-card">
              <img
                className="about-moments-image"
                src={momentImages[activeMoment]}
                alt="High Sky moments"
              />
            </div>

            <button
              type="button"
              className="about-moments-arrow about-moments-arrow-right"
              onClick={showNextMoment}
              aria-label="Show next image"
            >
              &#10095;
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
