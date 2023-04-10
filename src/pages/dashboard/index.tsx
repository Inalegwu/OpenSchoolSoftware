import { BlitzPage, Ctx, Routes } from "@blitzjs/next"
import { useMutation } from "@blitzjs/rpc"
import { MemberShipRole } from "@prisma/client"
import React, { Suspense } from "react"
import logout from "src/auth/mutations/logout"
import Loading from "src/core/components/Loading"
import DashboardLayout from "src/dashboard/layouts/Layout"
import { useMySchool } from "src/school/hooks/useMySchool"
import { Box, Button, Title, Paragraph } from "src/styles/components"
import { useCurrentUser } from "src/users/hooks/useCurrentUser"

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const mySchool = useMySchool()
  const [logoutMutation, { isLoading }] = useMutation(logout)
  return (
    <Box css={{ width: "80%", height: "70%", background: "$black", borderRadius: "10px" }}>
      <Box
        css={{
          height: "6%",
          background: "transparent",
          padding: "$4",
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "space-between",
          borderRadius: "10px",
        }}
      >
        <Box>
          <Title css={{ color: "$white" }}>{mySchool?.schoolName}</Title>
          <Paragraph css={{ color: "$white" }}>
            {currentUser?.email}-{currentUser?.memberShips[0]?.role}
          </Paragraph>
        </Box>
        <Button
          onClick={async () => {
            await logoutMutation()
          }}
          css={{ width: "20%", borderRadius: "99999px" }}
          variant="primary"
        >
          Logout
        </Button>
      </Box>
      <Box css={{ height: "94%", borderRadius: "10px", padding: "$4" }}>
        <Title css={{ color: "$white" }}>Students-{mySchool?.students.length}</Title>
        <Title css={{ color: "$white" }}>Teachers-{mySchool?.teachers.length}</Title>
      </Box>
    </Box>
  )
}

const Dashboard: BlitzPage = () => {
  return (
    <DashboardLayout>
      <Box
        css={{
          width: "100%",
          height: "100vh",
          background: "$backgroundDark",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Suspense fallback={<Loading />}>
          <UserInfo />
        </Suspense>
      </Box>
    </DashboardLayout>
  )
}

Dashboard.authenticate = { redirectTo: Routes.LoginPage() }
Dashboard.suppressFirstRenderFlicker = true
export default Dashboard
