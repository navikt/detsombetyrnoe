import { createAuthStore, defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/lib/services/sanity/schemas";

export default defineConfig({
  basePath: "/studio",
  //title: 'AAP-informasjonsanalyse',

  projectId: "c9hptfq7",
  dataset: "production",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  auth: createAuthStore({
    projectId: "c9hptfq7",
    dataset: "production",
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
