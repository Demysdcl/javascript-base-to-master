function noReturn(...args: string[]): void {
  console.log(args.join(' '))
}

noReturn()

const user = {
  name: 'Demys',
  lastname: 'Lima',

  showFullname(): void {
    console.log(this.name + ' ' + this.lastname)
  },
}

user.showFullname()
