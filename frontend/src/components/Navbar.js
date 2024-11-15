import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo_title.png';
import '../assets/css/Navbar.css';

function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".navbar");
      if (header) {
        const isScrolled = window.scrollY > 0;
        header.style.backgroundColor = isScrolled ? "rgba(50, 50, 50, 0.5)" : "transparent";
        header.style.backdropFilter = isScrolled ? "saturate(180%) blur(10px)" : "none";
        header.style.WebkitBackdropFilter = isScrolled ? "blur(10px)" : "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="logo-container">
        <Link to="/dashboard">
          <img src={Logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="menu">
        <ul>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
