import { useQuery } from "@blitzjs/rpc"
import fetchMySchool from "../queries/fetchMySchool"

export const useMySchool = () => {
  const [school] = useQuery(fetchMySchool, null)

  return school
}
