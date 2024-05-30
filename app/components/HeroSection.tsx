"use client";

import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.content}>
        <h2>Welcome to Decorator’s Workroom</h2>
        <p>
          Providing high-quality upholstery and slipcover services since 1990.
        </p>
        <a href="#services" className={styles.learnMoreBtn}>
          Learn More
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
