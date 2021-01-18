import * as React from "react";
import styled from "styled-components/macro";
import { BlogpostPreviewI } from "../../pages/blogg";
import { urlFor } from "../../lib/sanity";
import { format } from "date-fns";
import { nb } from "date-fns/locale";
import Link from "next/link";
import Forfattere from "./Forfattere";

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

function BloggPostPreview(props: BlogpostPreviewI) {
  return (
    <Link href={`/blogg/${props.slug.current}`} passHref={true}>
      <Style>
        <CoverImage src={urlFor(props.mainImage).width(1000).height(500).url() || ""} alt={props.mainImage.altTekst} />
        <Content>
          <h2>{props.tittel}</h2>
          <p>{format(new Date(props._createdAt), "PPP", { locale: nb })}</p>
          <Forfattere forfattere={props.forfattere} />
        </Content>
      </Style>
    </Link>
  );
}

export default BloggPostPreview;
