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
          alignItems: "center",
        }}
      >
        <Box
          css={{
            width: "50%",
            height: "50%",
            padding: "$4",
            margin: "auto",
            background: "$white",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
          }}
        >
          <SignupForm onSuccess={() => router.push(Routes.Home())} />
        </Box>
      </Box>
    </Layout>
  )
}

export default SignupPage
