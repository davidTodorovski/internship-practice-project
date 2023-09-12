import Link from "next/link";
import styles from "./gamecard.module.css";
import React from "react";

import { Game } from "../app/reviews/page";

interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  return (
    <Link href={`reviews/${game.path}`} className={styles.gameCard}>
      <img src={`/images/${game.path}.jpg`} alt="" />
      <div className={styles.gameInfoContainer}>
        <h3>{game.name}</h3>
      </div>
    </Link>
  );
}
