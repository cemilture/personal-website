/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import styles from "./about/about.module.css";
import aboutImage1 from "./public/about1.jpg";
import aboutImage2 from "./public/about2.jpg";
import profilePhoto from "./public/profile-photo.jpg";

const about = () => {
  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "xxx-large" }}>Hi there! 👋 I'm Cemil Ture</h1>
          <Image
            className={styles.aboutImage}
            src={profilePhoto}
            width={500}
            height={500}
            alt="Cemil Türe about"
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Image
            className={styles.aboutImage}
            src={aboutImage1}
            width={500}
            height={500}
            alt="Cemil Türe about"
          />
          <div className={styles.middleText}>
            <p>
              A passionate frontend developer with a knack for creating amazing
              user experiences. My journey in the tech world revolves around
              exploring the latest trends and turning them into functional,
              beautiful websites.
            </p>
            <p>
              I thrive in collaborative environments and believe that great
              things happen when brilliant minds come together. Teamwork is not
              just a skill; it's a mindset that I bring to every project.
            </p>
            <p>
              My expertise lies in crafting robust web applications, and I'm
              particularly enchanted by the power of <em>React</em> and{" "}
              <em>Next.js</em>. These technologies fuel my creativity, enabling
              me to build responsive, efficient, and scalable solutions.
            </p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
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
          width={500}
          height={500}
          alt="Cemil Türe about"
        />
      </div>
    </div>
  );
};

export default about;
