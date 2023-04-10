import { z } from "zod"

export const scheduleName = z.string().refine((str) => str.trim())

export const ChangeScheduleNameSchema = z.object({
  scheduleId: z.string().refine((str) => str.trim()),
  scheduleName,
})
