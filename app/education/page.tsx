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
        <Link href="https://www.anadolu.edu.tr/en">
          <Image
            src={anadolu}
            width={150}
            height={150}
            alt="Anadolu University"
          />
        </Link>

        <div>
          <h2>Anadolu University</h2>
          <p>Bachelor's degree, Management Information Systems</p>
          <p>2018 - 2021</p>
        </div>
      </div>

      <div className={styles.educationItem}>
        <Link href="https://atauni.edu.tr/en/index">
          <Image
            src={atauni}
            width={150}
            height={150}
            alt="Ataturk University"
          />
        </Link>

        <div>
          <h2>Atatürk University</h2>
          <p>Associate's degree, Computer Programming</p>
          <p>2021 - 2023</p>
        </div>
      </div>

      <div className={styles.educationItem}>
        <Link href="https://www.istanbul.edu.tr/en/_">
          <Image
            src={istanbul}
            width={150}
            height={150}
            alt="Istanbul University"
          />
        </Link>
        <div>
          <h2>Istanbul University</h2>
          <p>Bachelor's degree, Law</p>
          <p>2017 - Present</p>
        </div>
      </div>
      <div className={styles.educationItem}>
        <Link href="https://www.anadolu.edu.tr/en">
          <Image
            src={anadolu}
            width={150}
            height={150}
            alt="Anadolu University"
          />
        </Link>
        <div>
          <h2>Anadolu University</h2>
          <p>Associate's degree, Web Design And Development</p>
          <p>2016 - 2018</p>
        </div>
      </div>
      <div className={styles.educationItem}>
        <Link href="https://www.aksaray.edu.tr/?l=en">
          <Image
            src={aksaray}
            width={150}
            height={150}
            alt="Aksaray University"
          />
        </Link>
        <div>
          <h2>Aksaray University</h2>
          <p>Bachelor's degree, Psychological Counseling And Guidance</p>
          <p>2012 - 2016</p>
        </div>
      </div>

      <div className={styles.educationItem}>
        <Link href="https://www.anadolu.edu.tr/en">
          <Image
            src={anadolu}
            width={150}
            height={150}
            alt="Anadolu University"
          />
        </Link>
        <div>
          <h2>Anadolu University</h2>
          <p>Associate's degree, Justice</p>
          <p>2013 - 2015</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
