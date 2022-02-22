// Next Components
import Head from "next/head";

// Types
import type { NextPage } from "next";

// Stitches styles
import { css } from "@stitches/core";

const button = css({
  appearance: "none",
  border: "none",
  height: 25,
  fontSize: 13,

  borderRadius: "9999px",
  backgroundColor: "Gainsboro",
});

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Stitches and Radix</title>
      </Head>
      <button className={button()}>Salvar</button>
    </div>
  );
};

export default Home;
