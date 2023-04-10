import { BlitzPage } from "@blitzjs/next"
import { useQuery } from "@blitzjs/rpc"
import { useRouter } from "next/router"
import { Suspense } from "react"
import Loading from "src/core/components/Loading"
import DashboardLayout from "src/dashboard/layouts/Layout"
import { Box, Paragraph, Title } from "src/styles/components"
import fetchTeacher from "src/school/queries/fetchTeacher"

interface TeacherDataProps {
  teacherId: string
}

const TeacherData = ({ teacherId }: TeacherDataProps) => {
  const [teacher] = useQuery(fetchTeacher, teacherId)
  return (
    <Box css={{ width: "80%", height: "70%", background: "$white", borderRadius: "10px" }}>
      <Box css={{ height: "5vh", display: "flex", flexDirection: "column", padding: "$2" }}>
        <Title>{teacher?.user?.name}</Title>
        <Paragraph>{teacher?.user?.email}</Paragraph>
      </Box>
    </Box>
  )
}

const TeacherPage: BlitzPage = () => {
  const params = useRouter()

  const { teacherId } = params.query

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
          <TeacherData teacherId={teacherId as string} />
        </Suspense>
      </Box>
    </DashboardLayout>
  )
}

export default TeacherPage
