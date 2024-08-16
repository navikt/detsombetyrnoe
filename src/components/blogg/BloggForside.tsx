"use client";
import * as React from "react";
import styled from "styled-components";
import BloggPostPreview from "./BloggPostPreview";
import Header from "./Header";
import Head from "next/head";
import { BlogpostPreview } from "src/lib/services/sanity/model/blogg/bloggQuery";

const Style = styled.div`
  min-height: 100vh;
  padding: 4vmin;
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
  blogposts: BlogpostPreview[];
}

function BloggForside(props: Props) {
  const førstePost = props.blogposts[0];
  const resten = props.blogposts.slice(1);

  return (
    <Style>
      <Head>
        <title>NAV IT Blogg.</title>
      </Head>
      <MaxWidth>
        <Header fontSize="1.5rem" h1={true} />
        {førstePost && <BloggPostPreview post={førstePost} highResImage={true} />}
        <StyledOl>
          {resten.map((post) => (
            <li key={post._id}>
              <BloggPostPreview post={post} />
            </li>
          ))}
        </StyledOl>
      </MaxWidth>
    </Style>
  );
}

export default BloggForside;
