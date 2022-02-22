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

  borderRadius: "9999px",

  variants: {
    size: {
      1: {
        height: 25,
        fontSize: 13,
      },
      2: {
        height: 35,
        fontSize: 15,
      },
    },
    variant: {
      gray: {
        backgroundColor: "Gainsboro",

        "&:hover": {
          backgroundColor: "LightGray",
        },
      },
      purple: {
        backgroundColor: "BlueViolet",
        "&:hover": {
          backgroundColor: "DarkViolet",
        },
      },
    },

    outlined: {
      true: {
        border: "1px solid",
        background: "transparent",
      },
    },
  },

  compoundVariants: [
    {
      variant: "gray",
      outlined: true,
      css: {
        borderColor: "LightGray",
      },
    },
    {
      variant: "purple",
      outlined: true,
      css: {
        borderColor: "DarkViolet",
        color: "DarkViolet",
        "&:hover": {
          color: "White",
        },
      },
    },
  ],

  defaultVariants: {
    variant: "gray",
    size: 1,
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
      <button className={button({ outlined: true })}>Button Outlined</button>
      <button className={button({ variant: "purple", outlined: true })}>
        Purple Outlined
      </button>
      <hr />
      <button
        className={button({
          size: {
            "@initial": "1",
            "@media (min-width: 500px)": "2",
          },
        })}
      >
        Responsive Button
      </button>
    </div>
  );
};

export default Home;
