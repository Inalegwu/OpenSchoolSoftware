import { BlitzPage, Routes } from "@blitzjs/next"
import { useMutation } from "@blitzjs/rpc"
import router from "next/router"
import { FiArrowLeft } from "react-icons/fi"
import LabeledTextField from "src/core/components/LabeledTextField"
import DashboardLayout from "src/dashboard/layouts/Layout"
import { Box, LinkButton, StyledForm } from "src/styles/components"
import createStudent from "src/users/mutations/createStudent"
import { CreateStudentSchema } from "src/users/validation"

const CreateStudent: BlitzPage = () => {
  const [createStudentMutation] = useMutation(createStudent)
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
          schema={CreateStudentSchema}
          submitText="Create Student"
          initialValues={{ firstName: "", lastName: "" }}
          onSubmit={async (values) => {
            await createStudentMutation(values)
            return router.push(Routes.StudentPage())
          }}
          css={{
            width: "80%",
            padding: "$5",
            borderRadius: "10px",
            background: "$black",
            display: "flex",
            flexDirection: "column",
            gap: "$4",
          }}
        >
          <LinkButton
            href={Routes.StudentPage()}
            css={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FiArrowLeft color="black" size={20} />
          </LinkButton>
          <LabeledTextField label="First Name" name="firstName" placeholder="First Name" />
          <LabeledTextField label="Last Name" name="lastName" placeholder="Last Name" />
        </StyledForm>
      </Box>
    </DashboardLayout>
  )
}

export default CreateStudent
