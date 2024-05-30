"use client";

import { useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const toggleMenu = () => {
    const navLinks = document.querySelector(`.${styles.navlinks}`);
    navLinks?.classList.toggle(styles.active);
  };

  useEffect(() => {
    const hamburger = document.querySelector(`.${styles.hamburger}`);
    const closeIcon = document.querySelector(`.${styles.closeIcon}`);

    if (hamburger && closeIcon) {
      hamburger.addEventListener("click", toggleMenu);
      closeIcon.addEventListener("click", toggleMenu);
    }

    // Cleanup event listeners on component unmount
    return () => {
      if (hamburger && closeIcon) {
        hamburger.removeEventListener("click", toggleMenu);
        closeIcon.removeEventListener("click", toggleMenu);
      }
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbrand}>Decorator&apos;s Workroom</div>
      <ul className={styles.navlinks}>
        <li className={styles.closeIcon}>&times;</li>
        <li>
          <a href="#about" onClick={toggleMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#specialty" onClick={toggleMenu}>
            Specialty
          </a>
        </li>
        <li>
          <a href="#classes" onClick={toggleMenu}>
            Classes
          </a>
        </li>
      </ul>
      <div className={styles.hamburger}>&#9776;</div>
    </nav>
  );
};

export default Navbar;
