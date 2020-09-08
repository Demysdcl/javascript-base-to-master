export class Company {
  // public is not required
  public readonly name: string
  private readonly employees: Employee[] = []
  protected readonly cnpj: string

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

const company = new Company('DCLFactor', '11.111.111/0001-11')

company.addEmployees(
  new Employee('Demys', 'Lima'),
  new Employee('Laiza', 'Lobo'),
  new Employee('Davi', 'Lima'),
)

console.log(company)
