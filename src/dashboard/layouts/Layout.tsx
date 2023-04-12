import { BlitzLayout, Routes } from "@blitzjs/next"
import Head from "next/head"
import { Suspense } from "react"
import { Box, LinkButton } from "src/styles/components"
import { useCurrentUser } from "src/users/hooks/useCurrentUser"

const ManageSchool = () => {
  const currentUser = useCurrentUser()
  if (currentUser?.role === "CUSTOMER" && currentUser.memberShips[0]?.role === "OWNER") {
    return (
      <>
        <LinkButton
          css={{
            width: "6%",
            display: "flex",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
            background: "$black",
            color: "$white",
          }}
          href={Routes.TeachersPage()}
        >
          Teachers
        </LinkButton>
        <LinkButton
          css={{
            width: "6%",
            display: "flex",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
            background: "$black",
            color: "$white",
          }}
          href={Routes.ApplicationsPage()}
        >
          Applications
        </LinkButton>
      </>
    )
  } else {
    return <></>
  }
}

const DashboardLayout: BlitzLayout<{ children: React.ReactNode | React.ReactNode[] }> = ({
  children,
}) => {
  return (
    <Box css={{ width: "100%", height: "100vh", background: "$backgroundDark" }}>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        css={{
          height: "200px",
          width: "200px",
          background: "$primary",
          filter: "blur(200px)",
          position: "absolute",
          zIndex: 0,
        }}
      />
      <Box
        css={{
          width: "100%",
          height: "5vh",
          background: "transparent",
          backdropFilter: "blur(200px)",
          padding: "$4",
          display: "flex",
          gap: "$2",
          position: "fixed",
        }}
      >
        <LinkButton
          css={{
            width: "6%",
            display: "flex",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
            background: "$black",
            color: "$white",
          }}
          href={Routes.Dashboard()}
        >
          Home
        </LinkButton>
        <LinkButton
          css={{
            width: "6%",
            display: "flex",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
            background: "$black",
            color: "$white",
          }}
          href={Routes.StudentPage()}
        >
          Students
        </LinkButton>
        <Suspense fallback="Loading...">
          <ManageSchool />
        </Suspense>
      </Box>
      {children}
    </Box>
  )
}

export default DashboardLayout
