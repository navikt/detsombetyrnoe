import React from "react";
import { WebPreviewWrapper } from "./PreviewWrapper";

export const LandingPageWebPreview = (ctx: any) => {
  const slug = ctx.document.displayed?.slug?.current;

  if (!slug) {
    return <div>Landingssiden må ha en slug (url) før den kan forhåndsvises</div>;
  }

  const previewUrl = `/${slug}?preview=true`;
  const url = process.env.NODE_ENV === "production" ? previewUrl : `http://localhost:3000${previewUrl}`;

  return <WebPreviewWrapper url={url} />;
};
