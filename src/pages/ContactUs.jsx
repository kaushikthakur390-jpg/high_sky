import { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './ContactUs.css';
import contactMascot from '../assets/pages/home/bird.png';

export default function ContactUs() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="contact-page">
      {/* Purple Hero */}
      <div className="contact-hero">
        {/* Decorative circles */}
        <div className="contact-deco-dot yellow"></div>
        <div className="contact-deco-dot gray"></div>
        <div className="contact-deco-circle right"></div>

        <div className="contact-hero-inner">
          <div className="contact-hero-left">
            <h1>CONTACT US</h1>
            <p className="contact-subtitle">We'd love to hear from you!</p>

            {/* Orange speech bubble card */}
            <div className="contact-bubble">
              Whether you have a question, feedback, or need assistance, our team is here to help!
            </div>
          </div>
          <div className="contact-hero-right">
            <img
              src={contactMascot}
              alt="Contact Mascot"
              className="contact-mascot"
            />
          </div>
        </div>

      </div>

      {/* Branch Cards */}
      <div className="contact-branches">
        <div className="branch-tabs">
          <button className={`branch-tab ${activeTab === 1 ? 'active' : ''}`} onClick={() => setActiveTab(1)}>Branch 1:</button>
          <button className={`branch-tab ${activeTab === 2 ? 'active' : ''}`} onClick={() => setActiveTab(2)}>Branch 2:</button>
        </div>

        {activeTab === 1 && (
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
        )}

        {activeTab === 2 && (
          <div className="branch-detail">
            <div className="branch-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.8!2d78.3664!3d17.4600!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93!2sKondapur!5e0!3m2!1sen!2sin!4v1700000000001!5m2!1sen!2sin"
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
        )}
      </div>

    </div>
  );
}
