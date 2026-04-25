import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import cloudnav from '../assets/pages/home/navcloud.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const routeClass = location.pathname === '/about-us'
    ? 'route-about-us'
    : location.pathname === '/our-programs'
      ? 'route-our-programs'
    : location.pathname === '/parents-hub'
      ? 'route-parents-hub'
      : location.pathname === '/consultation'
        ? 'route-consultation'
        : location.pathname === '/contact-us'
          ? 'route-contact-us'
          : 'route-default';

  return (
    <nav className={`navbar ${routeClass}`}>
      <div className="nav-cloud" aria-hidden="true">
        <img src={cloudnav} alt="" />
      </div>

      <div className="navbar-inner">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img
            src="https://highskycdc.in/wp-content/uploads/2024/01/Logo.png"
            alt="High Sky CDC Logo"
            onError={(e) => { e.target.src = 'https://highskycdc.in/wp-content/uploads/elementor/thumbs/Logo-qvdpz0jvzq3k0brmkhw56yx0r0vlf83p2hm9kqxy0.png'; e.target.onerror = null; }}
          />
        </Link>

        {/* Hamburger */}
        <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>

        {/* Nav Links */}
        <ul className={`navbar-links ${menuOpen ? 'show' : ''}`}>
          <li><NavLink to="/" end onClick={() => setMenuOpen(false)} className={({isActive}) => isActive ? 'active' : ''}>HOME</NavLink></li>
          <li><NavLink to="/about-us" onClick={() => setMenuOpen(false)} className={({isActive}) => isActive ? 'active' : ''}>ABOUT US</NavLink></li>
          {/* <li><NavLink to="/uddeshya" onClick={() => setMenuOpen(false)} className={({isActive}) => isActive ? `active uddeshya-link` : 'uddeshya-link'}>UDDESHYA</NavLink></li> */}
          <li><NavLink to="/our-programs" onClick={() => setMenuOpen(false)} className={({isActive}) => isActive ? 'active' : ''}>OUR PROGRAMS</NavLink></li>
          <li><NavLink to="/parents-hub" onClick={() => setMenuOpen(false)} className={({isActive}) => isActive ? 'active' : ''}>PARENTS HUB</NavLink></li>
          <li><NavLink to="/parents-hub" onClick={() => setMenuOpen(false)} className={({isActive}) => ''}>BLOGS</NavLink></li>
          <li>
            <NavLink to="/consultation" onClick={() => setMenuOpen(false)} className="btn-nav-consult">
              BOOK A CONSULTATION
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact-us" onClick={() => setMenuOpen(false)} className="btn-nav-contact">
              CONTACT US
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
