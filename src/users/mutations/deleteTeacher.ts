import { resolver } from "@blitzjs/rpc"
import db from "db"

export default resolver.pipe(resolver.authorize(), async (teacherId: string) => {
  await db.teacher.delete({ where: { id: teacherId } })

  return true
})
