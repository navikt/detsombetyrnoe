# detsombetyrnoe.no

Nextjs-frontend og sanity-cms oppsett for karrieresidene på [detsombetyrnoe.no](https://www.detsombetyrnoe.no)

## Redigere innhold

Innhold kan redigeres på [https://detsombetyrnoe.no/studio](https://detsombetyrnoe.no/studio)

### Manuelle stillinger

Dersom automatikken ikke plukker enkelte stillinger kan du legge til disse i en egen liste.
Gå til [tilleggsstillinger.json](/src/lib/tilleggsstillinger.json)

## Utvikling

Bruke Node.js v16

```
npm i
npm run dev
```

## API'er

Github-api'et er avhengig av et access token.
Dette kan du fikse for lokal utvikling ved å opprett filen `.env.local` i root-folderet med innholdet:

```
# SECRET - DO NOT COMMIT TO GIT

# Trengs for at api/github endepunktet skal funke
API_GITHUB_TOKEN="MITT_HEMMELIGE_TOKEN"
```

#### Github-token til lokal utvikling

`github.com -> Settings -> Developer settings -> Personal access tokens`
Du trenger tilgang til `public_repo, read:org` og skru på SSO for tokenet.

## Gamle sider

Leter du etter det gamle repoet? Det finner du nå her [https://github.com/navikt/detsombetyrnoe-legacy](https://github.com/navikt/detsombetyrnoe-legacy)
