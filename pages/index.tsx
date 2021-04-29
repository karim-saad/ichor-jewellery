import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "tailwindcss/tailwind.css";

const Home: React.FC = () => {
  return (
    <div>
      <div className="text-xl flex justify-center my-2">Hello!</div>
      <div className="flex justify-center my-1">
        Thanks for visiting our website, we are so appreciative to have you
        here!
      </div>
      <div className="flex justify-center my-1">
        Unfortunately, we are still under construction, so please check back
        soon.
      </div>
      <div className="flex justify-center text-8xl my-1">
        <a href="https://www.instagram.com/ichor.jewellery/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
};

export default Home;
