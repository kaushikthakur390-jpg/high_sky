import { useState } from 'react';
import { Link } from 'react-router-dom';
import './OurPrograms.css';

// SVG Mascots (kept for potential future use)
import penguinSvg from '../assets/pages/home/programs/penguin.svg';
import foxSvg from '../assets/pages/home/programs/fox.svg';
import cowSvg from '../assets/pages/home/programs/cow.svg';
import elephantSvg from '../assets/pages/home/programs/elephant.svg';
import dogSvg from '../assets/pages/home/programs/dog.svg';
import duckSvg from '../assets/pages/home/programs/duck.svg';
import owlSvg from '../assets/pages/home/programs/owl.svg';
import reindeerSvg from '../assets/pages/home/programs/reindeer.svg';

// ── Service images ──────────────────────────────────────────
import imgOccupational from '../assets/pages/services/Paediatric Occupational Therapy.PNG';
import imgPhysiotherapy from '../assets/pages/services/Paediatric Physiotherapy and motor rehabilitation.PNG';
import imgSpeech from '../assets/pages/services/Paediatric Speech Language and communication therapy.PNG';
import imgPsychology from '../assets/pages/services/Child Psychology (BMT, CBT, PBS).PNG';
import imgNeuroDev from '../assets/pages/services/Neuro developmental Learning and Academic intervention.PNG';
import imgSocialInteg from '../assets/pages/services/Social integration group.PNG';
import imgLifeSkills from '../assets/pages/services/Life Skills training.PNG';
import imgHandwriting from '../assets/pages/services/Hand writing without tears training.PNG';
import imgSchoolReady from '../assets/pages/services/School readiness program.PNG';
import imgHomeParental from '../assets/pages/services/Home based parental Training program.PNG';

// ── Approach images ──────────────────────────────────────────
import imgOralSensory from '../assets/pages/services/Oral sensory integration.PNG';
import imgOralMotor from '../assets/pages/services/oral motor integration.PNG';
import imgFeeding from '../assets/pages/services/Feeding and swallowing Therapy.PNG';
import imgReflex from '../assets/pages/services/Reflex Integration.PNG';
import imgInterceptive from '../assets/pages/services/Interceptive sensory training.PNG';
import imgGravity from '../assets/pages/services/gravity sensorimotor training.PNG';
import imgVestibulo from '../assets/pages/services/vestibulo visual training.PNG';
import imgParentCoaching from '../assets/pages/services/parent coaching.PNG';

const services = [
  { title: "Paediatric Occupational Therapy", img: imgOccupational },
  { title: "Paediatric Physiotherapy and Motor Rehabilitation", img: imgPhysiotherapy },
  { title: "Paediatric Speech Language and Communication Therapy", img: imgSpeech },
  { title: "Child Psychology (BMT, CBT, PBS)", img: imgPsychology },
  { title: "Neuro Developmental Learning and Academic Intervention", img: imgNeuroDev },
  { title: "Social Integration Group", img: imgSocialInteg },
  { title: "Life Skills Training", img: imgLifeSkills },
  { title: "Hand Writing Without Tears Training", img: imgHandwriting },
  { title: "School Readiness Program", img: imgSchoolReady },
  { title: "Home Based Parental Training Program", img: imgHomeParental },
];

const approaches = [
  { title: "Oral Sensory Integration", img: imgOralSensory },
  { title: "Oral Motor Integration", img: imgOralMotor },
  { title: "Feeding and Swallowing Therapy", img: imgFeeding },
  { title: "Reflex Integration", img: imgReflex },
  { title: "Interceptive Sensory Training", img: imgInterceptive },
  { title: "Gravity Sensorimotor Training", img: imgGravity },
  { title: "Vestibulo Visual Training", img: imgVestibulo },
  { title: "Parent Coaching", img: imgParentCoaching },
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
            Shaping Futures: Discover Our Child-Centric Programs
          </h1>
        </div>

        {/* SERVICES */}
        <section className="programs-section">
          {/* <h2 className="section-title">Services</h2> */}

          <div className="program-cards-grid">
            {services.map((service, index) => (
              <div className="program-card" key={index}>
                <div className="program-card-image">
                  <img
                    src={service.img}
                    alt={service.title}
                  />
                </div>

                <div className="program-card-content">
                  <h3>{service.title}</h3>

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
                    src={item.img}
                    alt={item.title}
                  />
                </div>

                <div className="program-card-content">
                  <h3>{item.title}</h3>

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