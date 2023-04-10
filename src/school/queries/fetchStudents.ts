import { Ctx } from "@blitzjs/next"
import { resolver } from "@blitzjs/rpc"
import { MemberShipRole } from "@prisma/client"
import db from "db"

export default resolver.pipe(async (_ = null, ctx: Ctx) => {
  const students = await db.student.findMany({
    where: { schoolId: ctx.session.schoolId },
    select: {
      user: {
        include: {
          sessions: false,
        },
      },
    },
  })

  return students
})
