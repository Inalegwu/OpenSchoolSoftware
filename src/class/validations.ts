import { z } from "zod"

export const className = z.string().refine((str) => str.trim())
export const scheduledDate = z.date()
export const classId = z.string().refine((str) => str.trim())

export const createClassSchema = z.object({
  className,
  scheduledDate,
})

export const changeClassDateSchema = z.object({
  classId,
  scheduledDate,
})
