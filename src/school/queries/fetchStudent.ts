import { resolver } from "@blitzjs/rpc"
import db from "db"

export default resolver.pipe(async (studentId: string) => {
  const student = await db.user.findFirst({ where: { studentId } })

  return student
})
