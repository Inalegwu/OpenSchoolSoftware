import { BlitzPage, Routes } from "@blitzjs/next"
import { invalidateQuery, useMutation, useQuery } from "@blitzjs/rpc"
import { Suspense } from "react"
import { FiEye, FiTrash } from "react-icons/fi"
import Loading from "src/core/components/Loading"
import DashboardLayout from "src/dashboard/layouts/Layout"
import { Box, Button, LinkButton, Paragraph, Title } from "src/styles/components"
import deleteTeacher from "src/users/mutations/deleteTeacher"
import fetchTeachers from "src/school/queries/fetchTeachers"

const TeachersView = () => {
  const [teachers] = useQuery(fetchTeachers, null)
  const [deleteTeacherMutation] = useMutation(deleteTeacher, {
    onSuccess: async () => {
      await invalidateQuery(fetchTeachers)
    },
  })
  return (
    <Box css={{ width: "80%", height: "75%", background: "$black", borderRadius: "10px" }}>
      <Box
        css={{
          height: "6%",
          display: "flex",
          borderRadius: "10px",
          padding: "$2",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "space-between",
        }}
      >
        <Title css={{ color: "$white" }}>My Teachers</Title>
        <LinkButton variant="primary" href={Routes.InviteTeacher()}>
          Invite A Teacher
        </LinkButton>
      </Box>
      <Box css={{ padding: "$2", height: "94%", borderRadius: "10px", overflowY: "scroll" }}>
        {teachers.map((teacher) => {
          return (
            <Box
              css={{
                width: "98%",
                height: "6vh",
                background: "$backgroundDark",
                borderRadius: "5px",
                padding: "$1",
                display: "flex",
                alignContent: "center",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              key={teacher.id}
            >
              <Box
                css={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <Title css={{ fontSize: "14px", color: "$primary" }}>{teacher.user?.name}</Title>
                <Paragraph>{teacher.user?.email}</Paragraph>
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
                  href={Routes.TeacherPage({ teacherId: teacher.id })}
                >
                  <FiEye size={16} color="#0e45bb" />
                </LinkButton>
                <Button
                  onClick={async () => {
                    await deleteTeacherMutation(teacher.id)
                  }}
                  css={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    background: "$black",
                    borderRadius: "5px",
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

const TeachersPage: BlitzPage = () => {
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
          <TeachersView />
        </Suspense>
      </Box>
    </DashboardLayout>
  )
}

export default TeachersPage
