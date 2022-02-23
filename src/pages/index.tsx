// Next Components
import Head from "next/head";

// Types
import type { NextPage } from "next";

// Radix
import { violet, slate } from "@radix-ui/colors";

// Stitches styles
import { createStitches, ScaleValue } from "@stitches/core";

const { css } = createStitches({
  theme: {
    colors: {
      ...violet,
      ...slate,
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
  utils: {
    paddingX: (value: ScaleValue<"space">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: ScaleValue<"space">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});

const body = css({ padding: 40 });

const button = css({
  appearance: "none",
  border: "none",

  borderRadius: "$round",
  paddingX: "$2",

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
        backgroundColor: "$slate3",
        color: "$slate12",
        "&:hover": {
          backgroundColor: "$slate4",
        },
      },
      purple: {
        backgroundColor: "$violet3",
        color: "$violet11",
        "&:hover": {
          backgroundColor: "$violet4",
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
        borderColor: "$slate7",
      },
    },
    {
      variant: "purple",
      outlined: true,
      css: {
        borderColor: "$violet7",
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
      <button className={button({ variant: "purple" })}>Open Profile</button>
    </div>
  );
};

export default Home;
