import { Box } from "src/styles/components"

export default function Loading() {
  return (
    <Box css={{ display: "flex", justifyContent: "center" }}>
      <Box css={{ height: "20px", width: "20px", borderRadius: "5px", border: "$secondary" }} />
    </Box>
  )
}
