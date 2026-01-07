import { defineType } from "sanity";

export const PaScenen = defineType({
  name: "pa_scenen",
  type: "object",
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
            'Du må legge deg til under forfatterpanelet og trykke "Publish" før du dukker opp i denna lista.',
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
});
