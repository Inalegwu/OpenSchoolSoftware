import { Suspense } from "react"
import Link from "next/link"
import Layout from "src/core/layouts/Layout"
import { useCurrentUser } from "src/users/hooks/useCurrentUser"
import logout from "src/auth/mutations/logout"
import { useMutation } from "@blitzjs/rpc"
import { Routes, BlitzPage } from "@blitzjs/next"
import { Box, Button, LinkButton, Nav, StyledImage } from "src/styles/components"
import { styled } from "stitches.config"
import professor from "/public/images/undraw_professor_re_mj1s.svg"
import Online from "/public/images/undraw_online_reading_np7n.svg"
import customize from "/public/images/undraw_switches_1js3.svg"
import hectic from "/public/images/undraw_heavy_box_agqi.svg"
import timeline from "/public/images/undraw_events_re_98ue.svg"

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  if (currentUser) {
    return (
      <Box css={{ width: "20%", display: "flex", justifyContent: "flex-end", gap: "$2" }}>
        <LinkButton
          href={Routes.Dashboard()}
          css={{ fontWeight: "600", background: "transparent" }}
        >
          Dashboard
        </LinkButton>
        <Button
          css={{
            borderRadius: "9999px",
            fontSize: "13px",
            fontWeight: "bold",
            background: "transparent",
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
      <Box css={{ width: "20%", display: "flex", justifyContent: "flex-end", gap: "$2" }}>
        <LinkButton css={{ fontSize: "13px" }} href={Routes.SignupPage()}>
          Register Your School
        </LinkButton>
        <LinkButton css={{ fontSize: "13px" }} href={Routes.LoginPage()}>
          Login
        </LinkButton>
      </Box>
    )
  }
}

const Title = styled("h1", {
  fontWeight: "bold",
  fontSize: 20,
})

const Paragraph = styled("p", {
  fontSize: "15px",
  color: "#2e2e2e81",
})

const Home: BlitzPage = () => {
  return (
    <Layout title="Home">
      <Box css={{ background: "$$background", width: "100%" }}>
        <Nav>
          <Title>SchoolDeck</Title>
          <Suspense fallback="Loading...">
            <UserInfo />
          </Suspense>
        </Nav>
        {/* hero */}
        <Box css={{ display: "flex", width: "100%", height: "94vh" }}>
          <Box
            css={{
              width: "50%",
              height: "100%",
              padding: "$5",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              alignContent: "flex-start",
              justifyContent: "center",
            }}
          >
            <Title css={{ fontSize: "30px" }}>SchoolDeck</Title>
            <Paragraph css={{ fontSize: "20px" }}>
              The easiest way to manage your school without any overhead
            </Paragraph>
          </Box>
          <Box css={{ width: "50%", padding: "$5" }}>
            <StyledImage
              src={professor}
              css={{ height: "100%", width: "90%", objectFit: "contain" }}
              alt="professor"
            />
          </Box>
        </Box>
        {/* first secion */}
        <Box css={{ display: "flex", width: "100%", height: "100vh" }}>
          <Box css={{ width: "50%", height: "100%", padding: "$5" }}>
            <StyledImage
              src={Online}
              css={{ height: "100%", width: "90%", objectFit: "contain" }}
              alt="professor"
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
            }}
          >
            <Title css={{ fontSize: "30px" }}>Digitalize Your School</Title>
            <Paragraph css={{ fontSize: "20px" }}>
              You&apos;ve Been Holding Off On Going Digital Because It&apos;s Too Hard ? No Need To
              Wait Anymore
            </Paragraph>
          </Box>
        </Box>
        {/* second secion */}
        <Box css={{ display: "flex", width: "100%", height: "110vh" }}>
          <Box
            css={{
              width: "50%",
              height: "100%",
              padding: "$5",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              alignContent: "flex-start",
              justifyContent: "center",
            }}
          >
            <Title css={{ fontSize: "30px" }}>Streamline The Most Hectic Moments</Title>
            <Paragraph css={{ fontSize: "20px" }}>
              Exams whether internal or external,Grading and Score Tracking have always been hectic
              , But not anymore. use our tools to make saving scores from exams as easy as a
              download
            </Paragraph>
            <Paragraph css={{ marginTop: "4px", fontSize: "10px", fontStyle: "italic" }}>
              Scores From Exams are Automatically Filled in From The Exam Portal For Each
              Student.Grading Has Never Been Easier
            </Paragraph>
          </Box>
          <Box css={{ width: "50%", height: "100%", padding: "$5" }}>
            <StyledImage
              src={hectic}
              css={{ height: "100%", width: "90%", objectFit: "contain" }}
              alt="professor"
            />
          </Box>
        </Box>
      </Box>
      {/* third secion */}
      <Box css={{ display: "flex", width: "100%", height: "100vh" }}>
        <Box css={{ width: "50%", height: "100%", padding: "$5" }}>
          <StyledImage
            src={customize}
            css={{ height: "100%", width: "90%", objectFit: "contain" }}
            alt="professor"
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
          }}
        >
          <Title css={{ fontSize: "30px" }}>Customize To Fit You</Title>
          <Paragraph css={{ fontSize: "20px" }}>
            Customize everything from grading criteria to entry thresholds and we&apos;ll keep track
            of all of it
          </Paragraph>
        </Box>
      </Box>
      {/* fourth section */}
      <Box css={{ width: "100%", height: "100vh", display: "flex" }}>
        <Box
          css={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            alignContent: "flex-start",
            justifyContent: "center",
            padding: "$5",
          }}
        >
          <Title>Class Schedules? Easy</Title>
          <Paragraph css={{ fontSize: "20px" }}>
            Your Teachers Can Now Manage and Update Their Class Schedules and Have It Everywhere
            Immediately.No More Sheets Of Paper
          </Paragraph>
        </Box>
        <Box css={{ width: "50%", padding: "$5" }}>
          <StyledImage
            src={timeline}
            alt="timeline"
            css={{ height: "100%", width: "90%", objectFit: "contain" }}
          />
        </Box>
      </Box>
      <Box css={{ width: "100%", background: "$black", height: "60vh", display: "flex" }}></Box>
    </Layout>
  )
}

export default Home
