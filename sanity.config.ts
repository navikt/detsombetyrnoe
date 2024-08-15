import { createAuthStore, defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/lib/services/sanity/schemas";
import { dataset, projectId } from "./src/lib/services/sanity/env";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [
    structureTool(),
    presentationTool({
      previewUrl: {
        previewMode: {
          enable: "/api/draft",
        },
      },
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
  auth: createAuthStore({
    projectId,
    dataset,
    mode: "append",
    redirectOnSingle: true,
    providers: [
      {
        name: "saml",
        title: "NAV SSO",
        url: "https://api.sanity.io/v2021-10-01/auth/saml/login/f3270b37",
      },
    ],
  }),
});
