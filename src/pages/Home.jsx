import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import HeroCarousel from "../components/HeroCarousel";
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
import treatedkids from '../assets/pages/home/Group 258.png';

// Program cards — full banner images (Group 262-270)
import prog262 from '../assets/pages/home/Group 262.png';
import prog263 from '../assets/pages/home/Group 263.png';
import prog264 from '../assets/pages/home/Group 264.png';
import prog265 from '../assets/pages/home/Group 265.png';
import prog266 from '../assets/pages/home/Group 266.png';
import prog267 from '../assets/pages/home/Group 267.png';
import prog268 from '../assets/pages/home/Group 268.png';
import prog270 from '../assets/pages/home/Group 270.png';
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
    text: 'We are dedicated to empowering young minds in a nurturing, engaging, and inclusive environment. Our mission is to foster every child’s growth by offering personalized learning experiences that promote their cognitive, social, and emotional development.'
  },
  {
    type: 'right',
    title: 'WHERE WE\'RE HEADED!',

    img: commitPic2,
    text: 'Our vision is to become the premier child development centre in Hyderabad, renowned for our innovative approach to early childhood education and our commitment to helping every child thrive. We strive to set the standard for excellence in developmental programs, supporting children with diverse needs and empowering families along the journey.'
  },
  {
    type: 'left',
    title: 'OUR PILLARS',
    img: commitPic3,
    text: 'We believe that every child is unique, and we are passionate about designing individualized programs that highlight their strengths, address their challenges, and ignite a lifelong love of learning. Our child-centric approach prioritizes holistic development, making us the trusted choice for parents seeking quality early education and intervention services in Hyderabad.'
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
  { image: prog264, link: '/our-programs', alt: 'Occupational Therapy' },
  { image: prog265, link: '/our-programs', alt: 'Physiotherapy & Motor Rehabilitation' },
  { image: prog266, link: '/our-programs', alt: 'Speech Language & Communication Therapy' },
  { image: prog267, link: '/our-programs', alt: 'Child Psychology (BMT, CBT, PBS)' },
  { image: prog268, link: '/our-programs', alt: 'School Readiness Program' },
  // Group 270 is a composite card: Social Integration (right) + Life Skills (left) combined
  { image: prog270, link: '/our-programs', alt: 'Social Integration Group & Life Skills Training', fullWidth: true },
  { image: prog263, link: '/our-programs', alt: 'Feeding and Swallowing Therapy' },
  { image: prog262, link: '/our-programs', alt: 'Home Based Parental Training Program' },
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
  }
];
export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);

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
            <h1 className="hero-welcome">WELCOME TO HIGH SKY CDC</h1>
            <p className="hero-subtitle">
              From Small steps to wide skies, supporting every child to rise
            </p>
            <Link to="/consultation" className="hero-cta">
              BOOK YOUR CONSULTATION TODAY &gt;
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
            <p>
              Welcome to High sky child developement centre, A place where every childs unique
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
          <img src={treatedkids} alt="achievements" className="achievements-banner" />
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
            <Link
              to={prog.link}
              className={`home-program-card home-program-${i + 1} ${prog.fullWidth
                ? 'home-program-full'
                : i % 2 === 0
                  ? 'home-program-left'
                  : 'home-program-right'
                }`}
              key={i}
            >
              <img src={prog.image} alt={prog.alt} className="home-program-bg" />
            </Link>
          ))}
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
          <h2 className="section-title-white">HAPPY PARENTS!</h2>

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

    </div>
  );
}
