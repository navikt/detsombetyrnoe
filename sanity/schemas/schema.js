import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import blockContent from "./blockContent";
import { forsideSchema } from "./forside";
import artikkel from "./artikkel";
import bilde from "./bilde";
import blogpost from "./blogpost";
import forfatter from "./forfatter";
import metadata from "./metadata";
import video from "./video";
import tilleggsStilling from "./tilleggsStilling";
import filopplasting from "./filopplasting";
import landingPage from "./landingPage";
import pa_scenen from "./pa_scenen";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    blockContent,
    artikkel,
    bilde,
    blogpost,
    filopplasting,
    forfatter,
    metadata,
    video,
    tilleggsStilling,
    landingPage,
    pa_scenen,
    ...forsideSchema,
  ]),
});
