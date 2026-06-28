import { Link, useLocation } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaArrowUp } from 'react-icons/fa';
import leftLeaf from '../assets/pages/home/Group.svg';
import rightLeaf from '../assets/pages/home/Group 51.svg';
import whatsappIcon from '../assets/pages/icon/whatsapp.svg';
import YouTubeIcon from '../assets/pages/icon/youtube.PNG';
import './Footer.css';

export default function Footer() {
  const location = useLocation();
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const routeClass = location.pathname === '/about-us'
    ? 'footer-route-about-us'
    : location.pathname === '/our-programs'
      ? 'footer-route-our-programs'
      : location.pathname === '/parents-hub'
        ? 'footer-route-parents-hub'
        : location.pathname === '/consultation'
          ? 'footer-route-consultation'
          : location.pathname === '/contact-us'
            ? 'footer-route-contact-us'
            : 'footer-route-default';

  return (
    <footer className={`footer ${routeClass}`}>
      <div className="footer-wave-top">
        <svg viewBox="0 0 1440 160" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,92 C95,22 190,22 285,84 C380,146 475,146 570,84 C665,22 760,22 855,84 C950,146 1045,146 1140,84 C1235,22 1330,22 1440,84 L1440,160 L0,160 Z" fill="#f7b500" />
        </svg>
      </div>

      <div className="footer-body">
        <button className="scroll-to-top" onClick={scrollTop} aria-label="Scroll to top">
          <FaArrowUp />
        </button>

        <div className="footer-columns">
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/our-programs">Our Programs</Link></li>
              {/* <li><Link to="/uddeshya">Uddeshya</Link></li> */}
              <li><Link to="/consultation">Book A Consultation</Link></li>
            </ul>

            <a
              href="https://www.google.co.in/local/place/fid/0x3bcb95154ffa2733:0xb620054c49d9d633/photosphere?iu=https://lh3.googleusercontent.com/gps-cs-s/AHVAwequ90JkYItGMcpBk2Z4_leQtkYhW2juMb1tVjj3ioDb_0oBCroWuN9exXGCcOeL_ybfPCIsNma11truCVSqTyZQP6YLlM9NwoQhNWF4bQHZgOEolciAxyTf1LzkxLFo1Q57nI03LA%3Dw160-h106-k-no-pi-20-ya100.770004-ro0-fo100&ik=CAoSF0NJSE0wb2dLRUlDQWdJQ216b1czaEFF"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tour"
            >
              TAKE A 360° TOUR OF<br />OUR BRANCH
            </a>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <FaPhone style={{ transform: "scaleX(-1)" }} className="footer-icon" />
                <span>
                  <a href="tel:+919100814615">+91 9100814615</a> / <a href="tel:+916309275708">+91 6309275708</a>
                </span>
              </div>
              <div className="footer-contact-item">
                <FaEnvelope className="footer-icon" />
                <a href="mailto:enquiry.hscdc@gmail.com">enquiry.hscdc@gmail.com</a>
              </div>
              <div className="footer-contact-item">
                <FaMapMarkerAlt className="footer-icon" />
                <div>
                  <strong>BRANCH 1:</strong><br />
                  Sri Laxmi Nagar Colony, 64/P - 2nd floor, Near Lancohills circle, Manikonda, Hyderabad, Telangana 500089
                </div>
              </div>
              <div className="footer-contact-item">
                <FaMapMarkerAlt className="footer-icon" />
                <div>
                  <strong>BRANCH 2:</strong><br />
                  5A, 5th floor, Mansa Residency, Botanical Garden Rd, beside Aparna Heights 2, Laxmi Nagar, Hyderabad, Kondapur, Telangana 500084
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-social-title">FOLLOW US ON SOCIAL MEDIA</p>
          <div className="footer-socials">
            <a href="https://www.facebook.com/PriyankaGupta.ot.Highsky/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://www.instagram.com/highskycdc?igsh=MTRwdnRncGRhMXJz" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.youtube.com/@priyankas-occupational_therapy" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
            <a href="https://www.linkedin.com/in/priyankaguptaot/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
          <p className="footer-copyright">© 2024 High Sky Child Development Centre. All rights reserved.</p>
        </div>

        <div className="footer-plant-left">
          <img src={leftLeaf} alt="" aria-hidden="true" />
        </div>
        <div className="footer-plant-right">
          <img src={rightLeaf} alt="" aria-hidden="true" />
        </div>
      </div>

      {/* YouTube float */}
      <a href="https://www.youtube.com/@priyankas-occupational_therapy" className="youtube-float" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
        <img src={YouTubeIcon} alt="YouTube" />
      </a>

      {/* WhatsApp float */}
      <a href="https://wa.me/919100814615" className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <img src={whatsappIcon} alt="WhatsApp" />
      </a>
    </footer>
  );
}
