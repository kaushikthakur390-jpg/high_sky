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

const programs = [
  {
    name: 'OCCUPATIONAL THERAPY',
    color: '#f5a623',
    mascot: penguinSvg,
    description:
      "At High Sky, our Occupational Therapy program is specially designed to support children in achieving developmental milestones and building essential life skills. From enhancing fine motor abilities to improving sensory processing and social skills, our personalized approach empowers each child to thrive in their unique way."
  },
  {
    name: 'PHYSIOTHERAPY',
    color: '#f5a623',
    mascot: foxSvg,
    description:
      "Our Physiotherapy sessions focus on improving posture, movement quality, strength, and coordination. We use child-friendly activities to boost confidence and physical independence while supporting everyday functional abilities."
  },
  {
    name: 'SPEECH THERAPY',
    color: '#f5a623',
    mascot: cowSvg,
    description:
      "Speech Therapy at High Sky helps children build clear communication skills including language development, articulation, and social interaction. We create structured yet playful sessions that encourage expression and confidence."
  },
  {
    name: 'BEHAVIOUR THERAPY',
    color: '#f5a623',
    mascot: elephantSvg,
    description:
      "Our Behaviour Therapy program supports emotional regulation, adaptive skills, and positive routines. With individualized goals and caregiver collaboration, we help children build meaningful and sustainable progress."
  },
  {
    name: 'SPECIAL EDUCATION',
    color: '#f5a623',
    mascot: dogSvg,
    description:
      "Special Education sessions are tailored to each child's learning profile. We focus on literacy, numeracy, attention, and classroom readiness through customized teaching strategies and structured support."
  },
  {
    name: 'SOCIAL SKILL TRAINING',
    color: '#f5a623',
    mascot: duckSvg,
    description:
      "Social Skill Training helps children develop interaction, turn-taking, listening, and confidence in group settings. We use guided activities and role-play to make social learning natural and effective."
  },
  // {
  //   name: 'GROUP THERAPY',
  //   color: '#f5a623',
  //   mascot: owlSvg,
  //   description:
  //     "Group Therapy offers a collaborative space where children practice communication, participation, and peer engagement. It supports emotional growth while reinforcing therapy goals in a social environment."
  // },
  // {
  //   name: 'UDDESHYA',
  //   color: '#f5a623',
  //   mascot: reindeerSvg,
  //   sub: 'SCHOOL READINESS PROGRAM',
  //   description:
  //     "Uddeshya is our school readiness program designed to build foundational academic, behavioral, and social skills. It prepares children for smoother transitions into mainstream learning environments."
  // },
];

export default function OurPrograms() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleToggle = (index) => {
    setExpandedIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="programs-page">
      <section className="programs-hero">
        {/* Decorative background circles */}
        <div className="deco-circle deco-c1"></div>
        <div className="deco-circle deco-c2"></div>
        <div className="deco-circle deco-c3"></div>
        <div className="deco-dot deco-d1"></div>
        <div className="deco-dot deco-d2"></div>
        <div className="programs-hero-content">
          <h1 className="programs-main-title">
            Shaping Futures: Discover Our<br />Child-Centric Programs
          </h1>
        </div>

        {/* Programs list */}
        <div className="programs-list-wrap">
          {programs.map((prog, i) => {
            const isExpanded = expandedIndex === i;

            return (
            <div className={`prog-row ${isExpanded ? 'expanded' : ''}`} key={i}>
              <div className="prog-mascot">
                <img src={prog.mascot} alt={prog.name} />
              </div>
              <div className="prog-bar">
                <div className="prog-info">
                  <strong style={{ color: prog.color }}>{prog.name}</strong>
                  {prog.sub && <div className="prog-sub" style={{ color: prog.color }}>{prog.sub}</div>}
                  <button
                    type="button"
                    className="prog-learn"
                    onClick={() => handleToggle(i)}
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? 'Show Less >' : 'Learn More >'}
                  </button>
                  {isExpanded && (
                    <p className="prog-desc">
                      {prog.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );})}
        </div>

        {/* CTA */}
        <div className="programs-enroll-section">
          <div className="programs-cta-wrap">
            <Link to="/consultation" className="programs-enroll-btn">
              ENROLL YOUR CHILD NOW &gt;
            </Link>
          </div>
        </div>

     
      </section>
    </div>
  );
}
