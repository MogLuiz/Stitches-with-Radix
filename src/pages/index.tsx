// Next Components
import Head from "next/head";

// Types
import type { NextPage } from "next";

// Stitches styles
import { createStitches } from "@stitches/core";

const { css } = createStitches({
  theme: {
    colors: {
      baseGray: "gainsboro",
      darkGray: "lightgray",
      basePurple: "blueviolet",
      darkPurple: "darkviolet",
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "30px",
      7: "35px",
    },
    sizes: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "30px",
      7: "35px",
    },
    radii: {
      round: "9999px",
    },
    fontSizes: {
      1: "13px",
      2: "15px",
    },
  },
});

const body = css({ padding: 40 });

const button = css({
  appearance: "none",
  border: "none",

  borderRadius: "$round",

  variants: {
    size: {
      1: {
        height: "$5",
        fontSize: "$1",
      },
      2: {
        height: "$7",
        fontSize: "$2",
      },
    },
    variant: {
      gray: {
        backgroundColor: "$baseGray",

        "&:hover": {
          backgroundColor: "$darkGray",
        },
      },
      purple: {
        backgroundColor: "$basePurple",
        "&:hover": {
          backgroundColor: "$darkPurple",
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
        borderColor: "$darkGray",
      },
    },
    {
      variant: "purple",
      outlined: true,
      css: {
        borderColor: "$darkPurple",
        color: "$darkPurple",
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
