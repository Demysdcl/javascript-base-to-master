const myObj = {
  keyA: 'Value A',
  keyB: 'Value B',
}

myObj.keyA = 'New value'
myObj.keyB = 'New B value'

//Operation not permitted
myObj.keyC = 'C value'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const myObj2: {
  readonly keyA: string
  keyB: string
  keyC?: string
  [key: string]: unknown
} = {
  keyA: 'Value A',
  keyB: 'Value B',
}

myObj2.keyA = 'Test'
