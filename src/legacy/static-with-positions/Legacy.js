import Head from "next/head";
import Stillinger from "../../components/Stillinger";
import GithubrepoLenke from "../../components/GithubrepoLenke";
import Julekort from "../../components/julekort/Julekort";
import Githubstats from "../../components/githubstats/Githubstats";

function Legacy() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="legacy/bootstrap.css" />
        <link rel="stylesheet" href="legacy/main.css" />
        <title>Tør du å skape det som betyr noe?</title>
      </Head>

      <main role="main">
        <Julekort />
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

          <GithubrepoLenke />

          <div className="row hidden-md-up" aria-hidden="true">
            <div className="col p-0">
              <img src="legacy/topp-sm.jpg" className="img-fluid" />
            </div>
          </div>

          <Stillinger />

          <div className="row justify-content-center mb-4 pb-4">
            <div className="col col-12 col-lg-6">
              <h2 className="text-center mb-4 mb-md-3 mt-5 red-text">Ingen stillinger som passer din profil?</h2>
              <p className="text-center mb-md-4">Ta kontakt for en uforpliktende prat:</p>
              <div className="text-center">
                <p>Stig Øwre</p>
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
        <Githubstats />
      </main>
    </>
  );
}

export default Legacy;
