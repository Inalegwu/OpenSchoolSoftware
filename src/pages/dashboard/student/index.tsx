import { BlitzPage } from "@blitzjs/auth"
import { Routes } from "@blitzjs/next"
import { useQuery, useMutation, invalidateQuery } from "@blitzjs/rpc"
import { Suspense } from "react"
import Loading from "src/core/components/Loading"
import DashboardLayout from "src/dashboard/layouts/Layout"
import { Box, Button, LinkButton, Paragraph, Title } from "src/styles/components"
import fetchStudents from "src/school/queries/fetchStudents"
import deleteStudent from "src/users/mutations/deleteStudent"
import { FiTrash, FiEye } from "react-icons/fi"

const StudentsView = () => {
  const [students] = useQuery(fetchStudents, null)
  const [deleteStudentMutation] = useMutation(deleteStudent, {
    onSuccess: async () => {
      await invalidateQuery(fetchStudents)
    },
  })

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
      <Box
        css={{
          width: "99%",
          height: "10%",
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Title css={{ fontSize: "25px", color: "$white" }}>My Students</Title>
        <LinkButton
          variant="primary"
          href={Routes.CreateStudent()}
          css={{ borderRadius: "99999px", fontSize: "12px" }}
        >
          Add Student
        </LinkButton>
      </Box>
      <Box
        css={{
          height: "90%",
          overflowY: "scroll",
          display: "flex",
          flexDirection: "column",
          gap: "$2",
        }}
      >
        {students?.map((student) => {
          return (
            <Box
              key={student.user?.studentId}
              css={{
                width: "97%",
                height: "5vh",
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                justifyContent: "space-between",
                background: "$backgroundDark",
                padding: "$2",
                borderRadius: "5px",
                "&:hover": {
                  background: "$backgroundDark",
                },
              }}
            >
              <Box
                css={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  alignContent: "flex-start",
                }}
              >
                <Title css={{ fontSize: "14px", color: "$primary" }}>{student.user?.name}</Title>
                <Paragraph css={{ fontSize: "12px" }}>{student.user?.email}</Paragraph>
              </Box>
              <Box css={{ display: "flex", gap: "$2" }}>
                <LinkButton
                  variant="ghost"
                  css={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    background: "$black",
                    borderRadius: "5px",
                    "&:hover": { background: "$black" },
                  }}
                  href={Routes.StudentDetailsPage({ studentid: student.user?.studentId! })}
                >
                  <FiEye size={16} color="#0e45bb" />
                </LinkButton>
                <Button
                  onClick={async () => {
                    await deleteStudentMutation(student.user?.studentId!)
                  }}
                  css={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    borderRadius: "5px",
                    background: "$black",
                    "&:hover": { background: "$black" },
                  }}
                >
                  <FiTrash size={16} color="red" />
                </Button>
              </Box>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

const StudentPage: BlitzPage = () => {
  return (
    <DashboardLayout>
      <Box
        css={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Suspense fallback={<Loading />}>
          <StudentsView />
        </Suspense>
      </Box>
    </DashboardLayout>
  )
}

export default StudentPage
