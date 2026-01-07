import { BlockContent } from "./schemas/blockContent";
import { forsideSchema } from "./schemas/forside";
import { Artikkel } from "./schemas/artikkel";
import { Bilde } from "./schemas/bilde";
import { BlogPost } from "./schemas/blogpost";
import { Forfatter } from "./schemas/forfatter";
import { Metadata } from "./schemas/metadata";
import { Video } from "./schemas/video";
import { TilleggsStilling } from "./schemas/tilleggsStilling";
import { Filopplasting } from "./schemas/filopplasting";
import { LandingPage } from "./schemas/landingPage";
import { PaScenen } from "./schemas/pa_scenen";
import { Stilling } from "./schemas/stilling";

export const schemaTypes = [
  BlockContent,
  Artikkel,
  Bilde,
  BlogPost,
  Filopplasting,
  Forfatter,
  Metadata,
  Video,
  TilleggsStilling,
  LandingPage,
  PaScenen,
  Stilling,
  ...forsideSchema,
];
