import { useEffect, useState } from 'react';
import './AboutUs.css';
import frameA from '../assets/pages/about us/img3.png';
import frameB from '../assets/pages/about us/Frame 49.png';
import frameC from '../assets/pages/about us/img2.png';
import swoosh from '../assets/pages/about us/Frame 48.png';
import ribbon from '../assets/pages/about us/ribbon3.png';
import frameDivider from '../assets/pages/home/Frame 21.svg';
import frame43 from '../assets/pages/about us/Frame 43.png';
import group185 from '../assets/pages/about us/Group 185.jpg';
import group150 from '../assets/pages/about us/Group 150.png';
import frame44 from '../assets/pages/about us/Frame 44.png';
import group166 from '../assets/pages/about us/Group 166.png';
import group69 from '../assets/pages/about us/Group 69.png';
import frame45 from '../assets/pages/about us/Frame 45.png';
import newStatsImg from '../assets/pages/about us/new-stats.png';

// Moment photos
import moment1 from '../assets/pages/moment/IMG_20260605_021109_034.jpg.jpeg';
import moment2 from '../assets/pages/moment/IMG_20260606_023319_991.jpg.jpeg';
import moment3 from '../assets/pages/moment/IMG_20260606_023348_236.jpg.jpeg';
import moment4 from '../assets/pages/moment/IMG_20260606_023403_481.jpg.jpeg';
import moment5 from '../assets/pages/moment/IMG_20260606_023425_828.jpg.jpeg';
import moment6 from '../assets/pages/moment/IMG_20260606_023442_754.jpg.jpeg';

const momentImages = [
  moment1,
  moment2,
  moment3,
  moment4,
  moment5,
  moment6,
];

export default function AboutUs() {
  const [activeMoment, setActiveMoment] = useState(0);

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setActiveMoment((prev) => (prev + 1) % momentImages.length);
    }, 2000);

    return () => window.clearInterval(timerId);
  }, []);

  useEffect(() => {
    document.title = "About High Sky CDC | 6+ Years & 1000+ Children Supported";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "For over 6 years, High Sky CDC has been supporting children and families across Hyderabad through personalized, evidence-based care. Learn about our journey, our team, and the impact we've made in the lives of 1000+ children.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "For over 6 years, High Sky CDC has been supporting children and families across Hyderabad through personalized, evidence-based care. Learn about our journey, our team, and the impact we've made in the lives of 1000+ children.";
      document.head.appendChild(meta);
    }
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
          <img className="journey-frame" src={swoosh} alt="High Sky CDC founding — child development centre in Hyderabad" />
          <div className="journey-text-card journey-bubble">
            <h2>WHERE IT ALL BEGAN</h2>
            <p>High Sky CDC was founded with a simple belief — every child deserves the opportunity to grow, learn, and reach their full potential. Driven by this vision, Dr. Priyanka Gupta created a nurturing space where children and families could receive personalized support, guidance, and care. What began as a small dream has grown into a trusted child development center supporting hundreds of families across Hyderabad through individualized care, evidence-based practices, and a commitment to helping every child shine.</p>
          </div>
        </div>

        <div className="journey-row journey-row-2">
          <div className="journey-text-card journey-bubble">
            <h2>A COMMITMENT TO INCLUSION</h2>
            <p>From the very beginning, High Sky CDC has been built on the belief that every child deserves to feel valued, understood, and supported. We recognize that every developmental journey is unique, which is why we embrace a child-centered approach that celebrates individual strengths while addressing specific challenges. Through early intervention, personalized care, and family collaboration, we strive to create an inclusive environment where children can build confidence, develop essential skills, and thrive in their own way.</p>
          </div>
          <img className="journey-frame" src={frameB} alt="Children with diverse needs supported at High Sky CDC, Hyderabad" />
        </div>

        <div className="journey-row journey-row-3">
          <img className="journey-frame" src={frameC} alt="Child therapy milestones — Manikonda and Kondapur centres, High Sky CDC" />
          <div className="journey-text-card journey-bubble">
            <h2>MILESTONES OF GROWTH</h2>
            <p>Every child, family, and milestone has played a role in shaping the High Sky story. As our community grew, so did our ability to support more children through our centres in Manikonda and Kondapur. Along the way, we have partnered with schools, educators, and professionals to raise awareness, promote early intervention, and create stronger support systems for children with diverse developmental needs.</p>
          </div>
        </div>

        <div className="journey-row journey-row-4">
          <div className="journey-text-card journey-bubble">
            <h2>TRANSFORMING LIVES</h2>
            <p>Over the past 6+ years, we have supported 1000+ children and families, each with their own unique strengths, challenges, and achievements. From first steps in communication and social connection to greater independence and confidence, every success story is a reminder of the impact that the right support can make.</p>
          </div>
          <img className="journey-frame" src={frameA} alt="Over 1000 children supported through autism treatment and early intervention in Hyderabad" />
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
            <img className="about-team-lead-photo" src={group185} alt="Dr. Priyanka Gupta — Senior Occupational Therapist and child specialist, High Sky CDC Hyderabad" />
            <div className="about-team-lead-copy">
              <h3>CENTRE DIRECTOR &amp; FOUNDER</h3>
              <h4>DR. PRIYANKA GUPTA</h4>
              <p>Senior Occupational Therapist</p>
              <p>Certified Sensory Integration Therapist</p>
              <p>Certified LWT, BG, Reflex Integration</p>
            </div>
          </div>

          <div className="about-team-grid-wrap">
            <img className="about-team-grid" src={frame43} alt="High Sky CDC multidisciplinary therapy team — Kondapur and Manikonda, Hyderabad" />
          </div>
        </div>
      </section>

      {/* Section 3 - High Sky at a Glance */}
      <section className="about-glance-section">
        <picture>
          <source media="(max-width: 900px)" srcSet={group69} />
          <img className="about-solutions-bg" src={group166} alt="" aria-hidden="true" />
        </picture>
        <div className="about-glance-inner">
          <h2 className="about-glance-title">High Sky at a Glance</h2>
          <div className="glance-new-stats-wrapper">
            <img src={newStatsImg} alt="High Sky CDC child development centre — 1000+ children supported, 6+ years of service, Hyderabad" className="glance-new-stats-bg" />
            <div className="glance-pill pill-1"><span>1000+ Children Supported</span></div>
            <div className="glance-pill pill-2"><span>2 Centers Across Hyderabad<br />(Kondapur & Manikonda)</span></div>
            <div className="glance-pill pill-3"><span>6+ Years of Service</span></div>
            <div className="glance-pill pill-4"><span>Experienced Multidisciplinary Team</span></div>
            <div className="glance-pill pill-5"><span>Trusted by Families Across Hyderabad</span></div>
            <div className="glance-pill pill-6"><span>Personalized Development Plans</span></div>
          </div>
        </div>
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
                alt={[
                  "Therapy session at High Sky CDC, Hyderabad",
                  "Children at High Sky child development centre, Hyderabad",
                  "Occupational therapy activity for kids at High Sky CDC",
                  "Speech therapy session for children at High Sky CDC, Hyderabad",
                  "Early intervention programme at High Sky CDC, Manikonda",
                  "Child development therapy at High Sky CDC, Kondapur",
                ][activeMoment]}
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
