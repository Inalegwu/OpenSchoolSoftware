import { BlitzPage, Routes } from "@blitzjs/next"
import { useMutation } from "@blitzjs/rpc"
import { Router } from "next/router"
import React, { Suspense } from "react"
import logout from "src/auth/mutations/logout"
import Layout from "src/core/layouts/Layout"
import { useMySchool } from "src/school/hooks/useMySchool"
import { Box, Button, LinkButton } from "src/styles/components"
import { useCurrentUser } from "src/users/hooks/useCurrentUser"
import { styled } from "stitches.config"

const Title = styled("h1", {
  fontSize: "20px",
  color: "$primary",
})
const Paragraph = styled("p", {
  fontSize: "12px",
})

const actions = ["HOME", "STUDENTS", "SCHEDULE", "EXAMS", "CLASSES"]

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const mySchool = useMySchool()
  return (
    <Box css={{ width: "100%", padding: "$1" }}>
      <Title css={{ fontSize: "15px" }}>{currentUser?.email}</Title>
      <Paragraph css={{ fontWeight: "bold" }}>
        {currentUser?.memberShips[0]?.role}-{mySchool?.schoolName}
      </Paragraph>
    </Box>
  )
}

const Dashboard: BlitzPage = () => {
  const [logoutMutation] = useMutation(logout)
  const [globalAction, setGlobalAction] = React.useState<string>("HOME")

  return (
    <Layout title="Dashboard">
      <Box css={{ width: "100%", background: "$background", height: "100vh", display: "flex" }}>
        <Box
          css={{
            width: "20%",
            background: "$white",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "$1",
            gap: "$2",
          }}
        >
          <Title>OpenSchoolSoftware</Title>
          <Box
            css={{
              height: "80%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "$2",
            }}
          >
            {actions.map((action, index) => {
              return (
                <Button
                  onClick={() => {
                    setGlobalAction(action)
                  }}
                  key={index}
                  css={{
                    borderRadius: "99999px",
                    textAlign: "flex-start",
                    display: "flex",
                    background: `${globalAction === action ? "$primary" : "transparent"}`,
                    color: `${globalAction === action ? "$white" : "$black"}`,
                    fontWeight: "bold",
                  }}
                >
                  {action}
                </Button>
              )
            })}
          </Box>
          <Box
            css={{
              height: "20%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              gap: "$2",
            }}
          >
            <Suspense fallback="Loading...">
              <UserInfo />
            </Suspense>
            <LinkButton href={Routes.Home()} css={{ width: "95%", background: "transparent" }}>
              Go Back
            </LinkButton>
            <Button
              css={{
                borderRadius: "99999px",
                color: "white",
                background: "$primary",
                width: "100%",
              }}
              onClick={async () => {
                await logoutMutation()
              }}
            >
              Logout
            </Button>
          </Box>
        </Box>
        <Box css={{ width: "80%", height: "100%", background: "$white" }}></Box>
      </Box>
    </Layout>
  )
}

Dashboard.suppressFirstRenderFlicker = true
Dashboard.authenticate
export default Dashboard
