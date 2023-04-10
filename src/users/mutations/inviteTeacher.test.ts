import db from "db"
import { vi, describe, it, beforeEach } from "vitest"

beforeEach(async () => {
  await db.$reset()
})

describe("invite teacher mailer and mutation", () => {})
