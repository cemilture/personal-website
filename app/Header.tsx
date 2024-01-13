"use client";

import styles from "./page.module.css";
import Image from "next/image";
import logo from "./public/logo1.jpg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className={styles.header}>
      <Link href="/">
        <Image
          className={styles.logo}
          src={logo}
          alt="Cemil Ture's logo"
          height={75}
          width={75}
        />
      </Link>

      <div className={styles.navigation}>
        <Link
          className={pathname === "/about" ? styles.active : styles.headerLink}
          href="/about"
        >
          About
        </Link>
        <Link
          className={
            pathname === "/education" ? styles.active : styles.headerLink
          }
          href="/education"
        >
          Education
        </Link>
        <Link
          className={
            pathname === "/projects" ? styles.active : styles.headerLink
          }
          href="/projects"
        >
          Projects
        </Link>
        <Link
          className={pathname === "/skills" ? styles.active : styles.headerLink}
          href="/skills"
        >
          Skills
        </Link>
        <Link
          className={
            pathname === "/contact" ? styles.active : styles.headerLink
          }
          href="/contact"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
