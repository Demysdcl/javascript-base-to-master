type User = { username: string; password: string }
type VerifyUserFn = (user: User, sentValue: User) => boolean

const verifyUserFn: VerifyUserFn = (user, sentValue) =>
  user.username === sentValue.username && user.password === user.password

const bdUser = { username: 'Davi', password: '123456' }
const sentUser = { username: 'Davi', password: '123456', roles: [] }
const loggedIn = verifyUserFn(bdUser, sentUser)

console.log(loggedIn)
