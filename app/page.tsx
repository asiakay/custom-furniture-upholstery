import Head from "next/head";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kathleen Gaskin - Decorator’s Workroom</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <HeroSection />
      <header className={styles.header}>
        <h1>Kathleen Gaskin - Decorator’s Workroom</h1>
      </header>

      <div className={styles.main}>
        <section>
          <h2>About Kathleen Gaskin</h2>
          <p>
            Kathleen Gaskin is the proprietor of Decorator’s Workroom in Jamaica
            Plain, which she founded in 1990. Growing up in Trinidad, her father
            was a joiner and carpenter, and her mother was a seamstress and
            chair caner. Kathleen is proud to follow in their footsteps,
            bringing her rich heritage and skills to her community.
          </p>
          <p>
            Kathleen has received numerous awards for her contributions to
            Jamaica Plain and the City of Boston, including the 2009 Local Hero
            Award from Vinfen, the 2010 Award for Outstanding Contributions to
            Boston’s Neighborhoods from Action for Boston Community Development,
            and the 2005 Community Leadership Award from Spontaneous
            Celebrations.
          </p>
          <p>Kathleen first taught at the Eliot School in 1991.</p>
        </section>
        <section>
          <h2>Specialty</h2>
          <p>Upholstery & Slipcovers</p>
        </section>
        <section>
          <h2>Upcoming Classes</h2>
          <ul className={styles.classes}>
            <li>
              <strong>Upholstery Immersion (Wednesday Evening)</strong>
              <br />
              Class Code: 1S24
              <br />
              Date: June 12-August 14, 2024
            </li>
            <li>
              <strong>Upholstery Intensive 1M24</strong>
              <br />
              Type: Summer Intensive (Adults)
              <br />
              Date: August 19-23, 2024
            </li>
            <li>
              <strong>Upholstery Intensive 2M24</strong>
              <br />
              Type: Summer Intensive (Adults)
              <br />
              Date: August 26-30, 2024
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
