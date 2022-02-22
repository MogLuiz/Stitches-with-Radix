// Next Components
import Head from "next/head";

// Types
import type { NextPage } from "next";

// Stitches styles
import { css } from "@stitches/core";

const body = css({ padding: 40 });

const button = css({
  appearance: "none",
  border: "none",
  height: 25,
  fontSize: 13,

  borderRadius: "9999px",
  backgroundColor: "Gainsboro",

  "&:hover": {
    backgroundColor: "LightGray",
  },

  variants: {
    variant: {
      purple: {
        backgroundColor: "BlueViolet",
        "&:hover": {
          backgroundColor: "DarkViolet",
        },
      },
    },
  },
});

const Home: NextPage = () => {
  return (
    <div className={body()}>
      <Head>
        <title>Stitches and Radix</title>
      </Head>
      <button className={button()}>Salvar</button>
      <button className={button({ variant: "purple" })}>Button Purple</button>
    </div>
  );
};

export default Home;
