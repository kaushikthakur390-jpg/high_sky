import { Link } from 'react-router-dom';
import './Home.css';

// Shared Assets
import birdBlue from '../assets/shared/mascots/blue-bird.png';
import birdRed from "../assets/pages/home/red_bird.png"; // Assuming it's red_bird.png
import projector from '../assets/shared/mascots/projector.png';
import screen from '../assets/shared/mascots/screen.png';
import cloudDivider from '../assets/pages/home/Frame 19.png';
import frameDivider from '../assets/pages/home/Frame 21.svg';
import sectionDividerThree from '../assets/pages/home/SECTION 3.png';
import commitmentFrame1 from '../assets/pages/home/homeframe1.png';
import commitmentFrame2 from '../assets/pages/home/homeframe2.png';
import commitmentFrame3 from '../assets/pages/home/Frame 50.png';

// Program mascots
import otProgramCard from '../assets/pages/home/ot-1.png';
import physioProgramCard from '../assets/pages/home/physio-1.png';
import speechProgramCard from '../assets/pages/home/st-5.png';
import behaviorProgramCard from '../assets/pages/home/bt-1.png';
import specialEducationProgramCard from '../assets/pages/home/SE-2.png';
import socialSkillProgramCard from '../assets/pages/home/SST-7.png';
import groupTherapyProgramCard from '../assets/pages/home/GT-2.png';
// import uddeshyaProgramCard from '../assets/pages/home/udd8-1.png';
// Photo assets - Real therapy session photos
import heroPhoto from '../assets/pages/home/Frame 18.png';
import commitPic1 from '../assets/pages/home/Group 218.jpg';
import commitPic2 from '../assets/pages/home/photo_6224239972727240255_y 1.png';
import commitPic3 from '../assets/pages/home/photo_6307364499191086452_y (3) 1.png';
import uni1 from '../assets/pages/home/uni_1.png';
import uni2 from '../assets/pages/home/uni_2.png';
import uni3 from '../assets/pages/home/uni_3.png';
import uni4 from '../assets/pages/home/uni_4.png';
import uni5 from '../assets/pages/home/uni_5.png';
import uni6 from '../assets/pages/home/uni_6.png';
import pic4 from '../assets/pages/home/pic4.png';
import pic5 from '../assets/pages/home/pic5.png';
import pic6 from '../assets/pages/home/pic6.png';

const commitmentBlocks = [
  {
    type: 'left',
    title: 'OUR COMMITMENT',
    img: commitPic1,
    text: 'AT HIGH SKY CHILD DEVELOPMENT CENTRE, OUR MISSION IS TO NURTURE AND EMPOWER CHILDREN WITH UNIQUE LEARNING AND DEVELOPMENTAL NEEDS. WE ARE DEDICATED TO PROVIDING COMPREHENSIVE, INDIVIDUALIZED THERAPY AND SUPPORT SERVICES THAT FOSTER GROWTH, INDEPENDENCE, AND A SENSE OF BELONGING FOR EVERY CHILD.'
  },
  {
    type: 'right',
    title: 'WHERE WE\'RE HEADED!',

    img: commitPic2,
    text: 'OUR VISION IS TO BECOME THE PREMIER CHILD DEVELOPMENT CENTRE IN HYDERABAD, RENOWNED FOR OUR INNOVATIVE APPROACH TO EARLY CHILDHOOD EDUCATION AND OUR COMMITMENT TO HELPING EVERY CHILD THRIVE. WE STRIVE TO SET THE STANDARD FOR EXCELLENCE IN DEVELOPMENTAL PROGRAMS, SUPPORTING CHILDREN WITH DIVERSE NEEDS AND ABILITIES.'
  },
  {
    type: 'left',
    title: 'OUR PILLARS',
    img: commitPic3,
    text: 'WE BELIEVE THAT EVERY CHILD IS UNIQUE, AND WE ARE PASSIONATE ABOUT DESIGNING INDIVIDUALIZED PROGRAMS THAT HIGHLIGHT THEIR STRENGTHS, ADDRESS THEIR CHALLENGES, AND IGNITE A LIFELONG LOVE OF LEARNING. OUR CHILD-CENTRIC APPROACH PRIORITIZES HOLISTIC DEVELOPMENT, MAKING US THE TRUSTED CHOICE FOR PARENTS SEEKING QUALITY EARLY EDUCATION AND INTERVENTION SERVICES IN HYDERABAD.'
  }
];

const uniqueFeatures = [
  { img: uni1, title: 'MULTIDISCIPLINARY APPROACH', desc: 'Our team includes occupational therapists, speech pathologists, and special educators who collaborate closely for every child. This integrated planning helps us design therapy goals that are practical, connected, and tailored to each child\'s unique developmental profile.' },
  { img: uni2, title: 'EVIDENCE-BASED PRACTICES', desc: 'We use current research and proven therapeutic methods to guide each session with purpose. Progress is reviewed regularly so interventions stay engaging, measurable, and aligned with the best possible outcomes for children and families.' },
  { img: uni3, title: 'NEURODIVERSITY ACCEPTANCE', desc: 'We celebrate the strengths of every child and create an inclusive environment where differences are respected. By building confidence, self-awareness, and belonging, we help children grow into their authentic selves with pride.' },
  { img: uni4, title: 'HOLISTIC DEVELOPMENT', desc: 'Our approach goes beyond traditional therapy by addressing emotional, social, cognitive, and physical growth together. This whole-child model supports meaningful development that carries into school, home routines, and everyday life.' },
  { img: uni5, title: 'CAREGIVER-CHILD PARTNERSHIPS', desc: 'We believe parents and caregivers are essential partners in every milestone. Through guidance, home strategies, and regular collaboration, we help families confidently support their child\'s progress outside the therapy room.' },
  { img: uni6, title: 'HIGH-TECH EQUIPMENT', desc: 'Our centre features advanced therapeutic tools, sensory resources, and child-friendly learning setups. These resources make sessions safer, more interactive, and better suited to each child\'s learning style and sensory needs.' },
];

const programs = [
  {
    name: 'OCCUPATIONAL THERAPY',
    description: "Boost your child's independence with expert occupational therapy designed for their unique needs.",
    image: otProgramCard,
    link: '/our-programs',
    cta: 'LEARN MORE'
  },
  {
    name: 'PHYSIOTHERAPY',
    description: "Revitalize your child's mobility and strength with tailored physiotherapy sessions that deliver results.",
    image: physioProgramCard,
    link: '/our-programs',
    cta: 'LEARN MORE'
  },
  {
    name: 'SPEECH THERAPY',
    description: "Enhance your child's daily living skills and independence through personalized sessions tailored to their needs.",
    image: speechProgramCard,
    link: '/our-programs',
    cta: 'LEARN MORE'
  },
  {
    name: 'BEHAVIOUR THERAPY',
    description: 'Transform challenging behaviors into positive outcomes with our proven behavior therapy techniques.',
    image: behaviorProgramCard,
    link: '/our-programs',
    cta: 'LEARN MORE'
  },
  {
    name: 'SPECIAL EDUCATION',
    description: "Unlock your child's full potential with individualized special education programs tailored to their learning style.",
    image: specialEducationProgramCard,
    link: '/our-programs',
    cta: 'LEARN MORE'
  },
  {
    name: 'GROUP THERAPY',
    description: 'Foster social connections and personal growth through engaging group therapy sessions and teamwork.',
    image: groupTherapyProgramCard,
    link: '/our-programs',
    cta: 'LEARN MORE'
  },
  {
    name: 'SOCIAL SKILL TRAINING',
    description: 'Empower your child with essential social skills through targeted training and confidence-building activities.',
    image: socialSkillProgramCard,
    link: '/our-programs',
    cta: 'LEARN MORE'
  },
    // {
    //   name: 'UDDESHYA : OUR SCHOOL READINESS PROGRAM',
    //   description: 'Prepare your child for academic success with our comprehensive school readiness program.',
    //   image: uddeshyaProgramCard,
    //   link: '/uddeshya',
    //   cta: 'ENROLL NOW'
    // },
];

const commitmentFrames = [commitmentFrame1, commitmentFrame2, commitmentFrame3];

 export default function Home() {
  return (
    <div className="home-page">
      {/* <div className="home-top-nav-cloud" aria-hidden="true" /> */}

      {/* ===== HERO ===== */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-welcome">WELCOME TO HIGH SKY CDC</h1>
            <p className="hero-subtitle">
              where every sky is limitless &amp; every child is exceptional
            </p>
            <Link to="/consultation" className="hero-cta">
              BOOK YOUR CONSULTATION TODAY &gt;
            </Link>
          </div>
        </div>

        <div className="hero-image-edge">
          <img src={heroPhoto} alt="Children in therapy session" className="hero-photo" />
        </div>

        <div className="hero-cloud-divider">
          <img src={cloudDivider} alt="Cloud Divider" />
        </div>

      </section>
        
      {/* Floating Screen Graphic overlap (Moved outside to prevent absolute position overlap) */}
      <div className="hero-video-overlap">
        <div className="hero-video-wrap">
          <div className="hero-video-copy">
            <p>
              Welcome to high sky child developement centrer, A place where every childs unique
              abilities are not just recognized but celebrated.
            </p>
            <p>
              AT out centre, we embrace neurodiversity and provide a nuturing environment where
              each child's potential is not only enhanced but also developed to the fullest extent.
            </p>
            <Link to="/about-us" className="hero-video-cta">KNOW MORE ABOUT HIGH SKY &gt;</Link>
          </div>

          <div className="hero-screen-area">
            <img src={projector} alt="Projector" className="hero-projector-img" />
            <div className="hero-screen-frame">
              <img src={screen} alt="Screen" className="hero-screen-img" />
              <div className="hero-video-inner">
                <iframe
                  src="https://www.youtube.com/embed/S75Zh55Srd4"
                  title="High Sky CDC"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>

        <div className="hero-bottom-divider">
          <img src={frameDivider} alt="Section Divider" className="hero-frame-divider" />
          {/* Blue bird sitting on screen */}
          <img src={birdBlue} alt="Blue Bird Mascot" className="mascot-bird-blue" />
        </div>
      </div>

      {/* ===== ABOUT / COMMITMENT ===== */}
      <section className="commitment-section">
        <div className="commitment-container">
          <div className="commitment-text-stack">
            {commitmentBlocks.map((block) => (
              <article className="commitment-text-block" key={block.title}>
                <h2 className="commitment-heading">{block.title}</h2>
                <p className="commitment-desc">{block.text}</p>
              </article>
            ))}
          </div>

          <div className="commitment-photo-layer" aria-hidden="true">
            {commitmentFrames.map((frame, i) => (
              <div className={`commitment-polaroid commitment-polaroid-${i + 1}`} key={`commitment-frame-${i + 1}`}>
                <img src={frame} alt="" className="commitment-frame-img" />
              </div>
            ))}
          </div>

          <img src={birdRed} alt="Red bird mascot" className="mascot-bird-red" />
        </div>
      </section>

      {/* ===== WHAT MAKES US UNIQUE ===== */}
      <section className="unique-section">
        {/* Blue/Purple cloud top divider */}
        <div className="unique-cloud-top">
          <img src={sectionDividerThree} alt="Section Divider" className="unique-top-divider-img" />
        </div>
        <div className="unique-body">
          <h2 className="section-title-white">WHAT MAKES US UNIQUE?</h2>
          <p className="unique-intro">
            We combine expert-led therapy, family partnership, and a child-first environment to create progress that is meaningful and long-lasting.
          </p>
          <div className="unique-cards">
            {uniqueFeatures.map((f, i) => (
              <div className="unique-card" key={i}>
                <div className="unique-card-image-wrap">
                  <div className="dashed-ring"></div>
                  <img src={f.img} alt={f.title} className="unique-circle-img" />
                </div>
                <div className="unique-badge">
                  {f.title}
                </div>
                <p className="unique-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="unique-cloud-divider">
          <img src={cloudDivider} alt="Cloud Divider" className="unique-cloud-divider-img" />
        </div>
      </section>

      {/* ===== PROGRAMS ===== */}
      <section className="home-programs-section">
        <h2 className="home-programs-title">OUR PROGRAMS</h2>
        <div className="home-programs-list">
          {programs.map((prog, i) => (
            <article className={`home-program-card home-program-${i + 1} ${i % 2 === 0 ? 'home-program-left' : 'home-program-right'}`} key={i}>
              <img src={prog.image} alt={prog.name} className="home-program-bg" />
              <div className="home-program-copy">
                <h3 className="home-program-name">{prog.name}</h3>
                <p className="home-program-description">{prog.description}</p>
                <Link to={prog.link} className={`home-program-cta ${prog.cta === 'ENROLL NOW' ? 'home-program-cta-enroll' : ''}`}>
                  {prog.cta} &gt;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===== HAPPY PARENTS ===== */}
      <section className="testimonials-section">
        <div className="testimonials-cloud-top">
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 L0,50 Q60,80 120,45 Q180,10 240,52 Q300,94 360,48 Q420,2 480,50 Q540,98 600,50 Q660,2 720,50 Q780,98 840,50 Q900,2 960,52 Q1020,98 1080,50 Q1140,5 1200,50 Q1260,95 1320,48 Q1380,2 1440,50 L1440,0 Z" fill="#ffffff" />
          </svg>
        </div>
        <div className="testimonials-body">
          <h2 className="section-title-white">HAPPY PARENTS!</h2>
          <div className="testimonials-screen-wrap">
            <img src={projector} className="testimonials-projector" alt="" />
            <div className="testimonials-video">
              <iframe
                src="https://www.youtube.com/embed/S75Zh55Srd4"
                title="Happy Parents Testimonials"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          
          <div className="testimonials-scrolls">
            <div className="testimonial-paper">
              <img src={pic4} alt="Avatar" className="testi-avatar" />
              <p>"High Sky CDC has been a blessing. The therapists are amazing and my child has made incredible progress!"</p>
              <div className="testi-stars">★★★★★</div>
            </div>
            <div className="testimonial-paper">
              <img src={pic5} alt="Avatar" className="testi-avatar" />
              <p>"We couldn't ask for a better environment. Highly professional and deeply caring staff."</p>
              <div className="testi-stars">★★★★★</div>
            </div>
            <div className="testimonial-paper">
              <img src={pic6} alt="Avatar" className="testi-avatar" />
              <p>"A wonderful experience from start to finish. Our family feels supported every single day here."</p>
              <div className="testi-stars">★★★★★</div>
            </div>
          </div>
          <Link to="/consultation" className="hero-video-cta testimonials-cta">BOOK A CONSULTATION TODAY &gt;</Link>
        </div>
        
        {/* The bottom cloud before the footer */}
          {/* <div className="testimonials-cloud-bottom">
            <svg viewBox="0 0 1440 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,90 L0,44 Q60,10 120,44 Q180,78 240,35 Q300,-8 360,40 Q420,84 480,36 Q540,-12 600,40 Q660,90 720,40 Q780,-10 840,40 Q900,88 960,38 Q1020,-10 1080,42 Q1140,90 1200,42 Q1260,-6 1320,42 Q1380,88 1440,44 L1440,90 Z" fill="#ffb833" />
            </svg>
          </div> */}
      </section>

    </div>
  );
}
