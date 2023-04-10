import { Suspense } from "react"
import Layout from "src/core/layouts/Layout"
import { useCurrentUser } from "src/users/hooks/useCurrentUser"
import logout from "src/auth/mutations/logout"
import { useMutation } from "@blitzjs/rpc"
import { Routes, BlitzPage } from "@blitzjs/next"
import { Box, Button, LinkButton, Nav, Title, Paragraph } from "src/styles/components"

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  if (currentUser) {
    return (
      <Box css={{ width: "25%", display: "flex", justifyContent: "flex-end", gap: "$2" }}>
        <LinkButton
          href={Routes.Dashboard()}
          css={{ fontWeight: "600", background: "transparent" }}
        >
          Dashboard
        </LinkButton>
        <Button
          css={{
            borderRadius: "9999px",
            fontSize: "12px",
            fontWeight: "bold",
            background: "transparent",
            "&:hover": {
              background: "none",
              color: "$primary",
            },
          }}
          onClick={async () => {
            await logoutMutation()
          }}
        >
          Logout
        </Button>
      </Box>
    )
  } else {
    return (
      <Box css={{ width: "25%", display: "flex", justifyContent: "flex-end", gap: "$2" }}>
        <LinkButton variant="primary" href={Routes.SignupPage()}>
          Register Your School
        </LinkButton>
        <LinkButton variant="primary" href={Routes.LoginPage()}>
          Login
        </LinkButton>
      </Box>
    )
  }
}

const Home: BlitzPage = () => {
  return (
    <Layout title="Home">
      {/* blob */}
      <Box
        css={{
          position: "absolute",
          zIndex: "0",
          filter: "blur(600px)",
          background: "linear-gradient(to right ,$primary,$secondary)",
          height: "400px",
          width: "400px",
        }}
      />
      <Box css={{ background: "$background", width: "100%" }}>
        <Nav>
          <Box
            css={{
              width: "95%",
              margin: "auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <Title css={{ color: "$white" }}>SchoolDeck</Title>
            <Suspense fallback="Loading...">
              <UserInfo />
            </Suspense>
          </Box>
        </Nav>
        {/* hero */}
        <Box
          css={{ display: "flex", width: "100%", height: "100vh", background: "$backgroundDark" }}
        >
          <Box
            css={{
              width: "50%",
              height: "100%",
              padding: "$7",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              alignContent: "flex-start",
              justifyContent: "center",
              gap: "$1",
            }}
          >
            <Title css={{ fontSize: "30px", color: "$primary" }}>SchoolDeck</Title>
            <Paragraph css={{ fontSize: "20px", color: "$white" }}>
              The easiest way to manage your school without any overhead.All you have to do is bring
              your data,We&apos;ll do the rest
            </Paragraph>
          </Box>
          <Box
            css={{
              width: "50%",
              padding: "$7",
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* details box */}
            <Box
              css={{
                background: "$black",
                height: "60%",
                borderRadius: "10px",
                width: "90%",
                padding: "$7",
                boxShadow: "0px 10px 20px 0px #000000",
              }}
            />
          </Box>
        </Box>
        {/* first secion */}
        <Box
          css={{ display: "flex", width: "100%", height: "100vh", background: "$backgroundDark" }}
        >
          <Box css={{ width: "50%", height: "100%", padding: "$7" }}>
            {/* details box */}
            <Box
              css={{
                background: "$black",
                height: "60%",
                borderRadius: "10px",
                width: "90%",
                padding: "$7",
                boxShadow: "0px 10px 20px 0px #000000",
              }}
            />
          </Box>
          <Box
            css={{
              width: "50%",
              height: "100%",
              padding: "$5",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              alignContent: "flex-end",
              justifyContent: "center",
              gap: "$1",
            }}
          >
            {/* blob */}
            <Box
              css={{
                position: "absolute",
                zIndex: "0",
                filter: "blur(600px)",
                background: "linear-gradient(to right ,$primary,$secondary)",
                height: "400px",
                width: "400px",
              }}
            />
            <Title css={{ fontSize: "30px", color: "$primary" }}>Digitalize Your School</Title>
            <Paragraph css={{ fontSize: "20px", color: "$white" }}>
              You&apos;ve Been Holding Off On Going Digital Because It&apos;s Too Hard ? No Need To
              Wait Anymore
            </Paragraph>
          </Box>
        </Box>
        {/* second secion */}
        <Box
          css={{ display: "flex", width: "100%", height: "100vh", background: "$backgroundDark" }}
        >
          <Box
            css={{
              width: "50%",
              height: "100%",
              padding: "$7",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              alignContent: "flex-start",
              justifyContent: "center",
              gap: "$1",
            }}
          >
            {/* blob */}
            <Box
              css={{
                position: "absolute",
                zIndex: "0",
                filter: "blur(600px)",
                background: "linear-gradient(to right ,$primary,$secondary)",
                height: "400px",
                width: "400px",
              }}
            />
            <Title css={{ fontSize: "30px", color: "$primary" }}>
              Streamline The Most Hectic Moments
            </Title>
            <Paragraph css={{ fontSize: "20px", color: "$white" }}>
              Exams whether internal or external,Grading and Score Tracking have always been hectic
              , But not anymore. use our tools to make saving scores from exams as easy as a
              download
            </Paragraph>
          </Box>
          <Box css={{ width: "50%", height: "100%", padding: "$7" }}>
            {/* details box */}
            <Box
              css={{
                background: "$black",
                height: "60%",
                borderRadius: "10px",
                width: "90%",
                padding: "$7",
                boxShadow: "0px 10px 20px 0px #000000",
              }}
            />
          </Box>
        </Box>
      </Box>
      {/* third section */}
      <Box css={{ display: "flex", width: "100%", height: "100vh", background: "$backgroundDark" }}>
        <Box css={{ width: "50%", height: "100%", padding: "$7" }}>
          {/* blob */}
          <Box
            css={{
              position: "absolute",
              zIndex: "0",
              filter: "blur(400px)",
              background: "$secondary",
              height: "400px",
              width: "400px",
              left: "70%",
            }}
          />
          {/* details box */}
          <Box
            css={{
              background: "$black",
              height: "60%",
              borderRadius: "10px",
              width: "90%",
              padding: "$7",
              boxShadow: "0px 10px 20px 0px #000000",
            }}
          />
        </Box>
        <Box
          css={{
            width: "50%",
            height: "100%",
            padding: "$5",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            alignContent: "flex-end",
            justifyContent: "center",
            gap: "$1",
          }}
        >
          <Title css={{ fontSize: "30px", color: "$primary" }}>Customize To Fit You</Title>
          <Paragraph css={{ fontSize: "20px", color: "$white" }}>
            Customize everything from grading criteria to entry thresholds and we&apos;ll keep track
            of all of it
          </Paragraph>
        </Box>
      </Box>
      {/* fourth section */}
      <Box css={{ width: "100%", height: "100vh", display: "flex", background: "$backgroundDark" }}>
        <Box
          css={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            alignContent: "flex-start",
            justifyContent: "center",
            padding: "$7",
            gap: "$1",
          }}
        >
          {/* blob */}
          <Box
            css={{
              position: "absolute",
              zIndex: "0",
              filter: "blur(500px)",
              background: "linear-gradient(to right ,$primary,$secondary)",
              height: "400px",
              width: "400px",
            }}
          />
          <Title css={{ fontSize: "30px", color: "$primary" }}>Class Schedules? Easy</Title>
          <Paragraph css={{ fontSize: "20px", color: "$white" }}>
            Your Teachers Can Now Manage and Update Their Class Schedules and Have It Everywhere
            Immediately.No More Sheets Of Paper
          </Paragraph>
        </Box>
        <Box css={{ width: "50%", padding: "$7" }}>
          <Box
            css={{
              background: "$black",
              height: "60%",
              borderRadius: "10px",
              width: "90%",
              padding: "$7",
              boxShadow: "0px 10px 10px 0px #000000",
            }}
          />
        </Box>
      </Box>
      {/* footer */}
      <Box
        css={{
          width: "100%",
          background: "$backgroundDark",
          height: "6vh",
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Paragraph css={{ color: "$primary" }}>Made With 🖤</Paragraph>
      </Box>
    </Layout>
  )
}

export default Home
