export class Company {
  // public is not required
  public readonly name: string
  protected readonly employees: Employee[] = []
  private readonly cnpj: string

  constructor(name: string, cnpj: string) {
    this.name = name
    this.cnpj = cnpj
  }

  addEmployees(...newEmployees: Employee[]): void {
    newEmployees.forEach((emp) => this.employees.push(emp))
  }
}

export class Employee {
  // public is not required
  constructor(public readonly name: string, public readonly lastname: string) {}
}

export class DCLFactor extends Company {
  constructor() {
    super('DCLFactor', '11.111.111/0001-11')
  }

  popEmployee(): Employee | null {
    const pop = this.employees.pop()
    return pop ? pop : null
  }
}

const company = new DCLFactor()

company.addEmployees(
  new Employee('Demys', 'Lima'),
  new Employee('Laiza', 'Lobo'),
  new Employee('Davi', 'Lima'),
)

console.log(company.popEmployee())
console.log(company)
