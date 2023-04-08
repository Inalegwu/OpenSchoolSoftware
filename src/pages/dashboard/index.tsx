import { BlitzPage } from "@blitzjs/next"
import Layout from "src/core/layouts/Layout"
import { Box } from "src/styles/components"

const Dashboard: BlitzPage = () => {
  return (
    <Layout title="Dashboard">
      <Box css={{ width: "100%", background: "$background", height: "100vh", display: "flex" }}>
        <Box
          css={{
            width: "20%",
            background: "$white",
            height: "100%",
            borderRight: "0.5px solid #00000039",
          }}
        ></Box>
        <Box css={{ width: "80%", height: "100%", background: "$white" }}></Box>
      </Box>
    </Layout>
  )
}

Dashboard.suppressFirstRenderFlicker = true
Dashboard.authenticate
export default Dashboard
