"use client";
import * as React from "react";
import BloggPostPreview from "./BloggPostPreview";
import Header from "./Header";
import Head from "next/head";
import { BlogpostPreview } from "src/lib/services/sanity/model/blogg/bloggQuery";
import styles from "./BloggForside.module.css";

interface Props {
  blogposts: BlogpostPreview[];
}

function BloggForside(props: Props) {
  const førstePost = props.blogposts[0];
  const resten = props.blogposts.slice(1);

  return (
    <div className={styles.style}>
      <Head>
        <title>NAV IT Blogg.</title>
      </Head>
      <div className={styles.maxWidth}>
        <Header fontSize="1.5rem" h1={true} />
        {førstePost && <BloggPostPreview post={førstePost} highResImage={true} />}
        <ol className={styles.styledOl}>
          {resten.map((post) => (
            <li key={post._id}>
              <BloggPostPreview post={post} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default BloggForside;
