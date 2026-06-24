import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
import HeroCarousel from "../components/HeroCarousel";
import StatsSection from "../components/StatsSection";
// Shared Assets
import birdBlue from '../assets/shared/mascots/blue-bird.png';
import birdRed from "../assets/pages/home/red_bird.png"; // Assuming it's red_bird.png
import projector from '../assets/shared/mascots/projector.png';
import screen from '../assets/shared/mascots/screen.png';
import cloudDivider from '../assets/pages/home/Frame 19.png';
import frameDivider from '../assets/pages/home/sectiondiff.png';
import sectionDividerThree from '../assets/pages/home/SECTION 3.png';
import commitmentFrame1 from '../assets/pages/home/homeframe1.png';
import commitmentFrame2 from '../assets/pages/home/homeframe2.png';
import commitmentFrame3 from '../assets/pages/home/Frame 50.png';
import infographicImg from '../assets/pages/home/info2.png';


// Program cards — full banner images (Group 262-270)
import prog262 from '../assets/pages/home/Group 262.png';
import prog263 from '../assets/pages/home/Group 263.png';
import prog264 from '../assets/pages/home/Group 264.png';
import prog265 from '../assets/pages/home/Group 265.png';
import prog266 from '../assets/pages/home/Group 266.png';
import prog267 from '../assets/pages/home/Group 267.png';
import prog268 from '../assets/pages/home/Group 268.png';
import prog269 from '../assets/pages/home/Group 269.png';
import prog271 from '../assets/pages/home/Group 271.png';
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

// Conditions icons
import iconASD from '../assets/pages/home/icons/ASD - W.png';
import iconADHD from '../assets/pages/home/icons/ADHD - W.png';
import iconSpeech from '../assets/pages/home/icons/SPEECH - W.png';
import iconDevDelay from '../assets/pages/home/icons/8.png';
import iconLearning from '../assets/pages/home/icons/Learning - w.png';
import iconSensory from '../assets/pages/home/icons/6._Sensory Processing Disorder - W.png';
import iconSocial from '../assets/pages/home/icons/7._Social Communication -w Difficulties.png';
import iconBehavior from '../assets/pages/home/icons/Bev - white.png';
import iconCerebral from '../assets/pages/home/icons/cerebral palsy white.png';
import iconDown from '../assets/pages/home/icons/dS -W.png';
import iconASDp from '../assets/pages/home/icons/ASD - P.png';
import iconADHDp from '../assets/pages/home/icons/ADHD - P.png';
import iconSpeechp from '../assets/pages/home/icons/SPEECH - P.png';
import iconDevDelayp from '../assets/pages/home/icons/8.png';
import iconLearningp from '../assets/pages/home/icons/Learning - p.png';
import iconSensoryp from '../assets/pages/home/icons/6._Sensory Processing Disorder - P.png';
import iconSocialp from '../assets/pages/home/icons/7._Social Communication Difficulties- p.png';
import iconbehaviorp from '../assets/pages/home/icons/Bev - purple.png';
import iconCerebralp from '../assets/pages/home/icons/cerebral palsy purple.png';
import iconDownp from '../assets/pages/home/icons/DS- P.png';
import conditionCloud from '../assets/pages/home/condition-cloud.png';

const commitmentBlocks = [
  {
    type: 'left',
    title: 'Our Mission',
    img: commitPic1,
    text: 'We are committed to helping children grow, learn, and thrive through personalized support, evidence-based practices, and an inclusive environment that nurtures cognitive, social, emotional, and developmental growth.'
  },
  {
    type: 'right',
    title: 'Where We\'re Headed',
    img: commitPic2,
    text: <>Our vision is to create a future where every child has access to the support, opportunities, and guidance they need to reach their full potential and lead a confident, independent life.<br></br>We strive to be a trusted child development center in Hyderabad, empowering children with diverse needs and supporting families at every stage of their journey.</>
  },
  {
    type: 'left',
    title: 'Our Core Values',
    img: commitPic3,
    text: <>Our child-centric approach prioritizes holistic development, supporting children through meaningful learning experiences that encourage growth, independence, and lifelong success.<br></br> This is why High Sky is a preferred child development center in Hyderabad for families seeking quality early intervention and developmental care, helping their children grow with confidence and clarity.</>
  }
];

const uniqueFeatures = [
  { img: uni1, title: 'MULTIDISCIPLINARY APPROACH', desc: 'Our team of occupational therapists, speech pathologists, physiotherapists, and special educators works together for every child. This child development center follows a collaborative approach to create practical, personalized therapy goals tailored to each child\'s needs.' },
  { img: uni2, title: 'EVIDENCE-BASED PRACTICES', desc: 'We use proven, research-backed methods in child development and early intervention services to guide each session with purpose. Progress is regularly reviewed to ensure therapy remains effective, measurable, and outcome-focused for children and families.' },
  { img: uni3, title: 'NEURODIVERSITY ACCEPTANCE', desc: 'We value every child\'s strengths and create an inclusive environment that respects neurodiversity. By building confidence, self-awareness, and a strong sense of belonging, we help children grow into their authentic selves with pride.' },
  {
    img: uni4, title: <>
      HOLISTIC
      <br />
      DEVELOPMENT
    </>, desc: 'Our approach goes beyond traditional therapy by addressing emotional, social, cognitive, and physical growth together. This whole-child approach helps children apply skills across school, home, and everyday life.'
  },
  { img: uni5, title: 'CAREGIVER-CHILD PARTNERSHIPS', desc: 'Parents and caregivers are active partners in every milestone of their child\'s journey. Through guidance and home strategies, we help families confidently support their child\'s progress outside the therapy room.' },
  {
    img: uni6, title: <>HIGH-TECH <br /> EQUIPMENT </>, desc: 'Our centre uses advanced therapeutic tools, sensory resources, and child-friendly learning setups designed for effective child development therapy. Sessions are safe, engaging, and tailored to each child\'s needs.'
  },
];

const programs = [
  {
    image: prog264,
    link: '/our-programs',
    alt: 'Paediatric Occupational Therapy',
    title: 'Paediatric Occupational Therapy',
    desc: 'Boost your child\'s independence through structured occupational therapy designed to improve daily living skills, motor coordination, and functional abilities.',
    mascotSide: 'left',
  },
  {
    image: prog265,
    link: '/our-programs',
    alt: 'Physiotherapy & Motor Rehabilitation',
    title: 'Physiotherapy & Motor Rehabilitation',
    desc: 'Improve strength, balance, posture, and mobility through personalized physiotherapy and motor rehabilitation programs for children.',
    mascotSide: 'right',
  },
  {
    image: prog266,
    link: '/our-programs',
    alt: 'Speech, Language & Communication Therapy',
    title: 'Speech, Language & Communication Therapy',
    desc: 'Help children express themselves clearly and confidently through expert speech and language therapy focused on communication development.',
    mascotSide: 'left',
  },
  {
    image: prog267,
    link: '/our-programs',
    alt: 'Child Psychology (BMT, CBT, PBS)',
    title: 'Child Psychology (BMT, CBT, PBS)',
    desc: 'Support emotional regulation, behaviour, and mental well-being through structured child psychology interventions.',
    mascotSide: 'right',
  },
  {
    image: prog268,
    link: '/our-programs',
    alt: 'School Readiness Program',
    title: 'School Readiness Program',
    desc: 'Build essential cognitive, social, and learning skills needed for smooth transition into school and classroom environments.',
    mascotSide: 'left',
  },
  {
    image: prog269,
    link: '/our-programs',
    alt: 'Social Integration Group',
    title: 'Social Integration Group',
    desc: 'Develop your child\'s social interaction skills, peer engagement, and confidence through structured group-based learning activities.',
    mascotSide: 'right',
  },
  {
    image: prog271,
    link: '/our-programs',
    alt: 'Life Skills Training',
    title: 'Life Skills Training',
    desc: 'Equip children with essential everyday skills that help them thrive at home, school, and beyond.',
    mascotSide: 'left',
  },
  {
    image: prog263,
    link: '/our-programs',
    alt: 'Feeding & Swallowing Therapy',
    title: 'Feeding & Swallowing Therapy',
    desc: 'Support safe and effective eating skills through therapy focused on feeding, swallowing, and oral-motor development.',
    mascotSide: 'right',
  },
  {
    image: prog262,
    link: '/our-programs',
    alt: 'Parent Training & Home Support Program',
    title: 'Parent Training & Home Support Program',
    desc: 'Empower parents with practical strategies and guidance to support their child\'s development at home.',
    mascotSide: 'left',
  },
];

const commitmentFrames = [commitmentFrame1, commitmentFrame2, commitmentFrame3];
const reviews = [
  {
    name: "Swati Ganti",
    review:
      "My son diagnosed with ASD, ADHD ,he also has sensory issues which brought feeding issues. Priyanka ji, taking my child as a challenge helped him feed independently. They do all the types of assessments needed to understand the child … ",
    link: "https://maps.app.goo.gl/8hQC5on1wA1G8bE87"
  },

  {
    name: "Syamala reddy",
    review:
      "We have joined our Baby at 2.11 years now she is 3.3 months there is a drastic changes happened with Highsky therapy center, what ever we have expected they have fulfilled and very cooperative when ever we request for some changes we can immediately feel that happens. The team Dr. Priyanka’s is highly qualified & talented to deal kids appropriately 🎉Niw my kid is enjoying at school with lot is kids and more🎉Thanks & Best Wishes 🫶🏻",
    link: "https://maps.app.goo.gl/WSQDPZ4pxqM7TnKA9"
  },

  {
    name: "Kavita S",
    review:
      "My son was diagnosed with mild autism and we started his therapy when he was around 2.3 yrs old at Priyanka's Highsky center from mid December 2022. At first he would only attend OT sessions. He had very poor eye contact, name call response, few sensory issues, no social play, his fine motor skills too needed improvement. With regular OT sessions and home therapy exercise shared by her team we could see good improvement in our son. His eye contact improved, name call response so much better now, plays with other kids and is comfortable to have kids around too. He is 2.8 yrs now. Two months back we started speech therapy and Behavior therapy as well. He has now started identifying as well as pointing and speaking animals, birds, vehicles, few other tasks of daily living, follows commands too. He also says Mamma now. We are very much happy with our sons progress till date.",
    link: "https://maps.app.goo.gl/UL2TPPQRLS5ASCsv6"
  },

  {
    name: "Nirvign Karthi",
    review:
      "My Son has been attending Occupational and behavioral therapy at Priyanka's mam high sky center for the past 4 months and the progress we have seen is incredible…",
    link: "https://share.google/lmDvKMmZ9CsPZlh4c"
  },

  {
    name: "rajasekhar reddy",
    review:
      "It’s been 6months since we joined our kid here. All the therapists are very well certified. As per my personal experience the way they handle each and every kid is so good when compared to my previous Centres. Thanks a lot to Priyanka Mam …",
    link: "https://share.google/dp9Eejs2t0WwNbzMS"
  },

  {
    name: "Ankita Verma",
    review:
      "After starting therapy sessions with Dr. Priyanka at HighSky Child Development Centre, we slowly began noticing positive changes in our child’s behaviour and communication. The care, patience, and guidance throughout the journey truly meant a lot to our family",
    link: "https://share.google/qplMLVFu9Tx2U6Yta"
  },

  {
    name: "Geet Verma",
    review:
      "My 5-year-old son has been attending this occupational and behavioral therapy at Priyanka ma’am’s High sky center for the past , six months and the progress we’ve seen has been incredible. The therapists are not only highly trained and …",
    link: "https://share.google/6JfiqpzwAxhPIuzhs"
  },
  {
    name: "Upasna Potlapalli",
    review:
      "It's a nice place. My children r changing after joining here. Therapists r really friendly and very helpful. My son got good marks this time. A very very big thank you to Priyanka Mam and to all the therapists there. My husband and myself r very happy.",
    link: "https://share.google/q4vjcGms6sdwV59Dc"
  },
  {
    name: "Richa Rijhwani",
    review:
      "The therapist are so experienced here !!! They take our kids like own the work with parents also !!! They even hold ptm’s so the parent should be aware about the kid level and how to work with kid and also suggest home protocol for kids !! And majorly they are transparent !!",
    link: "https://share.google/k1t5EIwp1kjEiMp2Z"
  },
  {
    name: "kalvath A",
    review:
      "She is one of the best occupation therapists. We saw good improvement in my son. The way she interacts with the kid is really good and my son always look forward to interact with her.She explains the problem to parents clearly and makes sure parents are not frightened.Highly recommended therapist.",
    link: "https://share.google/XCKX21HdVIKVAqeZC"
  },
  {
    name: "Braja Das",
    review:
      "One of the best Child Development center in Manikonda Area. My kid developed speaking within 3 months of time. We have seen a lots of improvements in our Kid in a very short span of time. Therapists are very caring. We have seen the great co-ordination and bonding between therapists.",
    link: "https://share.google/4cMFdn9f0iaK4OhQQ"
  },
  {
    name: "Akshita Garg",
    review:
      "Dr priyanka is passionate n such a wonderful therapist that I ever met online. I am in the US but her protocols and strategies are so different that really worked for my niece. She provides very personal kind of care which was amazing to see.",
    link: "https://share.google/AtyvbVHJhFZoms8Rd"
  }
];
const conditions = [
  { text: 'Autism Spectrum Disorder (ASD)', icon: iconASD, iconP: iconASDp },
  { text: 'Attention Deficit Hyperactivity Disorder (ADHD)', icon: iconADHD, iconP: iconADHDp },
  { text: 'Speech & Language Delay', icon: iconSpeech, iconP: iconSpeechp },
  { text: 'Developmental Delay / Global Developmental Delay', icon: iconDevDelay, iconP: iconDevDelayp },
  { text: 'Learning Disabilities', icon: iconLearning, iconP: iconLearningp },
  { text: 'Sensory Processing Disorder', icon: iconSensory, iconP: iconSensoryp },
  { text: 'Social Communication Difficulties', icon: iconSocial, iconP: iconSocialp },
  { text: 'Behavioural Challenges in Children', icon: iconBehavior, iconP: iconbehaviorp },
  { text: 'Cerebral Palsy (Developmental & Feeding Support)', icon: iconCerebral, iconP: iconCerebralp },
  { text: 'Down Syndrome (Developmental Support)', icon: iconDown, iconP: iconDownp },
];

const approachSteps = [
  { num: '01', label: 'Assessment', desc: "Understanding your child's strengths and challenges", color: '#F9D9B0', numColor: '#E8A44A', icon: '📋' },
  { num: '02', label: 'Goal Setting', desc: 'Defining clear, measurable developmental goals', color: '#C8E6C9', numColor: '#4CAF50', icon: '🎯' },
  { num: '03', label: 'Therapy Plan', desc: 'Designing personalized intervention strategies', color: '#BBDEFB', numColor: '#5B9BD5', icon: '🧩' },
  { num: '04', label: 'Parent Collaboration', desc: 'Working closely with families for consistency', color: '#D1C4E9', numColor: '#7E57C2', icon: '👨‍👩‍👧' },
  { num: '05', label: 'Progress Tracking', desc: 'Regular reviews and adjustments for improvement', color: '#F8BBD9', numColor: '#E91E8C', icon: '📈' },
];

const faqs = [
  {
    q: 'Why do parents trust High Sky Child Development Center?',
    a: 'Parents choose High Sky Child Development Center because we focus on understanding each child as an individual. Our multidisciplinary team of child development specialists provides evidence-based speech therapy, occupational therapy, physiotherapy, and child psychology support through personalized intervention plans designed to improve communication, learning, behavior, and overall developmental progress.',
  },
  {
    q: 'How do I know if my child needs developmental support?',
    a: 'If your child is experiencing delays or challenges in communication, learning, social interaction, behavior, emotional regulation, motor skills, feeding, or developmental milestones, a professional assessment can help determine the right support.',
  },
  {
    q: 'What age groups do you work with?',
    a: "We support children across different developmental stages, tailoring programs to each child's unique needs, abilities, and goals.",
  },
  {
    q: 'How long does therapy take?',
    a: "Therapy duration varies based on each child's needs and progress. Our team regularly reviews outcomes and updates intervention plans to ensure meaningful development.",
  },
  {
    q: "How does High Sky CDC track my child's progress?",
    a: 'We conduct regular progress reviews, monitor developmental goals, and work closely with families to ensure consistent improvement and effective intervention planning.',
  },
  {
    q: 'Are therapy plans personalized for each child?',
    a: "Yes. Every child receives a personalized intervention plan based on their strengths, challenges, developmental profile, and family goals.",
  },
  {
    q: 'What makes High Sky CDC different from other child development centers in Hyderabad?',
    a: "At High Sky CDC, we don't follow a one-size-fits-all approach. Our team of child development specialists collaborates across therapies to understand each child deeply and design personalized, practical interventions that support growth at home, school, and everyday life.",
  },
  {
    q: 'How do I get started?',
    a: 'Simply contact our team to schedule an initial consultation. We will guide you through the assessment process and recommend the most suitable support plan for your child.',
  },
];

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [faqOpen, setFaqOpen] = useState(null);
  const toggleFaq = (i) => setFaqOpen(faqOpen === i ? null : i);

  const reviewsPerPage = 3;

  const totalPages = Math.ceil(
    reviews.length / reviewsPerPage
  );

  const visibleReviews = reviews.slice(
    currentPage * reviewsPerPage,
    currentPage * reviewsPerPage + reviewsPerPage
  );

  const nextReviews = () => {
    setCurrentPage((prev) =>
      prev === totalPages - 1 ? 0 : prev + 1
    );
  };

  const prevReviews = () => {
    setCurrentPage((prev) =>
      prev === 0 ? totalPages - 1 : prev - 1
    );
  };
  return (
    <div className="home-page">
      {/* <div className="home-top-nav-cloud" aria-hidden="true" /> */}

      {/* ===== HERO ===== */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-welcome"> Helping children reach<br></br>their full potential</h1>
            <p className="hero-subtitle">
              From small steps to wide skies, supporting every special child to rise!
            </p>
            <p className="hero-seo-text">
              Expert Child Development Specialists Providing Speech Therapy, Occupational Therapy, Physiotherapy, Child Psychology and Early Intervention Services for Children in Hyderabad.
            </p>
            <Link to="/consultation" className="hero-cta">
              Take The First Step Today! &gt;
            </Link>
          </div>
        </div>

        <div className="hero-image-edge">
          <img src={heroPhoto} alt="Children in therapy session" className="hero-photo" />
        </div>

        <HeroCarousel />

      </section>

      {/* Floating Screen Graphic overlap (Moved outside to prevent absolute position overlap) */}
      <div className="hero-video-overlap">
        <div className="hero-video-wrap">
          <div className="hero-video-copy">
            <h2 className="intro-section-h2">Supporting Growth Through Personalized Care</h2>
            <p className="intro-section-p">
              Every child has unique strengths, abilities, and potential waiting to flourish.<br></br>
              At High Sky, we don't just recognize each child's uniqueness we celebrate it and empower them to reach their full potential.
            </p>
            <Link to="/about-us" className="hero-video-cta">KNOW MORE ABOUT HIGH SKY &gt;</Link>
          </div>

          <div className="hero-screen-area">
            <img src={projector} alt="Projector" className="hero-projector-img" />
            <div className="hero-screen-frame">
              <img src={screen} alt="Screen" className="hero-screen-img" />
              <div className="hero-video-inner">
                <iframe
                  src="https://www.youtube.com/embed/m_Maaj7-esE?si=hmk0y_UjISCGdFnC"
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
            {commitmentBlocks.map((block, i) => (
              <article className={`commitment-text-block commitment-block-${block.type}`} key={block.title}>
                {/* Mobile-only inline photo — hidden on desktop */}
                <div className="commitment-inline-photo" aria-hidden="true">
                  <img src={commitmentFrames[i]} alt="" />
                </div>
                <div className="commitment-block-content">
                  <h2 className="commitment-heading">{block.title}</h2>
                  <p className="commitment-desc">{block.text}</p>
                </div>
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
          <StatsSection />
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
          <h2 className="section-title-white">Why Parents Trust High Sky CDC</h2>

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
        <h2 className="home-programs-title">Child Development Therapies &amp; Programs</h2>
        <div className="home-programs-list">
          {programs.map((prog, i) => (
            <Link
              to={prog.link}
              className={`home-program-card home-program-${i + 1} ${i % 2 === 0 ? 'home-program-left' : 'home-program-right'
                }`}
              key={i}
            >
              {/* Background banner image (mascot + colored pill) */}
              <img src={prog.image} alt="" aria-hidden="true" className="home-program-bg" />

              {/* SEO-friendly text overlay */}
              <div className={`prog-text-overlay prog-text-${prog.mascotSide}`}>
                <h3 className="prog-card-title">{prog.title}</h3>
                <p className="prog-card-desc">{prog.desc}</p>
                <span className="prog-card-btn">LEARN MORE &gt;</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="programs-explore-cta-wrap">
          <Link to="/our-programs" className="programs-explore-cta">Explore All Programs &gt;</Link>
        </div>
      </section>
      {/* ===== CONDITIONS WE SUPPORT ===== */}
      <section className="conditions-section">
        <img src={conditionCloud} alt="" className="conditions-cloud-divider" aria-hidden="true" />
        <div className="conditions-inner">
          <h2 className="conditions-title">Conditions We Support</h2>
          <p className="conditions-subtitle">
            We provide child development and early intervention support for a wide range of neurodevelopmental and behavioral conditions.
          </p>
          <div className="conditions-grid">
            {conditions.map((c, i) => (
              <div className={`condition-card ${i % 2 === 0 ? 'left' : 'right'}`} key={i}>
                <div className="condition-dot">
                  <img src={c.icon} alt="" className="condition-icon-img condition-icon-white" />
                  <img src={c.iconP} alt="" className="condition-icon-img condition-icon-purple" />
                </div>
                <div className="condition-pill">{c.text}</div>
              </div>
            ))}
          </div>
          <div className="conditions-cta-block">
            <p className="conditions-cta-text">
              Not sure which condition applies?
            </p>
            <Link to="/consultation" className="conditions-cta-btn">
              Book an Assessment with Our Specialists &gt;
            </Link>
          </div>
        </div>
        {/* Wave at bottom of section */}
        <svg className="conditions-wave-svg" viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,30 C360,90 1080,0 1440,50 L1440,90 L0,90 Z" fill="#ffffff"/>
        </svg>
      </section>

      {/* ===== OUR CHILD-CENTERED APPROACH ===== */}
      <section className="approach-section">
        <div className="approach-polka-bg" aria-hidden="true" />
        <div className="approach-inner">
          <h2 className="approach-title">Our Child-Centered Approach</h2>
          <div className="approach-infographic-wrap">
            <img
              src={infographicImg}
              alt="Our Child-Centered Approach diagram"
              className="approach-infographic-img"
            />

            {/* Step 1 — orange pill */}
            <div className="approach-overlay approach-overlay-1">
              <h3 className="approach-overlay-title aot-dark">Assessment</h3>
              <p className="approach-overlay-desc aod-dark">Understanding your child's strengths and challenges</p>
            </div>

            {/* Step 2 — magenta pill */}
            <div className="approach-overlay approach-overlay-2">
              <h3 className="approach-overlay-title aot-light">Goal Setting</h3>
              <p className="approach-overlay-desc aod-light">Defining clear, measurable developmental goals</p>
            </div>

            {/* Step 3 — orange pill */}
            <div className="approach-overlay approach-overlay-3">
              <h3 className="approach-overlay-title aot-dark">Therapy Plan</h3>
              <p className="approach-overlay-desc aod-dark">Designing personalized intervention strategies</p>
            </div>

            {/* Step 4 — magenta pill */}
            <div className="approach-overlay approach-overlay-4">
              <h3 className="approach-overlay-title aot-light">Parent Collaboration</h3>
              <p className="approach-overlay-desc aod-light">Working closely with families for consistency</p>
            </div>

            {/* Step 5 — orange pill */}
            <div className="approach-overlay approach-overlay-5">
              <h3 className="approach-overlay-title aot-dark">Progress Tracking</h3>
              <p className="approach-overlay-desc aod-dark">Regular reviews and adjustments for improvement</p>
            </div>
          </div>
        </div>
      </section>


      {/* ===== HAPPY PARENTS ===== */}
      <section className="testimonials-section">
        <div className="testimonials-cloud-top">
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

        <div className="testimonials-body">
          <h2 className="section-title-white">Our Reviews Speak For Us!</h2>
          <h3 className="testimonials-subheading">What Parents Say About High Sky CDC</h3>

          <div className="testimonials-screen-wrap">
            {/* <img src={projector} className="testimonials-projector" alt="" /> */}
            <div className="testimonials-video">
              <iframe
                src="https://www.youtube.com/embed/S75Zh55Srd4"
                title="Happy Parents Testimonials"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="testimonials-slider-wrapper">

            <button
              className="testimonial-arrow left"
              onClick={prevReviews}
            >
              &#10094;
            </button>

            <div className="testimonials-scrolls">

              {visibleReviews.map((review, index) => (
                <a
                  key={index}
                  href={review.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="testimonial-paper"
                >
                  <div className="testi-avatar">
                    👤
                  </div>

                  <h4 className="testi-name">
                    {review.name}
                  </h4>

                  <p>"{review.review}"</p>

                  <div className="testi-stars">
                    ★★★★★
                  </div>

                  <div className="google-review-link">
                    Read on Google →
                  </div>
                </a>
              ))}

            </div>

            <button
              className="testimonial-arrow right"
              onClick={nextReviews}
            >
              &#10095;
            </button>

          </div>

          <Link
            to="/consultation"
            className="hero-video-cta testimonials-cta"
          >
            BOOK A CONSULTATION TODAY &gt;
          </Link>
        </div>

        {/* The bottom cloud before the footer */}
        {/*
  <div className="testimonials-cloud-bottom">
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,90 L0,44 Q60,10 120,44 Q180,78 240,35 Q300,-8 360,40 Q420,84 480,36 Q540,-12 600,40 Q660,90 720,40 Q780,-10 840,40 Q900,88 960,38 Q1020,-10 1080,42 Q1140,90 1200,42 Q1260,-6 1320,42 Q1380,88 1440,44 L1440,90 Z"
        fill="#ffb833"
      />
    </svg>
  </div>
  */}
      </section>


      {/* ===== MAP LOCATIONS ===== */}
      <section className="locations-section">
        <div className="locations-inner">
          <h2 className="locations-title">Serving Families Across Hyderabad for Over 6 Years</h2>
          <h3 className="locations-subtitle">Our Branches</h3>
          <div className="locations-grid">
            <div className="location-card">
              <div className="location-card-header">
                <span className="location-pin">📌</span>
                <div>
                  <h4 className="location-name">Kondapur Center, Hyderabad</h4>
                </div>
              </div>
              <div className="location-map">
                <iframe
                  title="High Sky CDC Kondapur"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.7890693428354!2d78.3566!3d17.4678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI4JzA0LjEiTiA3OMKwMjEnMjMuOCJF!5e0!3m2!1sen!2sin!4v1000000000000"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div className="location-card">
              <div className="location-card-header">
                <span className="location-pin">📌</span>
                <div>
                  <h4 className="location-name">Manikonda Center, Hyderabad</h4>
                </div>
              </div>
              <div className="location-map">
                <iframe
                  title="High Sky CDC Manikonda"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5!2d78.3886!3d17.4035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzEyLjYiTiA3OMKwMjMnMTkuMCJF!5e0!3m2!1sen!2sin!4v1000000000001"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQs ===== */}
      <section className="faq-section">
        <div className="faq-inner">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div className={`faq-item${faqOpen === i ? ' faq-item--open' : ''}`} key={i}>
                <button
                  className="faq-question"
                  onClick={() => toggleFaq(i)}
                  aria-expanded={faqOpen === i}
                >
                  <h3 className="faq-question-text">{faq.q}</h3>
                  <span className="faq-chevron">{faqOpen === i ? '▲' : '▼'}</span>
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                  {i === 7 && (
                    <Link to="/contact-us" className="faq-contact-link">Contact Us →</Link>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="faq-final-cta-wrap">
            <Link to="/consultation" className="faq-final-cta">BOOK A CONSULTATION TODAY &gt;</Link>
          </div>
        </div>
      </section>

    </div>

  );
}
