export interface ArtikkelI {
  _createdAt: string;
  _id: string;
  _type: "artikkel";
  _updatedAt: string;
  bilder: (Bilde | Video)[];
  ingress: string;
  innhold: any;
  slug: {
    current: string;
  };
  lesMerTekst: string;
  tittel: string;
}

interface Bilde {
  altTekst: string;
  asset: any;
  caption: string;
  _type: "bilde";
  _key: string;
}

interface Video {
  title: string;
  url: string;
  _type: "video";
  _key: string;
}
