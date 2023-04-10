import { resolver } from "@blitzjs/rpc"
import db from "db"

export default resolver.pipe(resolver.authorize(), async (teacherId: string) => {
  const teacher = await db.teacher.findFirst({
    where: { id: teacherId },
    select: { user: true, id: true, invitedEmail: true, invitedName: true },
  })

  return teacher
})
