import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import forside from "./forside";
import blockContent from "./blockContent";
import innholdsbolk from "./innholdsbolk";
import stillinger from "./stillinger";
import vimeo from "./vimeo";
import sitat from "./sitat";
import showcase from "./showCase/showcase";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([blockContent, forside, innholdsbolk, sitat, stillinger, vimeo, showcase]),
});
