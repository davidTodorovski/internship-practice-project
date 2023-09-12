import Heading from "../../../components/Heading";
import styles from "../gameReviews.module.css";
import React from "react";
import { readFile } from "node:fs/promises";
import { marked } from "marked";
import matter from "gray-matter";

export default async function StardewValleyPage() {
  const text = await readFile("./reviews/stardew-valley.md", "utf8");
  const {
    content,
    data: { title, date, image },
  } = matter(text);
  const htmlText = marked(content);

  return (
    <>
      <Heading>{title}</Heading>
      <p>{date}</p>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} alt="" />
      </div>
      <article
        style={{ fontWeight: 400 }}
        dangerouslySetInnerHTML={{ __html: htmlText }}
      />
    </>
  );
}
