import { resolver } from "@blitzjs/rpc"
import { CreateStudentSchema } from "../validation"
import db from "db"
import { Ctx } from "@blitzjs/next"
import { SecurePassword } from "@blitzjs/auth/secure-password"

export default resolver.pipe(
  resolver.authorize(),
  resolver.zod(CreateStudentSchema),
  async ({ firstName, lastName }, ctx: Ctx) => {
    const hashedPassword = await SecurePassword.hash(firstName + lastName)
    await db.user.create({
      data: {
        email: firstName.toLowerCase() + lastName.toLowerCase() + "@mail.com",
        hashedPassword,
        name: firstName + " " + lastName,
        student: { create: { schoolId: ctx.session.schoolId! } },
      },
    })
    return true
  }
)
