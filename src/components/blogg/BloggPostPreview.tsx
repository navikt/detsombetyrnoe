import * as React from "react";
import styled from "styled-components";
import { urlFor } from "../../lib/sanity";
import { format } from "date-fns";
import { nb } from "date-fns/locale";
import Link from "next/link";
import Forfattere from "./Forfattere";
import { BlogpostPreview } from "src/lib/services/sanity/model/blogg/bloggQuery";

const Style = styled.a`
  color: inherit !important;
  text-decoration: none;
  display: block;
  h2 {
    font-weight: normal;
    font-size: 2rem;
    line-height: 1;
  }
`;

const CoverImage = styled.img`
  width: 100%;
`;

const Content = styled.div`
  margin-top: 0.5rem;
  > * {
    margin-bottom: 0.5rem;
  }
`;

function BloggPostPreview(props: { post: BlogpostPreview; highResImage?: boolean }) {
  return (
    <Link href={`/blogg/${props.post.slug?.current}`} passHref={true} legacyBehavior>
      <Style lang={props.post.language}>
        <CoverImage
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
        <Content>
          <h2>{props.post.tittel}</h2>
          <p>{format(new Date(props.post._createdAt), "PPP", { locale: nb })}</p>
          <Forfattere forfattere={props.post?.forfattere} />
        </Content>
      </Style>
    </Link>
  );
}

export default BloggPostPreview;
