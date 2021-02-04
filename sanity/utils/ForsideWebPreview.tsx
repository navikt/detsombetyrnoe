import React from "react";
import { WebPreviewWrapper } from "./PreviewWrapper";

export const ForsideWebPreview = (ctx: any) => {
  const previewUrl = `/?preview=true`;
  const url = process.env.NODE_ENV === "production" ? previewUrl : `http://localhost:3000${previewUrl}`;

  return <WebPreviewWrapper url={url} />;
};
