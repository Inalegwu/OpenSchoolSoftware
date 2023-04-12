import { createStitches } from "@stitches/react"

// backgroundDark:"#141414"
// backgroundDark:"#202020"
// backgroundDark:"#2e2e2e"
// backgroundDark:"#2e2e2e"
// primary: "#0e45bb"
//  primary: "#4e1469"

export const { styled } = createStitches({
  theme: {
    colors: {
      primary: "#0e45bb",
      secondary: "#175fe9",
      background: "#ecececd7",
      backgroundDark: "#141414",
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
      8: "48px",
      9: "50px",
      10: "52px",
    },
  },
})
