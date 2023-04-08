import { Ctx } from "@blitzjs/next"
import { resolver } from "@blitzjs/rpc"
import db from "db"

export default resolver.pipe(async (_ = null, ctx: Ctx) => {
  const school = await db.school.findFirst({ where: { id: ctx.session.schoolId } })

  return school
})
