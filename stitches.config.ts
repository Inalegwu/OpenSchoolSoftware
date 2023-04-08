import { createStitches } from "@stitches/react"

export const { styled } = createStitches({
  theme: {
    colors: {
      primary: "#0e45bb",
      secondary: "#175fe9",
      background: "#ecececd7",
      black: "#000000",
      white: "#ffffff",
    },
    space: {
      1: "10px",
      2: "12px",
      4: "16px",
      5: "32px",
      6: "40px",
      7: "42px",
    },
  },
})
