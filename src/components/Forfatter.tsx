"use client";
import * as React from "react";
import { Forfatter as ForfatterInterface } from "src/lib/services/sanity/model/forfatter/forfatterQuery";
import { urlFor } from "../lib/sanity";
import BloggPostPreview from "./blogg/BloggPostPreview";
import styles from "./Forfatter.module.css";

function Forfatter(props: ForfatterInterface) {
  return (
    <div className={styles.style}>
      <div className={styles.navnelinje}>
        {props.mainImage && (
          <img className={styles.portrett} src={urlFor(props.mainImage).width(200).height(200).url() || ""} alt="" />
        )}
        <h1>{props.navn}</h1>
      </div>
      <div className={styles.bio}>{props.bio}</div>
      <h2 className={styles.styledH2}>Blogginnlegg fra {props.navn}:</h2>
      <div className={styles.innlegg}>
        {props.blogposts?.map((post) => (
          <BloggPostPreview post={post} />
        ))}
      </div>
    </div>
  );
}

export default Forfatter;
