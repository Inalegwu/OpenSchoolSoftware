import { Ctx } from "@blitzjs/next"
import { resolver } from "@blitzjs/rpc"
import db from "db"

export default resolver.pipe(resolver.authorize(), async (_ = null, ctx: Ctx) => {
  const myClasses = await db.class.findMany({ where: { teacherId: ctx.session.userId } })

  return myClasses
})
