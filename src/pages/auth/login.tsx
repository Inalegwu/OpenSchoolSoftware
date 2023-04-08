import { BlitzPage } from "@blitzjs/next"
import Layout from "src/core/layouts/Layout"
import { LoginForm } from "src/auth/components/LoginForm"
import { useRouter } from "next/router"
import { Box } from "src/styles/components"

const LoginPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <Layout title="Log In">
      <Box
        css={{
          width: "100%",
          height: "100vh",
          background: "$background",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          css={{
            width: "80%",
            height: "80%",
            background: "$white",
            padding: "$5",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRadius: "10px",
          }}
        >
          <LoginForm
            onSuccess={(_user) => {
              const next = router.query.next ? decodeURIComponent(router.query.next as string) : "/"
              return router.push(next)
            }}
          />
        </Box>
      </Box>
    </Layout>
  )
}

export default LoginPage
