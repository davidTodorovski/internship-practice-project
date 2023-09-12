import Heading from "../../../components/Heading";
import styles from "../gameReviews.module.css";
import React from "react";

export default function HollowKnightPage() {
  return (
    <>
      <Heading>Hollow Knight</Heading>
      <div className={styles.imageContainer}>
        <img className={styles.image} src="/images/hollow-knight.jpg" alt="" />
      </div>
      <p>This will be the review for Hollow Knight</p>
    </>
  );
}
