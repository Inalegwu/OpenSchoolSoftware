import { resolver } from "@blitzjs/rpc"
import { ChangeScheduleNameSchema } from "../validations"
import { Ctx } from "@blitzjs/next"
import db from "db"

export default resolver.pipe(
  resolver.authorize(),
  resolver.zod(ChangeScheduleNameSchema),
  async ({ scheduleName, scheduleId }, ctx: Ctx) => {
    await db.teacherSchedule.update({
      where: { id: scheduleId },
      data: { scheduleName: scheduleName },
    })

    return true
  }
)
