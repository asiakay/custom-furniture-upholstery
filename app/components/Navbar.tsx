"use client";

import { useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  useEffect(() => {
    const hamburger = document.querySelector(`.${styles.hamburger}`);
    const closeIcon = document.querySelector(`.${styles.closeIcon}`);
    const navLinks = document.querySelector(`.${styles.navlinks}`);

    const toggleMenu = () => {
      navLinks?.classList.toggle(styles.active);
    };

    hamburger?.addEventListener("click", toggleMenu);
    closeIcon?.addEventListener("click", toggleMenu);

    // Cleanup event listener on component unmount

    return () => {
      hamburger?.removeEventListener("click", toggleMenu);
      closeIcon?.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbrand}>Decorator&apos;s Workroom</div>
      <ul className={styles.navlinks}>
        <li className={styles.closeIcon}>&times;</li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#specialty">Specialty</a>
        </li>
        <li>
          <a href="#classes">Classes</a>
        </li>
      </ul>
      <div className={styles.hamburger}>&#9776;</div>
    </nav>
  );
};

export default Navbar;
