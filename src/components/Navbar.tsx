"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import styles from "./navbar.module.css";
import { orbitron } from "../app/fonts";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const [isNavShown, setIsNavShowed] = useState(false);
  const [count, setCount] = useState(1);
  const pathname = usePathname();
  const navLinks = [
    {
      text: "Home",
      path: "/",
      id: 1,
    },
    {
      text: "Reviews",
      path: "/reviews",
      id: 2,
    },
    {
      text: "About",
      path: "/about",
      id: 3,
    },
  ];

  useEffect(() => {
    setIsNavShowed(false);
  }, [pathname]);

  return (
    <div className={`${styles.navbar} ${orbitron.className}`}>
      <div className={`container ${styles.navbarWrapper}`}>
        <Link href="/" className={styles.navbarLogo}>
          LevelUpReviews
        </Link>

        <nav className={`${styles.nav} ${isNavShown ? styles.active : ""}`}>
          <ul className={styles.navbarLinkContainer}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  className={pathname === link.path ? styles.activeLink : ""}
                  href={link.path}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          onClick={() => {
            setIsNavShowed(!isNavShown);
            console.log("jjkjk");
          }}
          className={styles.navToggleButton}
        >
          |||
        </button>
      </div>
    </div>
  );
}
