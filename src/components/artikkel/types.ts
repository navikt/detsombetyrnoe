export interface ArtikkelI {
  _createdAt: string;
  _id: string;
  _type: "artikkel";
  _updatedAt: string;
  bilder: any;
  ingress: string;
  innhold: any;
  slug: {
    current: string;
  };
  lesMerTekst: string;
  tittel: string;
}
