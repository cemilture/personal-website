/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import styles from "./about.module.css";
import aboutImage1 from "./public/about1.jpg";
import aboutImage2 from "./public/about2.jpg";
import profilePhoto from "./public/profile-photo.jpg";

const about = () => {
  return (
    <div className={styles.mainDiv}>
      <div>
        <div className={styles.firstDiv}>
          <h1 style={{ fontSize: "xxx-large" }}>Hi there! 👋 I'm Cemil TÜRE</h1>
          <Image
            className={styles.aboutImage}
            src={profilePhoto}
            width={350}
            height={350}
            alt="Cemil TÜRE about"
          />
        </div>
        <div className={styles.secondDiv}>
          <Image
            className={styles.aboutImage}
            src={aboutImage1}
            width={350}
            height={350}
            alt="Cemil TÜRE about"
          />
          <div className={styles.middleText}>
            <p>
              A passionate frontend developer with a solid foundation in HTML,
              CSS, and JavaScript. My expertise extends to TypeScript, React,
              and Next.js, allowing me to create dynamic and responsive user
              interfaces. Armed with a strong background in computer science, I
              excel in problem-solving and efficient error handling.
            </p>
            <p>
              I thrive in collaborative environments, leveraging effective
              communication and teamwork to bring innovative ideas to life.
              Whether it's crafting pixel-perfect designs or optimizing user
              experiences, I'm dedicated to delivering high quality solutions
              that meet both user and business needs.
            </p>
            <p>Let's build something amazing together!</p>
          </div>
        </div>
      </div>
      <div className={styles.thirdDiv}>
        <div className={styles.skillList}>
          <h2>My Main Skills</h2>
          <li>React.js</li>
          <li>Next.js</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML5</li>
          <li>CSS3</li>
        </div>
        <Image
          className={styles.aboutImage}
          src={aboutImage2}
          width={350}
          height={350}
          alt="Cemil TÜRE about"
        />
      </div>
    </div>
  );
};

export default about;
