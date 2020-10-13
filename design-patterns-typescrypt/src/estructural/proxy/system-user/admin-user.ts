import {
  SystemUserAddressProtocol,
  SystemUserProtocol,
} from './system-user-protocol'

export class AdminUser implements SystemUserProtocol {
  constructor(public firstName: string, public username: string) {}

  async getAddresses(): Promise<SystemUserAddressProtocol[]> {
    return new Promise((resolve) =>
      setTimeout(
        () =>
          resolve([
            { street: 'Alagoas', number: 1787 },
            { street: 'Itauna', number: 103 },
          ]),
        2000,
      ),
    )
  }
}
