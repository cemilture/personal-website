/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import styles from "./education.module.css";
import Image from "next/image";
import anadolu from "../public/anadolu-logo.png";
import atauni from "../public/ata-logo.png";
import istanbul from "../public/istanbul-logo.png";
import aksaray from "../public/aksaray-logo.png";

const Education = () => {
  return (
    <div className={styles.educationContainer}>
      <h1>Education</h1>

      <div className={styles.educationItem}>
        <div className={styles.eduImage}>
          <Link href="https://www.anadolu.edu.tr/en">
            <Image
              src={anadolu}
              width={100}
              height={100}
              alt="Anadolu University"
            />
          </Link>
        </div>

        <div className={styles.eduText}>
          <h2>Anadolu University</h2>
          <h3>Bachelor's degree, Management Information Systems</h3>
          <h4>2018 - 2021</h4>
        </div>
      </div>

      <div className={styles.educationItem}>
        <div className={styles.eduImage}>
          <Link href="https://atauni.edu.tr/en/index">
            <Image
              src={atauni}
              width={100}
              height={100}
              alt="Ataturk University"
            />
          </Link>
        </div>
        <div className={styles.eduText}>
          <h2>Atatürk University</h2>
          <h3>Associate's degree, Computer Programming</h3>
          <h4>2021 - 2023</h4>
        </div>
      </div>

      <div className={styles.educationItem}>
        <div className={styles.eduImage}>
          <Link href="https://www.istanbul.edu.tr/en/_">
            <Image
              src={istanbul}
              width={100}
              height={100}
              alt="Istanbul University"
            />
          </Link>
        </div>
        <div className={styles.eduTextAbnormal}>
          <h2>Istanbul University</h2>
          <h3>Bachelor's degree, Law</h3>
          <h4>2017 - Present</h4>
        </div>
      </div>
      <div className={styles.educationItem}>
        <div className={styles.eduImage}>
          <Link href="https://www.anadolu.edu.tr/en">
            <Image
              src={anadolu}
              width={100}
              height={100}
              alt="Anadolu University"
            />
          </Link>
        </div>
        <div className={styles.eduText}>
          <h2>Anadolu University</h2>
          <h3>Associate's degree, Web Design And Development</h3>
          <h4>2016 - 2018</h4>
        </div>
      </div>
      <div className={styles.educationItem}>
        <div className={styles.eduImage}>
          <Link href="https://www.aksaray.edu.tr/?l=en">
            <Image
              src={aksaray}
              width={100}
              height={100}
              alt="Aksaray University"
            />
          </Link>
        </div>
        <div className={styles.eduText}>
          <h2>Aksaray University</h2>
          <h3>Bachelor's degree, Psychological Counseling And Guidance</h3>
          <h4>2012 - 2016</h4>
        </div>
      </div>

      <div className={styles.educationItem}>
        <div className={styles.eduImage}>
          <Link href="https://www.anadolu.edu.tr/en">
            <Image
              src={anadolu}
              width={100}
              height={100}
              alt="Anadolu University"
            />
          </Link>
        </div>
        <div className={styles.eduTextAbnormal}>
          <h2>Anadolu University</h2>
          <h3>Associate's degree, Justice</h3>
          <h4>2013 - 2015</h4>
        </div>
      </div>
    </div>
  );
};

export default Education;
