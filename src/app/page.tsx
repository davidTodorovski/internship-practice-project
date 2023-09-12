import Link from "next/link";
import styles from "./page.module.css";
import Heading from "../components/Heading";
import React from "react";
export default function Home() {
  return (
    <>
      <Heading>LevelUpReviews</Heading>
      <p className={styles.text}>Only the best games reviewed for you.</p>

      <Link href={`reviews/stardew-valley`} className={styles.homePageCard}>
        <img src={`/images/stardew-valley.jpg`} alt="" />
        <div className={styles.textWrapper}>
          <h3>Stardew Valley</h3>
        </div>
      </Link>
    </>
  );
}

// => http://localhost:3000/
