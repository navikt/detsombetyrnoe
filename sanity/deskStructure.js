import S from "@sanity/desk-tool/structure-builder";
import { NøkkeltallIkon } from "./schemas/forside/nøkkeltall/nokkeltall";
import { ForsideIkon } from "./schemas/forside/forside";
import React from "react";
import { BloggWebPreview } from "./utils/BloggWebPreview";
import { ImCog } from "react-icons/im";

export default () =>
  S.list()
    .title("Innhold")
    .items([
      S.listItem().title("Metadata").icon(ImCog).child(S.editor().schemaType("metadata").documentId("metadata")),
      S.listItem().title("Forside").icon(ForsideIkon).child(S.editor().schemaType("forside").documentId("forside")),
      S.listItem()
        .title("Nøkkeltall")
        .icon(NøkkeltallIkon)
        .child(S.editor().schemaType("nokkeltall").documentId("nokkeltall")),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !["forside", "nokkeltall", "metadata"].includes(listItem.getId())
      ),
    ]);

export const getDefaultDocumentNode = ({ schemaType }) => {
  if (schemaType === "blogpost") {
    return S.document().views([S.view.form(), S.view.component(BloggWebPreview).title("Preview")]);
  }
};
