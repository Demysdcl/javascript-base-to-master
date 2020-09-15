export class Person {
  constructor(
    private name: string,
    private lastname: string,
    private age: number,
    private _cpf: string,
  ) {}

  get cpf(): string {
    return this._cpf
  }

  set cpf(cpf: string) {
    this._cpf = cpf
  }

  getFullname(): string {
    return this.name + '' + this.lastname
  }
}
