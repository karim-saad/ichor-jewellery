import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";

interface Props {}

const Home: React.FC<Props> = (props) => {
  return (
    <div className="pt-5">
      <h1>Hello!</h1>
      <p>
        Thanks for visiting our website, we are so appreciative to have you
        here!
      </p>
      <p>
        Unfortunately, we are still under construction, so please check back
        soon!
      </p>
      <p>
        In the meantime, check our{" "}
        <a href="https://www.instagram.com/ichor.jewellery/">our Instagram</a>
      </p>
    </div>
  );
};

export default Home;
