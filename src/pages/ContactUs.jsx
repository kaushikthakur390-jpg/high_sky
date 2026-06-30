import { useEffect } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './ContactUs.css';
import contactMascot from '../assets/pages/home/bird.png';
import callIcon from '../assets/pages/home/icons/call icon.png';
import emailIcon from '../assets/pages/home/icons/mailicon.png';
import whatsappIcon from '../assets/pages/icon/whatsapp.svg';
import hoursIcon from '../assets/pages/home/icons/working hours.png';

export default function ContactUs() {
  useEffect(() => {
    const branchCards = document.querySelectorAll('.branch-detail');
    if (!branchCards.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    branchCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.title = "Contact High Sky CDC | Child Development Center in Manikonda & Kondapur";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Have questions about your child's development? Contact High Sky CDC for guidance on speech therapy, occupational therapy, physiotherapy, child psychology, and early intervention services. Visit our centres in Kondapur and Manikonda, Hyderabad, or book a consultation with our team today.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Have questions about your child's development? Contact High Sky CDC for guidance on speech therapy, occupational therapy, physiotherapy, child psychology, and early intervention services. Visit our centres in Kondapur and Manikonda, Hyderabad, or book a consultation with our team today.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="contact-page">
      {/* Purple Hero */}
      <div className="contact-hero">
        {/* Decorative circles */}
        {/* <div className="contact-deco-dot yellow"></div>
        <div className="contact-deco-dot gray"></div>
        <div className="contact-deco-circle right"></div> */}

        <div className="contact-hero-inner">
          <div className="contact-hero-left">
            <h1>Let's Connect</h1>

            <p className="contact-subtitle-heading">
              We'd love to hear from you!
            </p>

            <p className="contact-subtitle">
              Whether you're looking to book a consultation, learn more about our programs,
              or discuss your child's developmental needs, our team is here to guide you.
            </p>

            <div className="contact-bubble">
              Reach out to us, and we'll help you find the right support for your child.
            </div>
          </div>
          <div className="contact-hero-right">
            <img
              src={contactMascot}
              alt=""
              aria-hidden="true"
              className="contact-mascot"
            />
          </div>
        </div>

      </div>

      {/* Quick Contact Cards */}
      <div className="quick-contact-cards">
        <a href="tel:+919100814615" className="qc-card">
          <img src={callIcon} alt="Call Us" className="qc-icon" />
          <div className="qc-info">
            <span className="qc-label">Call Us</span>
            <span className="qc-value">+91 91008 14615</span>
          </div>
        </a>
        <a href="mailto:enquiry.hscdc@gmail.com" className="qc-card">
          <img src={emailIcon} alt="Email Us" className="qc-icon" />
          <div className="qc-info">
            <span className="qc-label">Email Us</span>
            <span className="qc-value">enquiry.hscdc@gmail.com</span>
          </div>
        </a>
        <a href="https://wa.me/919100814615" className="qc-card" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="WhatsApp Us" className="qc-icon qc-icon-wa" />
          <div className="qc-info">
            <span className="qc-label">WhatsApp Us</span>
            <span className="qc-value">+91 91008 14615</span>
          </div>
        </a>
        <div className="qc-card">
          <img src={hoursIcon} alt="Working Hours" className="qc-icon" />
          <div className="qc-info">
            <span className="qc-label">Working Hours</span>
            <span className="qc-value">Mon - Sat: 9AM - 8PM</span>
          </div>
        </div>
      </div>

      {/* Centres Intro */}
      <div className="centres-intro">
        <h2 className="centres-heading">Visit Our Centres in Hyderabad</h2>
        <p className="centres-subtext">
          With centres in Manikonda and Kondapur, High Sky CDC provides accessible child
          development, therapy, and early intervention services to families across Hyderabad.
        </p>
      </div>

      {/* Branch Cards */}
      <div className="contact-branches">
        <div className="branch-detail">
          <div className="branch-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.6248744836267!2d78.3664!3d17.3940!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb95154ffa2733%3A0xb620054c49d9d633!2sHigh%20Sky%20Child%20Development%20Centre!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Branch 1 Map"
            ></iframe>
          </div>
          <div className="branch-info">
            <div className="branch-label">Branch 1:</div>
            <h3>MANIKONDA BRANCH</h3>
            <div className="branch-address">
              <FaMapMarkerAlt className="branch-icon" />
              <p>Sri Laxmi Nagar Colony, 64/P – 2nd floor, Near Lancohills circle, Manikonda, Hyderabad, Telangana 500089</p>
            </div>
          </div>
        </div>

        <div className="branch-detail reverse">
          <div className="branch-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.914207455965!2d78.34711247414306!3d17.463819900600793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9347a29ec299%3A0x7b3cb191617d18f2!2sHigh%20Sky%20Child%20development%20centre!5e0!3m2!1sen!2sin!4v1782687517410!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Branch 2 Map"
            ></iframe>
          </div>
          <div className="branch-info">
            <div className="branch-label">Branch 2:</div>
            <h3>KONDAPUR BRANCH</h3>
            <div className="branch-address">
              <FaMapMarkerAlt className="branch-icon" />
              <p>5A, 5th floor, Mansa Residency, Botanical Garden Rd, beside Aparna Heights 2, Laxmi Nagar, Hyderabad, Kondapur, Telangana 500084</p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="contact-cta">
        <div className="cta-inner">
          <div className="cta-text">
            <h2 className="cta-heading">Ready to Take the First Step?</h2>
            <p className="cta-subtext">
              Schedule a consultation with our team and discover the right support for your
              child's unique developmental journey.
            </p>
          </div>
          <a href="/consultation" className="cta-btn">Book a Consultation Today →</a>
        </div>
      </div>

    </div>
  );
}
