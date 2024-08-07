"use client";

import { NextStudio } from "next-sanity/studio";
import { StudioProvider, StudioLayout } from "sanity";

import config from "../../../sanity.config";

export const Studio = () => {
  //  Supports the same props as `import {Studio} from 'sanity'`, `config` is required
  return (
    <NextStudio config={config}>
      <StudioProvider config={config}>
        <StudioLayout />
      </StudioProvider>
    </NextStudio>
  );
};
