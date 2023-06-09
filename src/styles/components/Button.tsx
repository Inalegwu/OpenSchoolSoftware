import { styled } from "stitches.config"

export const Button = styled("button", {
  border: "none",
  padding: "$1",
  background: "$background",
  cursor: "pointer",
  fontWeight: "600",
  outline: "none",

  "&:hover": {
    background: "$secondary",
    color: "$white",
  },

  variants: {
    variant: {
      primary: {
        background: "$primary",
        color: "$white",
      },
      outline: {
        background: "transparent",
        border: "1px solid $primary",
        color: "$primary",
        "&:hover": {
          background: "$primary",
          color: "$white",
        },
      },
      ghost: {
        background: "transparent",
        color: "$primary",
        "&:hover": {
          background: "$primary",
          color: "$white",
        },
      },
    },
  },
})
