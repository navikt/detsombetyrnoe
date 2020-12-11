import S from "@sanity/desk-tool/structure-builder";
import { NøkkeltallIkon } from "./schemas/nøkkeltall/nokkeltall";

export default () =>
  S.list()
    .title("Innhold")
    .items([
      S.listItem().title("Forside").child(S.editor().schemaType("forside").documentId("forside")),
      S.listItem()
        .title("Nøkkeltall")
        .icon(NøkkeltallIkon)
        .child(S.editor().schemaType("nokkeltall").documentId("nokkeltall")),
      S.divider(),
      ...S.documentTypeListItems().filter((listItem) => !["forside", "nokkeltall"].includes(listItem.getId())),
    ]);
