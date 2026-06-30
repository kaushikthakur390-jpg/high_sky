import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import './OurPrograms.css';

// ── Service images ──────────────────────────────────────────
import imgOccupational from '../assets/pages/services/Paediatric Occupational Therapy.webp';
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

// ── Conditions icons (from Home.jsx) ──────────────────────────
import iconASD from '../assets/pages/home/icons/ASD - W.png';
import iconADHD from '../assets/pages/home/icons/ADHD - W.png';
import iconSpeechIcon from '../assets/pages/home/icons/SPEECH - W.png'; // renamed to avoid clash with imgSpeech
import iconDevDelay from '../assets/pages/home/icons/8.png';
import iconLearning from '../assets/pages/home/icons/Learning - w.png';
import iconSensory from '../assets/pages/home/icons/6._Sensory Processing Disorder - W.png';
import iconSocial from '../assets/pages/home/icons/7._Social Communication -w Difficulties.png';
import iconBehavior from '../assets/pages/home/icons/Bev - white.png';
import iconCerebral from '../assets/pages/home/icons/cerebral palsy white.png';
import iconDown from '../assets/pages/home/icons/dS -W.png';

// ── Other assets ────────────────────────────────────────────
import conditionCloud from '../assets/pages/home/condition-cloud.png';
import infographicImg from '../assets/pages/home/info2.png';

// --- DATA ---
const programsList = [
  {
    title: "Paediatric Occupational Therapy",
    desc: "Helping children develop independence in daily activities through personalized occupational therapy focused on sensory processing, motor coordination, attention, self-care skills, and overall child development.",
    img: imgOccupational
  },
  {
    title: "Paediatric Physiotherapy & Motor Rehabilitation",
    desc: "Supporting children's physical development through specialized physiotherapy and motor rehabilitation programs designed to improve strength, balance, posture, mobility, coordination, and functional movement skills.",
    img: imgPhysiotherapy
  },
  {
    title: "Paediatric Speech, Language & Communication Therapy",
    desc: "Helping children communicate with confidence by enhancing speech clarity, language development, social communication, and expressive abilities through evidence-based speech and language therapy.",
    img: imgSpeech
  },
  {
    title: "Child Psychology (BMT, CBT, PBS)",
    desc: "Providing child psychology services that support emotional well-being, behavioral development, self-regulation, and confidence through Behaviour Modification Therapy (BMT), Cognitive Behavioral Therapy (CBT), and Positive Behaviour Support (PBS).",
    img: imgPsychology
  },
  {
    title: "Neuro Developmental Learning & Academic Intervention",
    desc: "Providing targeted developmental and academic support for children experiencing learning difficulties, attention challenges, cognitive delays, and educational concerns through structured intervention programs.",
    img: imgNeuroDev
  },
  {
    title: "Social Integration Group",
    desc: "Helping children strengthen social skills, peer interaction, communication confidence, teamwork, and relationship-building abilities through guided group-based developmental activities.",
    img: imgSocialInteg
  },
  {
    title: "Life Skills Training",
    desc: "Teaching practical life skills that promote independence, self-care, decision-making, problem-solving, and successful participation at home, school, and within the community.",
    img: imgLifeSkills
  },
  {
    title: "Handwriting Without Tears Training",
    desc: "A structured handwriting intervention program focused on improving pencil control, letter formation, writing fluency, fine motor development, and overall writing confidence.",
    img: imgHandwriting
  },
  {
    title: "School Readiness Program",
    desc: "Preparing children for successful school transitions by developing foundational academic, communication, social, emotional, and self-management skills essential for classroom success.",
    img: imgSchoolReady
  },
  {
    title: "Home-Based Parental Training Program",
    desc: "Empowering parents with practical strategies, professional guidance, and developmental techniques to support their child's growth, learning, and developmental progress within the home environment.",
    img: imgHomeParental
  }
];

const therapeuticApproaches = [
  {
    title: "Oral Sensory Integration",
    desc: "Supports children who experience sensory challenges related to eating, oral awareness, speech readiness, and sensory regulation.",
    img: imgOralSensory
  },
  {
    title: "Oral Motor Integration",
    desc: "Develops the oral motor skills & coordination needed for speech, feeding, chewing, and swallowing.",
    img: imgOralMotor
  },
  {
    title: "Feeding and Swallowing Therapy",
    desc: "Helps children develop safe, comfortable, and effective feeding and swallowing skills while addressing feeding difficulties, food aversions, and oral-motor challenges.",
    img: imgFeeding
  },
  {
    title: "Reflex Integration",
    desc: "Addresses retained primitive reflexes that may impact movement, learning, coordination, attention, posture, and behavioural regulation.",
    img: imgReflex
  },
  {
    title: "Interoceptive Sensory Training",
    desc: "Builds body awareness and self-regulation by helping children better understand internal body signals.",
    img: imgInterceptive
  },
  {
    title: "Gravity Sensorimotor Training",
    desc: "Improves balance, coordination, posture, and movement planning.",
    img: imgGravity
  },
  {
    title: "Vestibulo-Visual Training",
    desc: "Strengthens visual tracking, coordination, balance, reading readiness, and spatial awareness skills.",
    img: imgVestibulo
  },
  {
    title: "Parent Coaching",
    desc: "Provides parents with practical strategies & tools to support their child's therapy goals at home.",
    img: imgParentCoaching
  }
];

const conditionsList = [
  { title: "Autism Spectrum Disorder (ASD)", desc: "Experiences differences in communication, social interaction, behavior, and sensory processing.", icon: iconASD },
  { title: "Attention Deficit Hyperactivity Disorder (ADHD)", desc: "May find it difficult to focus, stay organized, manage impulses, or sit still for long periods.", icon: iconADHD },
  { title: "Speech & Language Delay", desc: "Delays in the development of speech, language, and communication skills.", icon: iconSpeechIcon },
  { title: "Developmental Delay / Global Developmental Delay", desc: "Delayed achievement of developmental milestones across one or more areas of development.", icon: iconDevDelay },
  { title: "Learning Disabilities", desc: "Challenges with reading, writing, comprehension, memory, processing, or other academic skills.", icon: iconLearning },
  { title: "Sensory Processing Disorder", desc: "May be overly sensitive or under-responsive to sounds, touch, movement, textures, or other sensory experiences.", icon: iconSensory },
  { title: "Social Communication Difficulties", desc: "Challenges understanding social cues, building friendships, engaging in conversations, and social interaction.", icon: iconSocial },
  { title: "Behavioural Challenges in Children", desc: "Struggle with emotional regulation, attention, behavior management, and adapting to everyday situations.", icon: iconBehavior },
  { title: "Cerebral Palsy", desc: "A neurological condition affecting movement, balance, posture, coordination, and motor development.", icon: iconCerebral },
  { title: "Down Syndrome", desc: "A genetic condition that can impact learning, communication, physical development, and independence skills.", icon: iconDown },
];

const highlightsList = [
  "Individualized Therapy Plans",
  "Multidisciplinary Team Approach",
  "Evidence-Based Interventions",
  "Family-Centered Care",
  "Continuous Progress Monitoring",
  "Early Intervention Services",
  "Parent education and involvement",
  "Focus on Holistic child development"
];

const faqsList = [
  {
    q: "How do I know if my child needs occupational therapy, speech therapy, or physiotherapy?",
    a: "Our multidisciplinary team at High Sky conducts a comprehensive assessment to understand your child's developmental needs and recommend the most suitable therapy or combination of therapies."
  },
  {
    q: "At what age can my child start therapy?",
    a: "Early intervention can begin as soon as developmental concerns are identified. The earlier support is provided, the greater the opportunity to build foundational skills and promote positive developmental outcomes."
  },
  {
    q: "Do I need an assessment before starting therapy?",
    a: "Yes. An initial assessment helps us understand your child's strengths, challenges, and developmental goals, allowing us to create a personalized intervention plan."
  },
  {
    q: "How long will my child need therapy?",
    a: "Every child's journey is different. The duration of therapy depends on individual goals, progress, and developmental needs, with regular reviews to ensure continued effectiveness."
  },
  {
    q: "What happens during the first consultation?",
    a: "The first consultation involves discussing your concerns, understanding your child's developmental history, conducting relevant assessments if needed, and recommending the most appropriate support plan."
  },
  {
    q: "Does High Sky CDC provide early intervention services?",
    a: "Yes. We offer early intervention programs designed to support communication, learning, motor development, social skills, and overall child development during the crucial early years."
  },
  {
    q: "How does High Sky CDC support parents throughout the therapy journey?",
    a: "We believe parents play a vital role in a child's development. Along with therapy sessions, we provide guidance, progress updates, practical strategies, and ongoing support to help families reinforce learning and development at home."
  }
];

export default function OurPrograms() {
  const [faqOpen, setFaqOpen] = useState(null);
  const toggleFaq = (i) => setFaqOpen(faqOpen === i ? null : i);

  useEffect(() => {
    document.title = "Child Development Therapies & Programs in Hyderabad | High Sky CDC";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Discover personalized speech therapy, occupational therapy, physiotherapy, child psychology, and early intervention programs at High Sky CDC's Kondapur and Manikonda centers in Hyderabad. Supporting communication, learning, confidence, independence, and overall child development.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Discover personalized speech therapy, occupational therapy, physiotherapy, child psychology, and early intervention programs at High Sky CDC's Kondapur and Manikonda centers in Hyderabad. Supporting communication, learning, confidence, independence, and overall child development.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="programs-page">
      <section className="programs-hero">
        <div className="deco-circle deco-c1"></div>
        <div className="deco-circle deco-c2"></div>
        <div className="deco-circle deco-c3"></div>

        <div className="programs-hero-content">
          <h1 className="programs-main-title">
            Child Development Therapies & Programs <br></br> in
            Hyderabad
          </h1>
          <p className="programs-subtitle">
            From first words and friendships to greater confidence and independence, High Sky helps children build the skills they need to thrive through personalized programs that support meaningful progress at every stage of their developmental journey.
          </p>
        </div>

        {/* SECTION 1 - PROGRAMS */}
        <section className="programs-section">

          <div className="program-cards-grid">
            {programsList.map((service, index) => (
              <div className="program-card" key={index}>
                <div className="program-card-image">
                  <img src={service.img} alt={service.title} />
                </div>
                <div className="program-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2 - APPROACHES */}
        <section className="programs-section">
          <h2 className="section-title">The Approaches Behind Our Therapy Programs</h2>
          <p className="section-subtitle-text">
            Every child learns and develops differently. Alongside our therapy programs, we use specialized intervention approaches that help address sensory, feeding, motor, communication, learning, and self-regulation challenges while supporting overall child development.
          </p>
          <div className="program-cards-grid">
            {therapeuticApproaches.map((item, index) => (
              <div className="program-card" key={index}>
                <div className="program-card-image">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="program-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* WAVE DIVIDER: Approaches to Conditions */}
      <div className="prog-approaches-to-conditions-wave">
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 L0,50 Q60,80 120,45 Q180,10 240,52 Q300,94 360,48 Q420,2 480,50 Q540,98 600,50 Q660,2 720,50 Q780,98 840,50 Q900,2 960,52 Q1020,98 1080,50 Q1140,5 1200,50 Q1260,95 1320,48 Q1380,2 1440,50 L1440,0 Z"
            fill="#A02C7D"
          />
        </svg>
      </div>

      {/* SECTION 3 - CONDITIONS WE WORK WITH */}
      <section className="prog-conditions-section">
        <div className="prog-conditions-inner">
          <h2 className="prog-conditions-title">Conditions We Work With</h2>
          <p className="prog-conditions-subtitle">
            Explore some of the developmental, communication, learning, sensory, and behavioral conditions commonly seen at High Sky CDC.
          </p>
          <div className="prog-conditions-grid">
            {conditionsList.map((c, i) => (
              <div className="prog-condition-card" key={i}>
                <div className="prog-condition-icon">
                  <img src={c.icon} alt={c.title} />
                </div>
                <div className="prog-condition-content">
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER */}
      <div className="prog-conditions-wave">
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 L0,50 Q60,80 120,45 Q180,10 240,52 Q300,94 360,48 Q420,2 480,50 Q540,98 600,50 Q660,2 720,50 Q780,98 840,50 Q900,2 960,52 Q1020,98 1080,50 Q1140,5 1200,50 Q1260,95 1320,48 Q1380,2 1440,50 L1440,0 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* SECTION 4 - WHY HIGH SKY CDC */}
      <section className="why-us-section">
        <div className="why-us-inner">
          <h2 className="why-us-title">Why Families Choose High Sky Child Development Center</h2>
          <div className="why-us-grid">
            {highlightsList.map((highlight, index) => (
              <div className="why-us-card" key={index}>
                <FaCheckCircle className="why-us-icon" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* WAVE DIVIDER: Why Us to FAQs */}
      <div className="prog-why-us-to-faq-wave">
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 L0,50 Q60,80 120,45 Q180,10 240,52 Q300,94 360,48 Q420,2 480,50 Q540,98 600,50 Q660,2 720,50 Q780,98 840,50 Q900,2 960,52 Q1020,98 1080,50 Q1140,5 1200,50 Q1260,95 1320,48 Q1380,2 1440,50 L1440,0 Z"
            fill="#A02C7D"
          />
        </svg>
      </div>

      {/* SECTION 6 - FAQs */}
      <section className="prog-faq-section">
        <div className="prog-faq-inner">
          <h2 className="prog-faq-title">FREQUENTLY ASKED QUESTIONS</h2>
          <div className="prog-faq-list">
            {faqsList.map((faq, i) => (
              <div className={`prog-faq-item${faqOpen === i ? ' prog-faq-item--open' : ''}`} key={i}>
                <button
                  className="prog-faq-question"
                  onClick={() => toggleFaq(i)}
                  aria-expanded={faqOpen === i}
                >
                  <h3 className="prog-faq-question-text">{faq.q}</h3>
                  <span className="prog-faq-chevron">{faqOpen === i ? '▲' : '▼'}</span>
                </button>
                <div className="prog-faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER: FAQs to CTA */}
      <div className="prog-faq-to-cta-wave">
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 L0,50 Q60,80 120,45 Q180,10 240,52 Q300,94 360,48 Q420,2 480,50 Q540,98 600,50 Q660,2 720,50 Q780,98 840,50 Q900,2 960,52 Q1020,98 1080,50 Q1140,5 1200,50 Q1260,95 1320,48 Q1380,2 1440,50 L1440,0 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* SECTION 7 - ENROLLMENT CTA */}
      <section className="prog-final-cta-section">
        <div className="prog-final-cta-inner">
          <div className="prog-final-cta-text-content">
            <h2 className="prog-final-cta-heading">Take the First Step Toward Your Child's Growth</h2>
            <p className="prog-final-cta-subtext">
              Every child deserves the opportunity to learn, grow, and reach their full potential. Whether you're exploring therapy options or looking for guidance, our team is here to help you find the right path forward.
            </p>
          </div>
          <Link to="/consultation" className="prog-final-cta-btn">Book a Consultation Today</Link>
        </div>
      </section>
    </div>
  );
}