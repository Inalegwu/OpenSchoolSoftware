import { BlitzPage, Routes } from "@blitzjs/next"
import { useMutation } from "@blitzjs/rpc"
import router from "next/router"
import LabeledTextField from "src/core/components/LabeledTextField"
import DashboardLayout from "src/dashboard/layouts/Layout"
import { Box, StyledForm, Title } from "src/styles/components"
import inviteTeacher from "src/users/mutations/inviteTeacher"
import { InviteTeacherSchema } from "src/users/validation"

const InviteTeacher: BlitzPage = () => {
  const [inviteTeacherMutation] = useMutation(inviteTeacher)
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
        <StyledForm
          schema={InviteTeacherSchema}
          css={{
            background: "$white",
            width: "80%",
            height: "60%",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "$2",
            padding: "$4",
          }}
          submitText="Invite Teacher"
          initialValues={{ firstName: "", lastName: "", email: "" }}
          onSubmit={async (values) => {
            await inviteTeacherMutation(values)
            return router.push(Routes.TeachersPage())
          }}
        >
          <Title>Invite A Teacher</Title>

          <LabeledTextField label="Invite Email" name="email" />
          <LabeledTextField label="First Name" name="firstName" />
          <LabeledTextField label="Last Name" name="lastName" />
        </StyledForm>
      </Box>
    </DashboardLayout>
  )
}

export default InviteTeacher
