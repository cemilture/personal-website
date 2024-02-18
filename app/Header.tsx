"use client";

import styles from "./page.module.css";
import Image from "next/image";
import logo from "./public/logo1.jpg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { IoMenu } from "react-icons/io5";
import { FaWindowClose } from "react-icons/fa";

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
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
          className={pathname === "/" ? styles.active : styles.headerLink}
          href="/"
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

      {/* Mobile menu */}
      <div className={styles.mobileMenuDiv}>
        <Menu
          menuClassName={styles.mobileMenu}
          burgerButtonClassName={styles.mobileMenuButton}
          right
          width={"150px"}
          isOpen={isMobileMenuOpen}
          onStateChange={(state) => setMobileMenuOpen(state.isOpen)}
          customBurgerIcon={
            isMobileMenuOpen ? (
              <FaWindowClose className={styles.mobileMenuIcon} />
            ) : (
              <IoMenu className={styles.mobileMenuIcon} />
            )
          }
        >
          <Link href="/" onClick={closeMobileMenu}>
            About
          </Link>
          <Link href="/education" onClick={closeMobileMenu}>
            Education
          </Link>
          <Link href="/projects" onClick={closeMobileMenu}>
            Projects
          </Link>
          <Link href="/skills" onClick={closeMobileMenu}>
            Skills
          </Link>
          <Link href="/contact" onClick={closeMobileMenu}>
            Contact
          </Link>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
