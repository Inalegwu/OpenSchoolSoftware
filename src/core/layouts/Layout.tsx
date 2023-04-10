import Head from "next/head"
import React, { FC } from "react"
import { BlitzLayout } from "@blitzjs/next"
import { Box } from "src/styles/components"

export const dynamic = "force-dynamic"

const Layout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <Box css={{ background: "$background" }}>
      <Head>
        <title>{title || "SchoolDeck"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </Box>
  )
}

export default Layout
