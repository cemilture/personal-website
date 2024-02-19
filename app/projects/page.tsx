import Link from "next/link";
import styles from "./projects.module.css";
import Image from "next/image";
import adminPanel from "./projectImages/adminPanel-dashboard.jpg";
import randomQuote from "./projectImages/random-quote-axios.jpg";
import ricknmorty from "./projectImages/ricknmorty.jpg";
import coffee from "./projectImages/coffee.jpg";
import qrcode from "./projectImages/qrcode.jpg";
import morkelebek from "./projectImages/morkelebek.jpg";
import morkampus from "./projectImages/morkampus.jpg";

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      <h1>Projects</h1>

      <div className={styles.projectCard}>
        <Link
          href="https://morkelebekajans.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={morkelebek}
            width={250}
            height={250}
            alt="Cemil Türe, Mor Kelebek Ajans"
          />
        </Link>
        <h2>Mor Kelebek Ajans Website</h2>
      </div>

      <div className={styles.projectCard}>
        <Link
          href="https://www.morkampus.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={morkampus}
            width={250}
            height={250}
            alt="Cemil Türe, Mor Kampüs"
          />
        </Link>
        <h2>Mor Kampus Website</h2>
      </div>

      <div className={styles.projectCard}>
        <Link
          href="https://dashboard-courses-task.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={adminPanel}
            width={250}
            height={250}
            alt="Cemil Türe, Admin panel"
          />
        </Link>
        <h2>Admin panel, Dashboard, CRUD operations</h2>
      </div>

      <div className={styles.projectCard}>
        <Link
          href="https://rick-morty-query.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={ricknmorty}
            width={250}
            height={250}
            alt="Cemil Türe, Rick and Morty Character Search"
          />
        </Link>
        <h2>Rick and Morty character search and filter</h2>
      </div>

      <div className={styles.projectCard}>
        <Link
          href="https://random-quote-machine-silk-one.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={randomQuote}
            width={250}
            height={250}
            alt="Cemil Türe, random quote"
          />
        </Link>
        <h2>Random quote, axios data fetching</h2>
      </div>

      <div className={styles.projectCard}>
        <Link
          href="https://coffee-js-beige.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={coffee}
            width={250}
            height={250}
            alt="Cemil Türe, coffee search"
          />
        </Link>
        <h2>Coffee search and filter, Redux</h2>
      </div>

      <div className={styles.projectCard}>
        <Link
          href="https://qr-project-lime.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={qrcode}
            width={250}
            height={250}
            alt="Cemil Türe, qrcode github"
            sizes="(max-width: 500px) 50vw"
          />
        </Link>
        <h2>Qrcode for my github profile</h2>
      </div>
    </div>
  );
};

export default Projects;
