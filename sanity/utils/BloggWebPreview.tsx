import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  iframe {
    height: 100%;
    width: 100%;
  }
  height: 100%;
  margin: 1rem;
  box-shadow: 0 0 1rem #888;
`;

export const BloggWebPreview = (ctx: any) => {
  const slug = ctx.document.displayed?.slug?.current;

  if (!slug) {
    return <div>Bloggposten må ha en slug (url) før den kan forhåndsvises</div>;
  }

  const url =
    process.env.NODE_ENV === "production"
      ? `/blogg/${slug}?preview=true`
      : `http://localhost:3000/blogg/${slug}?preview=true`;

  return (
    <Wrapper>
      <iframe src={url} frameBorder={0} />
    </Wrapper>
  );
};
