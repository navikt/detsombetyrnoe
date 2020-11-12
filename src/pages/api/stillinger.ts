const stillinger = [
  {
    id: "656d9e26-0e6c-433c-84a3-b6e973f734f6",
    stillingsType: "utvikling",
    title: "Velferdsstatens kommende pensjonister trenger engasjerte utviklere",
    description: `Er du en utvikler som mener at den beste måten å møte fremtiden på er å skape den selv? Vil du ved
    hjelp av feedback og læring lage stadig enklere løsninger for brukerne våre?`,
    frist: "22.11.2020",
    url: "https://arbeidsplassen.nav.no/stillinger/stilling/656d9e26-0e6c-433c-84a3-b6e973f734f6",
  },
  {
    id: "63cb1b7f-d41d-40f6-bcc1-bb3f0840ae7f",
    stillingsType: "design",
    title: "Er du en samfunnsengasjert student som ønsker å bygge erfaring som tjenestedesigner?",
    description: `Vil du ha en sommerjobb i 2021 hvor du kan gjøre en stor forskjell for våre brukere og samtidig jobbe
    med spennende og ny teknologi? I NAV IT bygger vi nå opp et av de sterkeste designmiljøene i Norge og
    vi ønsker å få med deg på laget sommeren 2021 for at du skal utvikle deg og få et innblikk i alt det
    spennende vi holder på med.`,
    frist: "15.11.2020",
    url: "https://arbeidsplassen.nav.no/stillinger/stilling/63cb1b7f-d41d-40f6-bcc1-bb3f0840ae7f",
  },
  {
    id: "26f1f2ce-924e-4fab-9be7-ae2723248b01",
    stillingsType: "design",
    title: "Er du en samfunnsengasjert student som ønsker å bygge erfaring som design-researcher?",
    description: `Vil du ha en sommerjobb i 2021 hvor du kan gjøre en stor forskjell for våre brukere og samtidig jobbe
    med spennende og ny teknologi? I NAV IT bygger vi nå opp et av de sterkeste designmiljøene i Norge og
    vi ønsker å få med deg på laget sommeren 2021 for at du skal utvikle deg og få et innblikk i alt det
    spennende vi holder på med.`,
    frist: "15.11.2020",
    url: "https://arbeidsplassen.nav.no/stillinger/stilling/656d9e26-0e6c-433c-84a3-b6e973f734f6",
  },
  {
    id: "160742cc-57fd-49e6-9221-afe56437854b",
    stillingsType: "design",
    title: "Er du en samfunnsengasjert student som ønsker å bygge erfaring som utvikler?",
    description: `Vil du ha en sommerjobb i 2021 hvor du kan gjøre en stor forskjell for våre brukere og samtidig jobbe
    med spennende og ny teknologi? I NAV IT bygger vi nå opp et av de sterkeste designmiljøene i Norge og
    vi ønsker å få med deg på laget sommeren 2021 for at du skal utvikle deg og få et innblikk i alt det
    spennende vi holder på med.`,
    frist: "15.11.2020",
    url: "https://arbeidsplassen.nav.no/stillinger/stilling/160742cc-57fd-49e6-9221-afe56437854b",
  },
];

export default (request, response) => {
  response.statusCode = 200;
  response.json(stillinger);
};
