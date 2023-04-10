import { z } from "zod"

export const ChangeSchoolName = z.object({
  name: z.string().refine((str) => str.trim()),
})
