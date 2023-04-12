import { z } from "zod"

export const ApplySchema = z.object({
  firstName: z.string().refine((str) => str.trim()),
  lastName: z.string().refine((str) => str.trim()),
  email: z
    .string()
    .email()
    .refine((str) => str.toLowerCase().trim()),
  phoneNumber: z.string().min(11).max(11),
  schoolId: z.string(),
})
