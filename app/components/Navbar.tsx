"use client";

import { useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  useEffect(() => {
    const hamburger = document.querySelector(`.${styles.hamburger}`);
    const navLinks = document.querySelector(`.${styles.navlinks}`);

    hamburger?.addEventListener("click", () => {
      navLinks?.classList.toggle(styles.active);
    });
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbrand}>Decorator&apos;s Workroom</div>
      <ul className={styles.navlinks}>
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
