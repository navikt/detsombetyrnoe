import Head from "next/head";
import useSWR from "swr";
import Stillinger from "../../components/stillinger";

const fetcher = (url) => fetch(url).then((r) => r.json());

function Legacy() {
  const { data: stillinger, error } = useSWR("/api/stillinger", fetcher);

  return (
    <>
      <Head>
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
              <img src="legacy/topp-sm.jpg" className="img-fluid" />
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

          {stillinger && <Stillinger stillinger={stillinger} />}

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
