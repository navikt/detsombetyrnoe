import { BlockContent } from "./schemas/blockContent";
import { forsideSchema } from "./schemas/forside";
import artikkel from "./schemas/artikkel";
import bilde from "./schemas/bilde";
import { BlogPost } from "./schemas/blogpost";
import forfatter from "./schemas/forfatter";
import metadata from "./schemas/metadata";
import video from "./schemas/video";
import tilleggsStilling from "./schemas/tilleggsStilling";
import filopplasting from "./schemas/filopplasting";
import landingPage from "./schemas/landingPage";
import pa_scenen from "./schemas/pa_scenen";
import stilling from "./schemas/stilling";

export const schemaTypes = [
  BlockContent,
  artikkel,
  bilde,
  BlogPost,
  filopplasting,
  forfatter,
  metadata,
  video,
  tilleggsStilling,
  landingPage,
  pa_scenen,
  stilling,
  ...forsideSchema,
];
