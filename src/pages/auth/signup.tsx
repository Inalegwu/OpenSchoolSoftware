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
          background: "$backgroundDark",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          css={{
            position: "absolute",
            height: "400px",
            width: "400px",
            filter: "blur(400px)",
            zIndex: "0",
            background: "$primary",
          }}
        />
        <Box
          css={{
            width: "50%",
            height: "50%",
            padding: "$7",
            margin: "auto",
            background: "$black",
            display: "flex",
            flexDirection: "column",
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
