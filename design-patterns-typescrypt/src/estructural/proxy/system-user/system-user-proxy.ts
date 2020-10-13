import { AdminUser } from './admin-user'
import {
  SystemUserAddressProtocol,
  SystemUserProtocol,
} from './system-user-protocol'

export class SystemUserProxy implements SystemUserProtocol {
  private realUser: SystemUserProtocol | null = null
  private realUserAddresses: SystemUserAddressProtocol[] | null = null

  constructor(public firstName: string, public username: string) {}

  private createUser(): SystemUserProtocol {
    if (!this.realUser) {
      this.realUser = new AdminUser(this.firstName, this.username)
    }
    return this.realUser
  }

  async getAddresses(): Promise<SystemUserAddressProtocol[]> {
    if (!this.realUserAddresses) {
      this.realUserAddresses = await this.createUser().getAddresses()
    }

    return this.realUserAddresses
  }
}
