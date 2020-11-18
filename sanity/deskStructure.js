import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Innhold")
    .items([
      S.listItem().title("Forside").child(S.editor().schemaType("forside").documentId("forside")),
      S.divider(),
      ...S.documentTypeListItems().filter((listItem) => !["forside"].includes(listItem.getId())),
    ]);
