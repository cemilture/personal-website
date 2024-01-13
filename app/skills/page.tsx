import Image from "next/image";
import styles from "./skills.module.css";
import html from "./skillsImage/html.png";
import css from "./skillsImage/css.png";
import javascript from "./skillsImage/js.png";
import Typescript from "./skillsImage/Typescript.png";
import react from "./skillsImage/react.png";
import nextjs from "./skillsImage/nextjs.png";
import redux from "./skillsImage/redux.svg";
import material from "./skillsImage/materialui.png";
import bootstrap from "./skillsImage/bootstrap.png";
import tailwind from "./skillsImage/tailwind.png";
import vercel from "./skillsImage/vercel.svg";

const Skills = () => {
  return (
    <div>
      <h1 className={styles.header}>Skills</h1>
      <div className={styles.mainDiv}>
        <div className={styles.skillContainer}>
          <Image src={html} alt="HTML" width={200} height={200} />
          <p className={styles.title}>HTML</p>
        </div>
        <div className={styles.skillContainer}>
          <Image src={css} alt="CSS" width={200} height={200} />
          <p className={styles.title}>CSS</p>
        </div>
        <div className={styles.skillContainer}>
          <Image src={javascript} alt="JavaScript" width={200} height={200} />
          <p className={styles.title}>JavaScript</p>
        </div>
        <div className={styles.skillContainer}>
          <Image src={Typescript} alt="TypeScript" width={200} height={200} />{" "}
          <p className={styles.title}>TypeScript</p>
        </div>
        <div className={styles.skillContainer}>
          <Image src={react} alt="React" width={200} height={200} />
          <p className={styles.title}>React</p>
        </div>
        <div className={styles.skillContainer}>
          <Image src={nextjs} alt="Next.js" width={200} height={200} />{" "}
          <p className={styles.title}>Next.js</p>
        </div>
        <div className={styles.skillContainer}>
          <Image src={redux} alt="Redux" width={200} height={200} />{" "}
          <p className={styles.title}>Redux</p>
        </div>
        <div className={styles.skillContainer}>
          <Image src={material} alt="Material-UI" width={200} height={200} />
          <p className={styles.title}>Material-UI</p>
        </div>
        <div className={styles.skillContainer}>
          <Image src={bootstrap} alt="Bootstrap" width={200} height={200} />
          <p className={styles.title}>Bootstrap</p>
        </div>
        <div className={styles.skillContainer}>
          <Image src={tailwind} alt="Tailwind CSS" width={200} height={200} />
          <p className={styles.title}>Tailwind CSS</p>
        </div>
        <div className={styles.skillContainer}>
          <Image src={vercel} alt="VERCEL" width={200} height={200} />
          <p className={styles.title}>Vercel CSS</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
