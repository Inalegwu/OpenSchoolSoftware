import { resolver } from "@blitzjs/rpc"
import { ApplySchema } from "../validations"

export default resolver.pipe(
  resolver.zod(ApplySchema),
  async ({ email, firstName, lastName, phoneNumber, schoolId }) => {}
)
