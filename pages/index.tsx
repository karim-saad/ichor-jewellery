import Head from "next/head";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "tailwindcss/tailwind.css";

const LandingPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Ichor Jewellery</title>
        <link rel="shortcut icon" href="/necklace.svg" />
        <meta property="og:title" content="Ichor Jewellery" key="title" />
      </Head>
      <div className="text-2xl font-medium flex justify-center my-2">
        Hello!
      </div>
      <div className="flex justify-center my-1">
        Thanks for visiting <p className="font-medium ml-1">Ichor Jewellery</p>,
        we are so appreciative to have you here!
      </div>
      <div className="flex justify-center my-1">
        Unfortunately, we are still under construction, so please check back
        soon.
      </div>
      <div className="text-2xl">
        <a href="https://www.instagram.com/ichor.jewellery/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
