import S from "@sanity/desk-tool/structure-builder";
import { NøkkeltallIkon } from "./schemas/forside/nøkkeltall/nokkeltall";
import { ForsideIkon } from "./schemas/forside/forside";
import React from "react";
import { BloggWebPreview } from "./utils/BloggWebPreview";

export default () =>
  S.list()
    .title("Innhold")
    .items([
      S.listItem().title("Forside").icon(ForsideIkon).child(S.editor().schemaType("forside").documentId("forside")),
      S.listItem()
        .title("Nøkkeltall")
        .icon(NøkkeltallIkon)
        .child(S.editor().schemaType("nokkeltall").documentId("nokkeltall")),
      S.divider(),
      ...S.documentTypeListItems().filter((listItem) => !["forside", "nokkeltall"].includes(listItem.getId())),
    ]);

export const getDefaultDocumentNode = ({ schemaType }) => {
  if (schemaType === "blogpost") {
    return S.document().views([S.view.form(), S.view.component(BloggWebPreview).title("Preview")]);
  }
};
