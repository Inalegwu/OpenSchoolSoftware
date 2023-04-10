import { Ctx } from "@blitzjs/next"
import { resolver } from "@blitzjs/rpc"
import { GlobalRole, MemberShipRole } from "@prisma/client"
import db from "db"

export default resolver.pipe(
  resolver.authorize([MemberShipRole.OWNER, MemberShipRole.ADMIN, GlobalRole.CUSTOMER]),
  async (_ = null, { session }: Ctx) => {
    const teachers = await db.teacher.findMany({
      where: { schoolId: session.schoolId },
      select: { user: true, id: true, invitedName: true, invitedEmail: true },
    })

    return teachers
  }
)
