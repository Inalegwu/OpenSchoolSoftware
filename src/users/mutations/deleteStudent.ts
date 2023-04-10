import { resolver } from "@blitzjs/rpc"
import { MemberShipRole } from "@prisma/client"
import db from "db"

export default resolver.pipe(resolver.authorize(), async (studentId: string) => {
  await db.student.delete({ where: { id: studentId } })
  return true
})
