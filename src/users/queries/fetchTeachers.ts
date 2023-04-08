import { Ctx } from "@blitzjs/next"
import { resolver } from "@blitzjs/rpc"
import { MemberShipRole } from "@prisma/client"
import db from "db"

export default resolver.pipe(
  resolver.authorize(MemberShipRole.OWNER),
  async (_ = null, { session }: Ctx) => {
    const teachers = await db.memberShip.findMany({ where: { schoolId: session.schoolId } })

    return teachers
  }
)
