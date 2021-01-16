import * as React from "react";
import styled from "styled-components/macro";
import { BlogpostPreviewI } from "../../pages/blogg";
import BloggPostPreview from "./BloggPostPreview";
import { BloggGlobalStyles } from "./BloggGlobalStyles";
import Header from "./Header";

const Style = styled.div`
  min-height: 100vh;
  padding: 2rem;
`;

const MaxWidth = styled.div`
  max-width: 60rem;
  margin: auto;
`;

const StyledOl = styled.ol`
  margin: 4rem 0;
  display: grid;
  @media (min-width: 40em) {
    grid-template-columns: 1fr 1fr;
  }
  grid-gap: 4rem;
`;

interface Props {
  blogposts: BlogpostPreviewI[];
}

function BloggForside(props: Props) {
  const førstePost = props.blogposts[0];
  const resten = props.blogposts.slice(1);

  return (
    <Style>
      <BloggGlobalStyles />
      <MaxWidth>
        <Header fontSize="1.5rem" h1={true} />
        <BloggPostPreview {...førstePost} />
        <StyledOl>
          {resten.map((post) => (
            <li key={post._id}>
              <BloggPostPreview {...post} />
            </li>
          ))}
        </StyledOl>
      </MaxWidth>
    </Style>
  );
}

export default BloggForside;
