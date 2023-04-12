import { BlitzPage } from "@blitzjs/next"
import { useQuery } from "@blitzjs/rpc"
import { useRouter } from "next/router"
import { Suspense } from "react"
import Loading from "src/core/components/Loading"
import DashboardLayout from "src/dashboard/layouts/Layout"
import { Box, Paragraph, Title } from "src/styles/components"
import fetchStudent from "src/school/queries/fetchStudent"

interface StudentDataProps {
  studentId: string
}

const StudentData = ({ studentId }: StudentDataProps) => {
  const [student] = useQuery(fetchStudent, studentId)
  return (
    <Box
      css={{
        width: "80%",
        height: "70%",
        background: "$black",
        borderRadius: "10px",
        padding: "$2",
        display: "flex",
        flexDirection: "column",
        gap: "$2",
      }}
    >
      <Box>
        <Title css={{ color: "$primary" }}>{student?.name}</Title>
        <Paragraph>{student?.email}</Paragraph>
      </Box>
    </Box>
  )
}

const StudentDetailsPage: BlitzPage = () => {
  const router = useRouter()
  const { studentid } = router.query
  return (
    <DashboardLayout>
      <Box
        css={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Suspense fallback={<Loading />}>
          <StudentData studentId={studentid as string} />
        </Suspense>
      </Box>
    </DashboardLayout>
  )
}

export default StudentDetailsPage
