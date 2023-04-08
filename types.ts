import { SimpleRolesIsAuthorized } from "@blitzjs/auth"
import { GlobalRole, MemberShipRole, School, User } from "db"

export type Role = MemberShipRole | GlobalRole

declare module "@blitzjs/auth" {
  export interface Session {
    isAuthorized: SimpleRolesIsAuthorized<Role>
    PublicData: {
      userId: User["id"]
      roles: Array<Role>
      schoolId?: School["id"]
    }
  }
}
