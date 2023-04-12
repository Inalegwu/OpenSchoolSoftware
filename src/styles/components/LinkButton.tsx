import Link from "next/link"
import { styled } from "stitches.config"

export const LinkButton = styled(Link, {
  appearance: "none",
  border: "none",
  padding: "$1",
  borderRadius: "99999px",
  background: "#ececec",
  color: "$black",
  fontSize: "12px",
  fontWeight: "600",

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
      },
    },
  },
})
