// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Uddeshya.css';

// // SVGs and Assets
// import whySvg from '../assets/pages/home/WHY UDDHESHYA _.svg';
// import howSvg from '../assets/pages/home/HOW DOES UDDESHYA WORKS _.svg';
// import heroBanner from '../assets/pages/home/UddeshyaBanner 1.png';
// import whyPic from '../assets/pages/home/pic1.png';
// import howPic from '../assets/pages/home/pic2.png';
// import team1 from '../assets/pages/home/photo_6337093944986421139_y 1.png';
// import team2 from '../assets/pages/home/photo_6337093944986421142_y 1.png';
// import team3 from '../assets/pages/home/muneer.png';
// import team4 from '../assets/pages/home/tahura_pic.png';

// const steps = [
//   { num: '01', title: 'Consultation & Screening', desc: 'Initial consultation to understand your child\'s unique needs and conduct comprehensive developmental screenings.' },
//   { num: '02', title: 'Tailored Plan & Goals', desc: 'Creating personalized development plans with specific, achievable goals for your child\'s growth and learning journey.' },
//   { num: '03', title: 'Individual & Group Therapy', desc: 'A mix of one-on-one therapy sessions and collaborative group activities to maximize learning and social development.' },
//   { num: '04', title: 'Life Skills Training', desc: 'Real-world life skills training to help children develop independence, self-care, and functional daily routines.' },
//   { num: '05', title: 'Ongoing Support & Meetings', desc: 'Regular counseling and parent-teacher meetings to ensure progress alignment across home and school environments.' },
// ];

// const teamMembers = [
//   { name: 'Dr. Priyanka Gupta', role: 'Founder & Developmental Pediatrician',  img: team1 },
//   { name: 'Meena Sharma',       role: 'Senior Occupational Therapist',          img: team2 },
//   { name: 'Rahul Verma',        role: 'Speech Language Pathologist',             img: team3 },
//   { name: 'Sunitha Reddy',      role: 'Special Educator',                        img: team4 },
// ];

// const slides = [
//   whyPic,
//   howPic,
// ];

// export default function Uddeshya() {
//   const [form, setForm] = useState({ childName: '', email: '', phone: '', age: '', parentName: '', city: '', message: '' });
//   const [slide, setSlide] = useState(0);

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
//   const handleSubmit = (e) => { e.preventDefault(); alert('Enrollment request submitted!'); };

//   const prevSlide = () => setSlide((s) => (s - 1 + slides.length) % slides.length);
//   const nextSlide = () => setSlide((s) => (s + 1) % slides.length);

//   return (
//     <div className="uddeshya-page">

//       {/* HERO - Full Banner Image */}
//       <section className="uddeshya-hero-banner">
//          <img src={heroBanner} alt="Uddeshya Hero Banner" className="full-width-banner" />
//       </section>

//       {/* WHY UDDESHYA */}
//       <section className="why-uddeshya">
//         <div className="ud-container">
//           <div className="why-content">
//             <div className="why-text">
//               <img src={whySvg} alt="Why Uddeshya" className="section-title-svg" />
//               <p>Uddeshya is an innovative school readiness program designed by the High Sky Child Development Centre. This program aims to equip young children with the necessary skills and knowledge to ensure a smooth transition into formal schooling.</p>
//               <p>Recognizing the importance of early childhood development, Uddeshya focuses on holistic growth, addressing cognitive, social, emotional, and physical aspects of a child's development.</p>
//             </div>
//             <div className="why-img">
//               <img
//                 src={whyPic}
//                 alt="Uddeshya Classroom"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* HOW DOES UDDESHYA WORK */}
//       <section className="how-works-section">
//         {/* Green leaf top */}
//         <div className="ud-green-wave-top">
//           <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M0,0 L0,50 Q60,80 120,48 Q180,16 240,55 Q300,90 360,50 Q420,10 480,52 Q540,88 600,48 Q660,10 720,52 Q780,88 840,50 Q900,12 960,52 Q1020,88 1080,48 Q1140,10 1200,50 Q1260,88 1320,50 Q1380,14 1440,50 L1440,0 Z" fill="#3d6e2a"/>
//           </svg>
//         </div>
//         <div className="how-works-body">
//           <div className="ud-container">
//             <div className="how-content">
//               <div className="how-img">
//                 <img
//                   src={howPic}
//                   alt="How Uddeshya Works"
//                 />
//               </div>
//               <div className="how-text">
//                 <img src={howSvg} alt="How Does Uddeshya Works" className="section-title-svg" />
//                 <p className="how-intro">The Uddeshya School Readiness Program is designed to unlock your child's full potential through a personalized and holistic approach.</p>
//                 <div className="steps-list">
//                   {steps.map((step, i) => (
//                     <div className="step-item" key={i}>
//                       <div className="step-num">{step.num}</div>
//                       <div className="step-content">
//                         <h4>{step.title}</h4>
//                         <p>{step.desc}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <Link to="/consultation" className="enroll-now-btn">ENROLL YOUR CHILD NOW</Link>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Green leaf bottom */}
//         <div className="ud-green-wave-bottom">
//           <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M0,80 L0,32 Q60,0 120,32 Q180,62 240,24 Q300,-8 360,28 Q420,62 480,24 Q540,-8 600,28 Q660,64 720,28 Q780,-8 840,28 Q900,64 960,24 Q1020,-8 1080,28 Q1140,64 1200,24 Q1260,-8 1320,28 Q1380,62 1440,32 L1440,80 Z" fill="#fff"/>
//           </svg>
//         </div>
//       </section>

//       {/* KNOW OUR TEAM */}
//       <section className="ud-team-section">
//         <div className="ud-container">
//           <h2 className="ud-section-title purple center">KNOW OUR TEAM</h2>

//           {/* Group photo carousel */}
//           <div className="ud-team-carousel">
//             <button className="carousel-btn prev" onClick={prevSlide}>&#10094;</button>
//             <div className="carousel-slide">
//               <img src={slides[slide]} alt={`Team slide ${slide + 1}`} />
//             </div>
//             <button className="carousel-btn next" onClick={nextSlide}>&#10095;</button>
//           </div>

//           <p className="ud-team-desc">
//             At High Sky Child Development Centre, our dedicated team is the heart of everything we do. Comprising experienced psychologists, educators, and support staff, each member brings their expertise and compassion to help children thrive.
//           </p>

//           <div className="ud-team-grid">
//             {teamMembers.map((m, i) => (
//               <div className="ud-team-card" key={i}>
//                 <img src={m.img} alt={m.name} />
//                 <h4>{m.name}</h4>
//                 <p>{m.role}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ENROLL FORM */}
//       <section className="enroll-section" id="enroll">
//         <div className="ud-container">
//           <h2 className="enroll-title">READY TO GROW?<br />ENROLL AT HIGH SKY NOW!</h2>
//           <form className="enroll-form" onSubmit={handleSubmit}>
//             <input name="childName" placeholder="Full Name of the Child" value={form.childName} onChange={handleChange} required />
//             <input name="parentName" placeholder="Parent Name" value={form.parentName} onChange={handleChange} required />
//             <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
//             <input name="phone" placeholder="Phone No." value={form.phone} onChange={handleChange} required />
//             <div className="form-row-2">
//               <input name="age" placeholder="Age of Child" value={form.age} onChange={handleChange} required />
//               <input name="city" placeholder="City" value={form.city} onChange={handleChange} />
//             </div>
//             <textarea name="message" placeholder="Subject / Message" rows="4" value={form.message} onChange={handleChange}></textarea>
//             <button type="submit" className="enroll-submit-btn">SUBMIT</button>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// }
