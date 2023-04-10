import { resolver } from "@blitzjs/rpc"
import { Ctx } from "blitz"
import { classId } from "../validations"
import db from "db"

export default resolver.pipe(
  resolver.authorize(),
  resolver.zod(classId),
  async (classId, ctx: Ctx) => {
    const foundClass = await db.class.findFirst({
      where: { id: classId },
      include: { students: true, teacher: true },
    })

    return foundClass
  }
)
