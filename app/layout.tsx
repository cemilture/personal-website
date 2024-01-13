import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import styles from "./page.module.css";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import profilePhoto from "./public/profile.png";
import Link from "next/link";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cemil Ture",
  description: "Cemil Ture's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.mainDiv}>
          <Header />
          <div className={styles.belowHeader}>
            <div className={styles.profileContainer}>
              <Image
                className={styles.profileImage}
                src={profilePhoto}
                height={200}
                width={300}
                alt="My Photo"
              />{" "}
              <div>
                <h2>Cemil Türe</h2>
                <p className={styles.title}>Frontend Developer</p>
              </div>
              <div className={styles.profileInfo}>
                <div className={styles.info}>
                  <p className={styles.infoIcon}>
                    <FaEnvelope />
                  </p>
                  <div>
                    <p className={styles.infoHeader}>E-Mail</p>
                    <p> cemilture@gmail.com</p>
                  </div>
                </div>
                <div className={styles.info}>
                  <p className={styles.infoIcon}>
                    <FaPhone />
                  </p>
                  <div>
                    <p className={styles.infoHeader}>Phone </p>
                    <p> +905516481009</p>
                  </div>
                </div>
                <div className={styles.info}>
                  <p className={styles.infoIcon}>
                    <FaMapMarkerAlt />
                  </p>
                  <div>
                    <p className={styles.infoHeader}>Location</p>
                    <p> Uşak, Turkey</p>
                  </div>
                </div>
              </div>
              <div className={styles.iconsContainer}>
                <Link
                  href="https://www.linkedin.com/in/cemilture/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  href="https://github.com/cemilture"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </Link>
              </div>
            </div>
            <div className={styles.children}>{children}</div>
          </div>
        </div>
        <footer style={{ textAlign: "center", fontWeight: "300" }}>
          <p>
            Made with ❤️ by{" "}
            <strong>
              <Link href="https://www.linkedin.com/in/cemilture/">
                cemilture
              </Link>
            </strong>{" "}
            with Next.js
          </p>
        </footer>
      </body>
    </html>
  );
}
