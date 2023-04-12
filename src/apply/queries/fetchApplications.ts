import { resolver } from "@blitzjs/rpc"
import { Ctx } from "blitz"
import db from "db"

export default resolver.pipe(async (_ = null, ctx: Ctx) => {
  const applications = await db.application.findMany({ where: { schoolId: ctx.session.schoolId } })

  return applications
})
