import Vimeo from "@u-wave/react-vimeo";
import { groq } from "next-sanity";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import useSWR from "swr";
import Stillinger from "../components/stillinger";
import { getClient, PortableText, urlFor, usePreviewSubscription } from "../lib/sanity";
import GithubrepoLenke from "../components/GithubrepoLenke";

const frontpageQuery = groq`*[_id == "forside"][0]
{
    tittel,
    beskrivelse,
    "bagrunnsbildeDesktop": bagrunnsbildeDesktop.asset,
    "bakgrunnsbildeMobil": bakgrunnsbildeMobil.asset,
    "navLogo": navLogo.asset,
    "bolker": bolker[],
}`;

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function SanityFrontpage({ data, preview }) {
  const { data: frontpage } = usePreviewSubscription(frontpageQuery, {
    initialData: data,
    enabled: preview,
  });

  const { data: stillinger, error } = useSWR("/api/stillinger", fetcher);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={frontpage.tittel} />
        <meta property="og:site_name" content="NAV IT" />
        <meta property="og:url" content="http://www.detsombetyrnoe.no/" />
        <meta property="og:description" content={frontpage.beskrivelse} />
        <meta property="og:image" content="http://www.detsombetyrnoe.no/detsombetyrnoe.jpg" />
        <link href="https://www.nav.no/dekoratoren/media/favicon.ico" rel="icon" type="image/x-icon" />
        <title>{frontpage.tittel}</title>
        <link rel="stylesheet" href="legacy/bootstrap.css" />
        <link rel="stylesheet" href="legacy/main.css" />
      </Head>

      <main role="main">
        <div className="container-fluid">
          <div className="row topp-bg p-4">
            <div className="text-white col col-12 col-md-6 px-md-5 pb-4">
              <a className="my-md-5 mt-3 mt-lg-5 mb-5" href="http://www.nav.no" title="Hjem">
                <Image src={urlFor(frontpage.navLogo).url()} alt="NAV logo" width={140} height={88} />
              </a>
              <h1 className="mt-md-2 mt-lg-5 pt-lg-5 hg-title">{frontpage.tittel}</h1>
              <p className="lead my-5 hg-text">{frontpage.beskrivelse}</p>
            </div>
          </div>

          <GithubrepoLenke />

          {frontpage.bolker.map((bolk) => {
            if (bolk._type === "innholdsbolk") {
              return (
                <div className="row justify-content-center mb-4 pb-4">
                  <div className="col col-12 col-lg-6">
                    <h2 className="text-center mb-4 mb-md-3 mt-5 red-text">{bolk.tittel}</h2>
                    {bolk.innhold && (
                      <div className="text-center">
                        <PortableText blocks={bolk.innhold} />
                      </div>
                    )}
                    {bolk.videoer &&
                      (bolk.videoer.length == 1 ? (
                        <Vimeo video={bolk.videoer[0].url} />
                      ) : (
                        bolk.videoer.map((video) => {
                          return (
                            <>
                              {video.tittel && <h3 className="title--padding text-center">{video.tittel}</h3>}
                              <Vimeo video={video.url} />
                            </>
                          );
                        })
                      ))}
                  </div>
                </div>
              );
            }
            if (bolk._type === "stillinger") {
              return <>{stillinger && <Stillinger stillinger={stillinger} />}</>;
            }
            if (bolk._type === "sitat") {
              return (
                <div className="row pb-5 pb-md-0 quote-bg">
                  <div className="col col-12 col-md-5 push-md-1 col-lg-4 push-lg-2 py-3 pb-sm-5 quote-content">
                    <div className="white-bg mt-md-5 p-5">
                      <blockquote className="lead mt-3 mb-lg-5 pb-lg-5">
                        &laquo;{bolk.sitat}&raquo;
                        <footer className="mt-3">
                          <cite>
                            <span className="h3">{bolk.navn}</span>,{" "}
                            <span className="blue-text d-block">{bolk.tittel}</span>
                          </cite>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const frontpage = await getClient(preview).fetch(frontpageQuery);

  return {
    props: {
      preview,
      data: frontpage,
    },
    revalidate: 60,
  };
}
