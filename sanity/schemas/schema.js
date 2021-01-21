import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import blockContent from "./blockContent";
import { forsideSchema } from "./forside";
import artikkel from "./artikkel";
import bilde from "./bilde";
import blogpost from "./blogpost";
import forfatter from "./forfatter";
import metadata from "./metadata";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([blockContent, artikkel, bilde, blogpost, forfatter, metadata, ...forsideSchema]),
});
