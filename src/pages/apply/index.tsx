import { BlitzPage } from "@blitzjs/next"
import { useMutation, useQuery } from "@blitzjs/rpc"
import { zodResolver } from "@hookform/resolvers/zod"
import { Suspense } from "react"
import { useForm } from "react-hook-form"
import applyToSchool from "src/apply/mutations/applyToSchool"
import { ApplySchema } from "src/apply/validations"
import LabeledTextField from "src/core/components/LabeledTextField"
import Layout from "src/core/layouts/Layout"
import fetchSchools from "src/school/queries/fetchSchools"
import { Box, BasicForm, SelectField, Input, Title, Button, Paragraph } from "src/styles/components"

const ApplicationForm = () => {
  const [schools] = useQuery(fetchSchools, null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ApplySchema),
  })
  const [applyMutation] = useMutation(applyToSchool)
  return (
    <BasicForm
      onSubmit={handleSubmit(async (values) => {
        console.log(values)
      })}
      css={{
        width: "60%",
        height: "70%",
        padding: "$5",
        display: "flex",
        flexDirection: "column",
        gap: "$4",
        background: "$black",
        borderRadius: "10px",
      }}
    >
      <Title css={{ color: "$primary", fontSize: "30px" }}>Apply To A School</Title>
      <Box>
        <Input
          {...register("firstName")}
          css={{ width: "98%" }}
          type="text"
          name="firstName"
          placeholder="First Name"
        />
        <Paragraph css={{ fontSize: "11px", color: "red" }}>{errors.firstName?.message}</Paragraph>
      </Box>
      <Box>
        <Input
          {...register("lastName")}
          css={{ width: "98%" }}
          type="text"
          name="lastName"
          placeholder="Last Name"
        />
        <Paragraph css={{ fontSize: "11px", color: "red" }}>{errors.lastName?.message}</Paragraph>
      </Box>
      <Box>
        <Input
          type="text"
          min={11}
          max={11}
          css={{ width: "98%" }}
          placeholder="Phone Number"
          {...register("phoneNumber")}
        />
        <Paragraph css={{ fontSize: "11px", color: "red" }}>
          {errors.phoneNumber?.message}
        </Paragraph>
      </Box>
      <Box>
        <Input
          {...register("email")}
          css={{ width: "98%" }}
          type="email"
          name="email"
          placeholder="Email"
        />
        <Paragraph css={{ fontSize: "11px", color: "red" }}>{errors.email?.message}</Paragraph>
      </Box>
      <SelectField {...register("schoolId")}>
        {schools?.map((school) => {
          return (
            <option key={school.id} value={school.id}>
              {school.schoolName}
            </option>
          )
        })}
      </SelectField>
      <Button css={{ borderRadius: "99999px" }} variant="primary">
        Apply
      </Button>
    </BasicForm>
  )
}

const ApplyPage: BlitzPage = () => {
  return (
    <Layout title="Apply To School">
      <Box
        css={{
          height: "300px",
          width: "300px",
          filter: "blur(200px)",
          position: "absolute",
          zIndex: "0",
          background: "$primary",
        }}
      />
      <Box
        css={{
          width: "100%",
          height: "100vh",
          background: "$backgroundDark",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Suspense fallback="Loading...">
          <ApplicationForm />
        </Suspense>
      </Box>
    </Layout>
  )
}

ApplyPage.suppressFirstRenderFlicker = true
export default ApplyPage
