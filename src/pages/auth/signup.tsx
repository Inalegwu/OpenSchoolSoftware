import { useRouter } from "next/router"
import Layout from "src/core/layouts/Layout"
import { SignupForm } from "src/auth/components/SignupForm"
import { BlitzPage, Routes } from "@blitzjs/next"
import { Box } from "src/styles/components"

const SignupPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <Layout title="Sign Up">
      <Box
        css={{
          width: "100%",
          height: "100vh",
          background: "$background",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SignupForm onSuccess={() => router.push(Routes.Home())} />
      </Box>
    </Layout>
  )
}

export default SignupPage
