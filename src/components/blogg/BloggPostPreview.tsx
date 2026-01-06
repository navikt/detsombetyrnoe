import * as React from "react";
import { urlFor } from "../../lib/sanity";
import { format } from "date-fns";
import { nb } from "date-fns/locale";
import Link from "next/link";
import Forfattere from "./Forfattere";
import { BlogpostPreview } from "src/lib/services/sanity/model/blogg/bloggQuery";
import styles from "./BloggPostPreview.module.css";

function BloggPostPreview(props: { post: BlogpostPreview; highResImage?: boolean }) {
  return (
    <Link href={`/blogg/${props.post.slug?.current}`} passHref={true} legacyBehavior>
      <a className={styles.style} lang={props.post.language}>
        <img
          className={styles.coverImage}
          src={
            urlFor(props.post.mainImage)
              .width(props.highResImage ? 1080 : 540)
              .height(props.highResImage ? 800 : 400)
              .bg("fff")
              .format("jpg")
              .url() || ""
          }
          alt={props.post.mainImage?.altTekst}
        />
        <div className={styles.content}>
          <h2>{props.post.tittel}</h2>
          <p>{format(new Date(props.post._createdAt), "PPP", { locale: nb })}</p>
          <Forfattere forfattere={props.post?.forfattere} />
        </div>
      </a>
    </Link>
  );
}

export default BloggPostPreview;
