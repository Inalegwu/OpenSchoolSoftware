import { Ctx } from "@blitzjs/next"
import { resolver } from "@blitzjs/rpc"
import db from "db"

export default resolver.pipe(resolver.authorize(), async (_ = null, ctx: Ctx) => {
  const schedule = await db.teacherSchedule.findFirst({
    where: { teacherId: ctx.session.userId! },
    select: { classes: true, id: true, scheduleName: true, teacherId: true },
  })

  return schedule
})
