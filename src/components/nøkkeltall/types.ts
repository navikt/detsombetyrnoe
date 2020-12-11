export interface NøkkeltallTekst {
  antall?: string;
  description?: string;
  title?: string;
  _key: string;
  _type: "nokkeltallTekst";
}

export interface NøkkeltallListe {
  liste?: string[];
  title?: string;
  _key: string;
  _type: "nokkeltallListe";
}

export function isNøkkeltallTekst(item: NøkkeltallListe | NøkkeltallTekst): item is NøkkeltallTekst {
  return item._type === "nokkeltallTekst";
}
