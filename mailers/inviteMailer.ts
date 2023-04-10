/* TODO - You need to add a mailer integration in `integrations/` and import here.
 *
 * The integration file can be very simple. Instantiate the email client
 * and then export it. That way you can import here and anywhere else
 * and use it straight away.
 */

type InviteMailerProps = {
  to: string
  recieverEmail: string
  recieverPassword: string
  schoolName: string
}

export function InviteMailer({
  to,
  recieverEmail,
  recieverPassword,
  schoolName,
}: InviteMailerProps) {
  // In production, set APP_ORIGIN to your production server origin
  const origin = process.env.APP_ORIGIN || process.env.BLITZ_DEV_SERVER_ORIGIN
  const resetUrl = `${origin}/auth/login`

  const msg = {
    from: "TODO@example.com",
    to,
    subject: "Your Password Reset Instructions",
    html: `
      <h1>You've Been Invited To Teach ${schoolName}.Congrats!!! 🎉🎉🎉</h1>
      <p>Welcome To School Deck , The Revolutionary School Management System. You've been invited to teach at ${schoolName} and we are so Happy For You. Follow the link below to login to your Account</p>

      <p>We're sure there's some messages waiting for you so go check them out</p>

      <p>Your Login Email Is - ${recieverEmail}</p>
      <p>Your Login Password Is - ${recieverPassword} </p>

      <a href="${resetUrl}">Login</a>
    `,
  }

  return {
    async send() {
      if (process.env.NODE_ENV === "production") {
        // TODO - send the production email, like this:
        // await postmark.sendEmail(msg)
        throw new Error("No production email implementation in mailers/forgotPasswordMailer")
      } else {
        // Preview email in the browser
        const previewEmail = (await import("preview-email")).default
        await previewEmail(msg)
      }
    },
  }
}
