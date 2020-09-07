// With verification through if
const body = document.querySelector('body')
if (body) body.style.backgroundColor = 'red'

// With Non-null assertion (!)
const body2 = document.querySelector('body')!
body2.style.backgroundColor = 'blue'

// Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement
body2.style.backgroundColor = 'blue'

const input = document.querySelector('.input') as HTMLInputElement

const assertionOfAssertion = (document.querySelector('.text') as unknown) as number
