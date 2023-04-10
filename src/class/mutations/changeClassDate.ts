import { resolver } from "@blitzjs/rpc"
import { changeClassDateSchema } from "../validations"
import { Ctx } from "blitz"
import db from "db"

export default resolver.pipe(
  resolver.authorize(),
  resolver.zod(changeClassDateSchema),
  async ({ classId, scheduledDate }, ctx: Ctx) => {
    await db.class.update({ where: { id: classId }, data: { scheduleDateTime: scheduledDate } })

    return true
  }
)
