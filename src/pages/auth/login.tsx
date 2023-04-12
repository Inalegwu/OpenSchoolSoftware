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
          background: "$backgroundDark",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          css={{
            height: "500px",
            width: "500px",
            background: "$primary",
            filter: "blur(400px)",
            position: "absolute",
            zIndex: "0",
          }}
        />
        <Box
          css={{
            width: "60%",
            height: "60%",
            background: "$black",
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
