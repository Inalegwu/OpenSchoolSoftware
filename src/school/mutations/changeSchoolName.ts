import { resolver } from "@blitzjs/rpc"
import { ChangeSchoolName } from "../validations"
import { Ctx } from "@blitzjs/next"
import db from "db"

export default resolver.pipe(
  resolver.authorize(),
  resolver.zod(ChangeSchoolName),
  async ({ name }, ctx: Ctx) => {
    await db.school.update({ data: { schoolName: name }, where: { id: ctx.session.schoolId! } })

    return true
  }
)
