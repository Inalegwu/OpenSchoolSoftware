import { resolver } from "@blitzjs/rpc"
import { createClassSchema } from "../validations"
import { Ctx } from "blitz"
import db from "db"

export default resolver.pipe(
  resolver.authorize(),
  resolver.zod(createClassSchema),
  async ({ scheduledDate, className }, ctx: Ctx) => {
    await db.class.create({ data: { className, scheduleDateTime: scheduledDate } })

    return true
  }
)
