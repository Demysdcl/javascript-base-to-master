import { SystemUserProxy } from './system-user/system-user-proxy'

async function clientCode(): Promise<void> {
  const user = new SystemUserProxy('Demys', 'demysdcl')
  console.log('This will take 2 seconds')
  console.log(await user.getAddresses())

  for (let index = 0; index < 5; index++) {
    console.log('Cache:', await user.getAddresses())
  }
}

clientCode()
