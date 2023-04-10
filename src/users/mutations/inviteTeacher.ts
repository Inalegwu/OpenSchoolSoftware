import { resolver } from "@blitzjs/rpc"
import { InviteTeacherSchema } from "../validation"
import db from "db"
import { Ctx } from "@blitzjs/next"
import { InviteMailer } from "mailers/inviteMailer"
import { SecurePassword } from "@blitzjs/auth/secure-password"

// !IMPORTANT THIS ENTIRE FILE MIGHT NOT WORK SO BEWARE AND TEST INTENSIVELY

declare class UserExistsError extends Error {
  name: string
  constructor(message?: string)
  get _clearStack(): boolean
}

export const handleInviteUser = async (
  email: string,
  firstName: string,
  lastName: string,
  schoolId: string
) => {
  // check if the user already exists
  const user = await db.user.findFirst({ where: { email } })

  //   TODO refactor this code to instead of returning an error if the user already exists
  // TODO just handle sending the email.
  // !IMPORTANT the user if they exist in the database already might already be with another school so this TODO will
  // ! will be looked into

  //   if they do , throw a custom error to alert the owner that this user is already a teacher somewhere else
  if (user) throw new UserExistsError("This User Is Already A Teacher")

  //   if the user isn't a teacher already
  // hash the users password

  const hashedPassword = await SecurePassword.hash(firstName + lastName)

  //   create the user with the hashed password and the email passed if they don't exist
  const createdUser = await db.user.create({
    data: { email, name: firstName + " " + lastName, hashedPassword },
  })
  //   create the teacher user relationship
  await db.teacher.create({
    data: { invitedEmail: createdUser.email, invitedName: createdUser.name, schoolId },
  })
  //   find the school where all this is happening
  const school = await db.school.findFirst({
    where: { id: schoolId },
    select: { schoolName: true, id: true },
  })

  //   return the information of the user that was created and the school the user was invited to
  return { createdUser, school }
}

export default resolver.pipe(
  resolver.authorize(),
  resolver.zod(InviteTeacherSchema),
  async ({ email, firstName, lastName }, ctx: Ctx) => {
    // // use the information returned from the handleInviteUser function
    // const { createdUser: user, school } = await handleInviteUser(
    //   email,
    //   firstName,
    //   lastName,
    //   ctx.session.schoolId!
    // )

    // // use the invite mailer to send the invitation email to the newly created user, sending them
    // // the email that was invited , the name of the school inviting them and the password that was created for them
    // // that can be changed
    // // to is the reciever that will be used by the mailer as opposed to recieverEmail which represents the loginDetails of the user
    // InviteMailer({
    //   recieverEmail: user.email,
    //   schoolName: school?.schoolName!,
    //   recieverPassword: firstName + lastName,
    //   to: user.email,
    // })

    // return true
    console.log(email, firstName, lastName)
  }
)
