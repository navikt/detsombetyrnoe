import S from "@sanity/desk-tool/structure-builder";
import { LandingssideIkon } from "./schemas/nyForside/landingsside";
import { NøkkeltallIkon } from "./schemas/nyForside/nøkkeltall/nokkeltall";

export default () =>
  S.list()
    .title("Innhold")
    .items([
      S.listItem().title("Forside").child(S.editor().schemaType("forside").documentId("forside")),
      S.listItem()
        .title("Landingsside")
        .icon(LandingssideIkon)
        .child(S.editor().schemaType("landingsside").documentId("landingsside")),
      S.listItem()
        .title("Nøkkeltall")
        .icon(NøkkeltallIkon)
        .child(S.editor().schemaType("nokkeltall").documentId("nokkeltall")),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !["forside", "nokkeltall", "landingsside"].includes(listItem.getId())
      ),
    ]);
