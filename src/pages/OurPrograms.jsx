import { useState } from 'react';
import { Link } from 'react-router-dom';
import './OurPrograms.css';

// SVG Mascots
import penguinSvg from '../assets/pages/home/programs/penguin.svg';
import foxSvg from '../assets/pages/home/programs/fox.svg';
import cowSvg from '../assets/pages/home/programs/cow.svg';
import elephantSvg from '../assets/pages/home/programs/elephant.svg';
import dogSvg from '../assets/pages/home/programs/dog.svg';
import duckSvg from '../assets/pages/home/programs/duck.svg';
import owlSvg from '../assets/pages/home/programs/owl.svg';
import reindeerSvg from '../assets/pages/home/programs/reindeer.svg';
import test from '../assets/pages/services/test.png';

const services = [
  "Paediatric Occupational Therapy",
  "Paediatric Physiotherapy and Motor Rehabilitation",
  "Paediatric Speech Language and Communication Therapy",
  "Child Psychology (BMT, CBT, PBS)",
  "Neuro Developmental Learning and Academic Intervention",
  "Social Integration Group",
  "Life Skills Training",
  "Hand Writing Without Tears Training",
  "School Readiness Program",
  "Home Based Parental Training Program"
];

const approaches = [
  "Oral Sensory Integration",
  "Oral Motor Integration",
  "Feeding and Swallowing Therapy",
  "Reflex Integration",
  "Interceptive Sensory Training",
  "Gravity Sensorimotor Training",
  "Vestibulo Visual Training",
  "Parent Coaching"
];
export default function OurPrograms() {
  return (
    <div className="programs-page">

      <section className="programs-hero">

        <div className="deco-circle deco-c1"></div>
        <div className="deco-circle deco-c2"></div>
        <div className="deco-circle deco-c3"></div>

        <div className="programs-hero-content">
          <h1 className="programs-main-title">
            Shaping Futures: Discover Our
            <br />
            Child-Centric Programs
          </h1>
        </div>

        {/* SERVICES */}
        <section className="programs-section">
          <h2 className="section-title">Services</h2>

          <div className="program-cards-grid">
            {services.map((service, index) => (
              <div className="program-card" key={index}>
                <div className="program-card-image">
                  <img
                    src={test}
                    alt={service}
                  />
                </div>

                <div className="program-card-content">
                  <h3>{service}</h3>

                  <p>
                    Personalized therapy programs designed to support
                    your child's growth and developmental journey.
                  </p>

                  <button className="program-btn">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* APPROACHES */}
        <section className="programs-section">
          <h2 className="section-title">Approaches</h2>

          <div className="program-cards-grid">
            {approaches.map((item, index) => (
              <div className="program-card" key={index}>
                <div className="program-card-image">
                  <img
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
                    alt={item}
                  />
                </div>

                <div className="program-card-content">
                  <h3>{item}</h3>

                  <p>
                    Evidence-based intervention approaches tailored
                    to individual developmental needs.
                  </p>

                  <button className="program-btn">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="programs-cta-wrap">
          <Link
            to="/consultation"
            className="programs-enroll-btn"
          >
            ENROLL YOUR CHILD NOW →
          </Link>
        </div>

      </section>

    </div>
  );
}