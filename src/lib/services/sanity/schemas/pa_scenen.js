import { BsPeopleCircle } from "react-icons/bs";

export default {
  name: "pa_scenen",
  type: "object",
  //icon: BsPeopleCircle,
  fields: [
    {
      name: "tittel",
      title: "Tittel",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "url",
      title: "Lenke til event",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "event",
      title: "Event",
      description: "Eks. Javazone",
      type: "string",
    },
    {
      name: "foredragsholdere",
      type: "array",
      of: [
        {
          description:
            'Du må legge deg til under forfatterpanelet og trykke "Publish" før du dukker opp i denne lista.',
          type: "reference",
          to: [
            {
              type: "forfatter",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
};
