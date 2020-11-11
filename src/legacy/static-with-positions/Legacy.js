import Head from "next/head";

function Legacy() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta property="og:title" content="Tør du å skape det som betyr noe?" />
        <meta property="og:site_name" content="NAV IT" />
        <meta property="og:url" content="http://www.detsombetyrnoe.no/" />
        <meta
          property="og:description"
          content="NAV skal utvikle verdens beste velferdsløsninger - for deg og dine, for NAV og for samfunnet. Vi ser
                    etter mennesker som tør å ta det ansvaret."
        />
        <meta property="og:image" content="http://www.detsombetyrnoe.no/detsombetyrnoe.jpg" />
        <link href="https://www.nav.no/dekoratoren/media/favicon.ico" rel="icon" type="image/x-icon" />
        <link rel="stylesheet" href="legacy/bootstrap.css" />
        <link rel="stylesheet" href="legacy/main.css" />
        <title>Tør du å skape det som betyr noe?</title>
      </Head>

      <main role="main">
        <div className="container-fluid">
          <div className="row topp-bg p-4">
            <div className="text-white col col-12 col-md-6 px-md-5 pb-4">
              <a className="my-md-5 mt-3 mt-lg-5 mb-5" href="http://www.nav.no" title="Hjem">
                <img src="nav-logo-hvit.png" className="logo" alt="NAV logo" />
              </a>
              <h1 className="mt-md-2 mt-lg-5 pt-lg-5 hg-title">
                Tør du å <strong>skape</strong>
                <br /> det som betyr noe?
              </h1>
              <p className="lead my-5 hg-text">
                NAV skal utvikle verdens beste velferdsløsninger - for deg og dine, for NAV og for samfunnet. Vi ser
                etter mennesker som tør å ta det ansvaret.
              </p>
            </div>
          </div>

          <div className="row hidden-md-up" aria-hidden="true">
            <div className="col p-0">
              <img src="topp-sm.jpg" className="img-fluid" />
            </div>
          </div>

          <div className="videos-container row">
            <h1 className="title-rekruttering title--padding text-center red-text">Et møte med NAV i 2035</h1>

            <div className="video-rekruttering video--position">
              <iframe
                className="video-frame"
                src="https://player.vimeo.com/video/304780760?title=0&byline=0&portrait=0"
                frameBorder="0"
                webkitallowfullscreen
                mozallowfullscreen
                allowFullScreen
              ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>

            <h1 className="title-segment title--padding text-center red-text">
              Hils på noen av oss som bygger neste generasjons velferdsløsninger
            </h1>

            <h3 className="title-marianne title--padding text-center">Marianne</h3>
            <div className="video-marianne video--height video--position">
              <iframe
                src="https://player.vimeo.com/video/286477034?title=0&byline=0&portrait=0"
                className="video-frame"
                frameBorder="0"
                webkitallowfullscreen
                mozallowfullscreen
                allowFullScreen
              ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>

            <h3 className="title-audun title--padding text-center">Audun</h3>
            <div className="video-audun video--height video--position">
              <iframe
                src="https://player.vimeo.com/video/285805067?title=0&byline=0&portrait=0"
                className="video-frame"
                frameBorder="0"
                webkitallowfullscreen
                mozallowfullscreen
                allowFullScreen
              ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>

            <h3 className="title-ingrid title--padding text-center">Ingrid</h3>
            <div className="video-ingrid video--height video--position">
              <iframe
                src="https://player.vimeo.com/video/285805346?title=0&byline=0&portrait=0"
                className="video-frame"
                frameBorder="0"
                webkitallowfullscreen
                mozallowfullscreen
                allowFullScreen
              ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </div>

          <div className="row my-4">
            <div className="col text-center">
              <h2 id="ledige-stillinger" className="h1 pt-2 my-4 red-text">
                Ledige <strong>stillinger</strong>
              </h2>
            </div>
          </div>

          <div className="row mt-5 justify-content-center mx-0">
            <div className="col col-12 col-md-10 col-lg-8 stilling-header utvikling-bg px-0">
              <h3 className="m-0">Utvikling</h3>
            </div>
          </div>

          <div className="row justify-content-center">
            <ul className="col col-12 col-md-10 col-lg-8 list-unstyled">
              <li className="stilling">
                <i>Frist: 22.11.2020</i>
                <h4>
                  <a
                    href="https://arbeidsplassen.nav.no/stillinger/stilling/656d9e26-0e6c-433c-84a3-b6e973f734f6"
                    target="_blank"
                  >
                    Velferdsstatens kommende pensjonister trenger engasjerte utviklere
                  </a>
                </h4>
                <p className="lead">
                  Er du en utvikler som mener at den beste måten å møte fremtiden på er å skape den selv? Vil du ved
                  hjelp av feedback og læring lage stadig enklere løsninger for brukerne våre?
                </p>
                <a
                  className="navLink"
                  href="https://arbeidsplassen.nav.no/stillinger/stilling/656d9e26-0e6c-433c-84a3-b6e973f734f6"
                  target="_blank"
                >
                  Les mer om stillingen
                </a>
              </li>
            </ul>
          </div>

          <div className="row mt-5 justify-content-center mx-0">
            <div className="col col-12 col-md-10 col-lg-8 stilling-header design-bg px-0">
              <h3 className="m-0">Design</h3>
            </div>
          </div>
          <div className="row justify-content-center">
            <ul className="col col-12 col-md-10 col-lg-8 list-unstyled">
              <li className="stilling">
                <i>Frist: 15.11.2020</i>
                <h4>
                  <a
                    href="https://arbeidsplassen.nav.no/stillinger/stilling/63cb1b7f-d41d-40f6-bcc1-bb3f0840ae7f"
                    target="_blank"
                  >
                    Er du en samfunnsengasjert student som ønsker å bygge erfaring som tjenestedesigner?
                  </a>
                </h4>
                <p className="lead">
                  Vil du ha en sommerjobb i 2021 hvor du kan gjøre en stor forskjell for våre brukere og samtidig jobbe
                  med spennende og ny teknologi? I NAV IT bygger vi nå opp et av de sterkeste designmiljøene i Norge og
                  vi ønsker å få med deg på laget sommeren 2021 for at du skal utvikle deg og få et innblikk i alt det
                  spennende vi holder på med.
                </p>
                <a
                  className="navLink"
                  href="https://arbeidsplassen.nav.no/stillinger/stilling/63cb1b7f-d41d-40f6-bcc1-bb3f0840ae7f"
                  target="_blank"
                >
                  Les mer om stillingen
                </a>
              </li>

              <li className="stilling">
                <i>Frist: 15.11.2020</i>
                <h4>
                  <a
                    href="https://arbeidsplassen.nav.no/stillinger/stilling/26f1f2ce-924e-4fab-9be7-ae2723248b01"
                    target="_blank"
                  >
                    Er du en samfunnsengasjert student som ønsker å bygge erfaring som design-researcher?
                  </a>
                </h4>
                <p className="lead">
                  Vil du ha en sommerjobb i 2021 hvor du kan gjøre en stor forskjell for våre brukere og samtidig jobbe
                  med spennende og ny teknologi? I NAV IT bygger vi nå opp et av de sterkeste designmiljøene i Norge og
                  vi ønsker å få med deg på laget sommeren 2021 for at du skal utvikle deg og få et innblikk i alt det
                  spennende vi holder på med.
                </p>
                <a
                  className="navLink"
                  href="https://arbeidsplassen.nav.no/stillinger/stilling/26f1f2ce-924e-4fab-9be7-ae2723248b01"
                  target="_blank"
                >
                  Les mer om stillingen
                </a>
              </li>

              <li className="stilling">
                <i>Frist: 15.11.2020</i>
                <h4>
                  <a
                    href="https://arbeidsplassen.nav.no/stillinger/stilling/160742cc-57fd-49e6-9221-afe56437854b"
                    target="_blank"
                  >
                    Er du en samfunnsengasjert student som ønsker å bygge erfaring som utvikler?
                  </a>
                </h4>
                <p className="lead">
                  Vil du ha en sommerjobb i 2021 hvor du kan gjøre en stor forskjell for våre brukere og samtidig jobbe
                  med spennende og ny teknologi? I NAV IT bygger vi nå opp et av de sterkeste designmiljøene i Norge og
                  vi ønsker å få med deg på laget sommeren 2021 for at du skal utvikle deg og få et innblikk i alt det
                  spennende vi holder på med.
                </p>
                <a
                  className="navLink"
                  href="https://arbeidsplassen.nav.no/stillinger/stilling/160742cc-57fd-49e6-9221-afe56437854b"
                  target="_blank"
                >
                  Les mer om stillingen
                </a>
              </li>
            </ul>
          </div>

          <div className="row justify-content-center mb-4 pb-4">
            <div className="col col-12 col-lg-6">
              <h2 className="text-center mb-4 mb-md-3 mt-5 red-text">Ingen stillinger som passer din profil?</h2>
              <p className="text-center mb-md-4">Ta kontakt for en uforpliktende prat:</p>
              <div className="text-center">
                <h5>Stig Øwre</h5>
                <p>
                  Seksjonssjef Utvikling
                  <br />
                  <a href="mailto:stig.owre@nav.no">stig.owre@nav.no</a>
                </p>
              </div>
            </div>
          </div>

          <div className="row pb-5 pb-md-0 quote-bg">
            <div className="col col-12 col-md-5 push-md-1 col-lg-4 push-lg-2 py-3 pb-sm-5 quote-content">
              <div className="white-bg mt-md-5 p-5">
                <blockquote className="lead mt-3 mb-lg-5 pb-lg-5">
                  &laquo;Jeg var lei av å sitte passiv på utsiden og lese om alle IT-utfordringene i det offentlige,
                  uten å kunne gjøre en forskjell. I NAV får jeg være med å påvirke og sette ny kurs. Utfordringene
                  løser vi sammen.&raquo;
                  <footer className="mt-3">
                    <cite>
                      <span className="h3">Terje Heen</span>, <span className="blue-text d-block">Utvikler</span>
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Legacy;
