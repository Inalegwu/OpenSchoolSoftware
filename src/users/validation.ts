import { z } from "zod"

export const CreateStudentSchema = z.object({
  firstName: z.string().refine((str) => str.trim()),
  lastName: z.string().refine((str) => str.trim()),
})

export const InviteTeacherSchema = z.object({
  firstName: z.string().refine((str) => str.trim()),
  lastName: z.string().refine((str) => str.trim()),
  email: z.string().refine((str) => str.trim()),
})
