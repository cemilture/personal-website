"use client";

import styles from "./page.module.css";
import Image from "next/image";
import logo from "./public/logo1.jpg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    !setMobileMenuOpen;
  };

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

      {/* Button for toggling mobile menu */}
      {/* <div className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
        <div />
        <div />
        <div />
      </div> */}

      {/* Mobile menu */}
      <Menu
        menuClassName={styles.mobileMenu}
        burgerButtonClassName={styles.mobileMenuButton}
        right
        width={"150px"}
        isOpen={isMobileMenuOpen}
        customBurgerIcon={<IoMenu className={styles.mobileMenuIcon} />}
      >
        <Link href="/about" onClick={toggleMobileMenu}>
          About
        </Link>
        <Link href="/education" onClick={toggleMobileMenu}>
          Education
        </Link>
        <Link href="/projects" onClick={toggleMobileMenu}>
          Projects
        </Link>
        <Link href="/skills" onClick={toggleMobileMenu}>
          Skills
        </Link>
        <Link href="/contact" onClick={toggleMobileMenu}>
          Contact
        </Link>
      </Menu>
    </div>
  );
};

export default Header;
