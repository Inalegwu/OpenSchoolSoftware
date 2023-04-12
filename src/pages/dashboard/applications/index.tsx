import { BlitzPage } from "@blitzjs/next"
import { useQuery } from "@blitzjs/rpc"
import { Suspense } from "react"
import fetchApplications from "src/apply/queries/fetchApplications"
import DashboardLayout from "src/dashboard/layouts/Layout"
import { Box, Title } from "src/styles/components"

const ApplicationsView = () => {
  const [applications] = useQuery(fetchApplications, null)

  if (!applications) return <Title>Loading...</Title>

  if (applications.length === 0)
    return <Title css={{ color: "$primary" }}>Your School Has No Recent Applications</Title>

  return (
    <Box
      css={{
        width: "100%",
        height: "100vh",
        background: "$backgroundDark",
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box css={{ width: "80%", height: "70%", background: "$black", borderRadius: "10px" }}>
        {applications.map((application) => {
          return <Box key={application.id}>{application.studentId}</Box>
        })}
      </Box>
    </Box>
  )
}

const ApplicationsPage: BlitzPage = () => {
  return (
    <DashboardLayout>
      <Suspense fallback="Loading...">
        <ApplicationsView />
      </Suspense>
    </DashboardLayout>
  )
}

export default ApplicationsPage
