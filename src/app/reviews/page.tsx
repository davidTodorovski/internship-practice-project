import Heading from "../../components/Heading";
import Link from "next/link";
import styles from "./reviews.module.css";
import GameCard from "../../components/GameCard";
import React from "react";

export interface Game {
  name: string;
  path: string;
  id: number;
}
export default function ReviewsPage() {
  const games: Game[] = [
    {
      name: "Hollow Knight",
      path: "hollow-knight",
      id: 1,
    },
    {
      name: "Stardew Valley",
      path: "stardew-valley",
      id: 2,
    },
  ];
  return (
    <>
      <Heading>Reviews</Heading>
      <div className={styles.gameReviewsContainer}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
}
