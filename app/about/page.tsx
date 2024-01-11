/* eslint-disable react/no-unescaped-entities */
import styles from "../page.module.css";

const about = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Hi there! 👋 I'm Cemil Ture</h1>
        <p>
          A passionate frontend developer with a knack for creating amazing user
          experiences. My journey in the tech world revolves around exploring
          the latest trends and turning them into functional, beautiful
          websites.
        </p>
        <p>
          I thrive in collaborative environments and believe that great things
          happen when brilliant minds come together. Teamwork is not just a
          skill; it's a mindset that I bring to every project.
        </p>
        <p>
          My expertise lies in crafting robust web applications, and I'm
          particularly enchanted by the power of <em>React</em> and{" "}
          <em>Next.js</em>. These technologies fuel my creativity, enabling me
          to build responsive, efficient, and scalable solutions.
        </p>
      </div>
      <h2>My Main Skills</h2>
      <div className={styles.skillsList}>
        <li>React.js</li>
        <li>Next.js</li>
        <li>JavaScript (ES6+)</li>
        <li>HTML5</li>
        <li>CSS3</li>
      </div>
    </div>
  );
};

export default about;
