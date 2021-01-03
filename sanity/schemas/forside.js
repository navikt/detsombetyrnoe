export default {
  name: "forside",
  title: "Forside",
  type: "document",
  fields: [
    {
      name: "tittel",
      title: "Tittel",
      type: "string",
    },
    {
      name: "beskrivelse",
      title: "Beskrivelse",
      type: "string",
    },
    {
      name: "bagrunnsbildeDesktop",
      title: "Bakgrunnsbilde Desktop",
      type: "image",
    },
    {
      name: "bakgrunnsbildeMobil",
      title: "Bakgrunnsbilde Mobil",
      type: "image",
    },
    {
      name: "navLogo",
      title: "NAV Logo",
      type: "image",
    },
    {
      name: "bolker",
      title: "Bolker",
      type: "array",
      of: [
        {
          type: "innholdsbolk",
        },
        {
          type: "stillinger",
        },
        {
          type: "sitat",
        },
      ],
    },
  ],
};
