import { resolver } from "@blitzjs/rpc"
import db from "db"

export default resolver.pipe(async (_ = null) => {
  const schools = await db.school.findMany()

  return schools
})
