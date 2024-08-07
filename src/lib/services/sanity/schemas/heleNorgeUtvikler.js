export default {
  name: "heleNorgeUtvikler",
  title: "Hele Norge utvikler",
  type: "object",
  fields: [
    {
      name: "sted",
      title: "Sted",
      type: "string",
    },
    {
      name: "geopoint",
      title: "GPS koordinater",
      description: "Koordinater for sted, holder med 2 decimaler. Eks: 5.23",
      type: "geopoint",
    },
  ],
};
