export type SystemUserAddressProtocol = { street: string; number: number }

export interface SystemUserProtocol {
  firstName: string
  username: string

  getAddresses(): Promise<SystemUserAddressProtocol[]>
}
