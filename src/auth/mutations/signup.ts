import { SecurePassword } from "@blitzjs/auth/secure-password"
import { resolver } from "@blitzjs/rpc"
import db from "db"
import { Role } from "types"
import { Signup } from "../schemas"

export default resolver.pipe(resolver.zod(Signup), async ({ email, password, SchoolName }, ctx) => {
  const hashedPassword = await SecurePassword.hash(password.trim())
  const user = await db.user.create({
    data: {
      email: email.toLowerCase().trim(),
      hashedPassword,
      memberShips: { create: { role: "OWNER", school: { create: { schoolName: SchoolName } } } },
    },
    select: { id: true, name: true, email: true, role: true, memberShips: true },
  })

  await ctx.session.$create({
    userId: user.id,
    roles: [user.role, user.memberShips[0]?.role!],
    schoolId: user.memberShips[0]?.schoolId,
  })
  return user
})
