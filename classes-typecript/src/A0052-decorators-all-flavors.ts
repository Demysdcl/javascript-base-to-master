// Tipo do construtor da classe
type Constructor = new (...args: any[]) => any

// Classes
function decoratorOfClasse(construtor: Constructor): any {
  // Chamado na criação da classe
  console.log('CLASSE')
  console.log(construtor)
  console.log('###')

  // Retorno pode ser omitido
  return class extends construtor {
    // faça o que desejar
  }
}

// Método de instância (normal)
function decoratorOfMethod(
  classPrototype: any,
  methodName: string,
  propertyDescriptor: PropertyDescriptor,
): any {
  // Chamado na criação do método (não precisa chamar o método)
  console.log('MÉTODO NORMAL')
  console.log(classPrototype)
  console.log(methodName)
  console.log(propertyDescriptor)
  console.log('###')

  // Retorno pode ser omitido
  return {
    // value altera o retorno original:
    // value: (...args: any[]) => console.log(args),
    writable: true,
    enumerable: true,
    configurable: true,
  }
}

// Método estático
function decoratorOfStaticMethod(
  classConstructor: Constructor,
  methodName: string,
  propertyDescriptor: PropertyDescriptor,
): any {
  // Chamado na criação do método (não precisa chamar o método)
  console.log('MÉTODO ESTÁTICO')
  console.log(classConstructor)
  console.log(methodName)
  console.log(propertyDescriptor)
  console.log('###')

  // Retorno pode ser omitido
  return {
    // Use get/set OU value
    enumerable: true,
    configurable: true,
  }
}

// Parâmetro de método
function decoratorOfParametroDeMethod(
  classPrototype: any,
  methodName: string,
  propertyIndex: number,
): any {
  // Chamado na criação do método
  console.log('PARÂMETRO DE MÉTODO')
  console.log(classPrototype)
  console.log(methodName)
  console.log(propertyIndex)
  console.log('###')

  // Retorno é ignorado
}

// Parâmetro de método estático
function decoratorOfParamOfStaticMethod(
  classConstructor: Constructor,
  methodName: string,
  propertyIndex: number,
): any {
  // Chamado na criação do parâmetro (não precisa chamar o método)
  console.log('PARÂMETRO DE MÉTODO ESTÁTICO')
  console.log(classConstructor)
  console.log(methodName)
  console.log(propertyIndex)
  console.log('###')

  // Retorno é ignorado
}

// Properties
function decoratorOfProperties(classPrototype: any, propertyName: string): any {
  // Chamado na criação da Properties
  console.log('DECORADOR DE Properties')
  console.log(classPrototype)
  console.log(propertyName)
  console.log('###')

  // Retorno pode ser omitido
  // Use get e set para manipular o value da Properties
  let propertyValue: any
  return {
    enumerable: true,
    configurable: true,
    get: () => propertyValue,
    set: (value: any) => {
      if (typeof value === 'string') {
        propertyValue = value.split('').reverse().join('')
        return
      }
      propertyValue = value
    },
  }
}

// Properties estática
function decoratorOfStaticProperty(
  classConstructor: any,
  propertyName: string,
): any {
  // Chamado na criação da Properties estática
  console.log('DECORADOR DE Properties ESTÁTICA')
  console.log(classConstructor)
  console.log(propertyName)
  console.log('###')

  // Retorno pode ser omitido
  return {
    // Use get/set OU value
    enumerable: true,
    configurable: true,
  }
}

// Getter/Setter
function decoratorOfGetterESetterNormal(
  classPrototype: any,
  propertyName: string,
  propertyDescriptor: PropertyDescriptor,
): any {
  // Chamado na criação do método
  // (só pode ser aplicado no getter ou no setter - não em ambos)
  console.log('GETTER/SETTER normal')
  console.log(classPrototype)
  console.log(propertyName)
  console.log(propertyDescriptor)
  console.log('###')

  // Retorno pode ser omitido
  return {
    // Use get/set OU value
    enumerable: true,
    configurable: true,
  }
}

// Getter/Setter estático
function decoratorOfGetterESetterStatic(
  classConstructor: Constructor,
  propertyName: string,
  propertyDescriptor: PropertyDescriptor,
): any {
  // Chamado na criação do método
  // (só pode ser aplicado no getter ou no setter - não em ambos)
  console.log('GETTER/SETTER estático')
  console.log(classConstructor)
  console.log(propertyName)
  console.log(propertyDescriptor)
  console.log('###')

  // Retorno pode ser omitido
  return {
    // Use get/set OU value
    enumerable: true,
    configurable: true,
  }
}

// A classe e o uso dos decorators

@decoratorOfClasse
export class SomePerson {
  @decoratorOfProperties
  name: string
  lastname: string
  age: number

  @decoratorOfStaticProperty
  static StaticProperty = 'value Properties ESTÁTICA'

  constructor(name: string, lastname: string, age: number) {
    this.name = name
    this.lastname = lastname
    this.age = age
  }

  @decoratorOfMethod
  Method(@decoratorOfParametroDeMethod msg: string): string {
    return `${this.name} ${this.lastname}: ${msg}`
  }

  @decoratorOfStaticMethod
  static MethodStatic(@decoratorOfParamOfStaticMethod msg: string): string {
    return SomePerson.StaticProperty + ' - ' + msg
  }

  get nameCompleto(): string {
    return this.name + ' ' + this.lastname
  }

  @decoratorOfGetterESetterNormal
  set nameCompleto(value: string) {
    const palavras = value.split(/\s+/g)
    const primeironame = palavras.shift()
    if (!primeironame) return
    this.name = primeironame
    this.lastname = palavras.join(' ')
  }

  @decoratorOfGetterESetterStatic
  static get staticPropertyGetterSetter(): string {
    return SomePerson.StaticProperty
  }

  static set staticPropertyGetterSetter(value: string) {
    SomePerson.StaticProperty = value
  }
}

// Uso da classe

const pessoa = new SomePerson('Luiz', 'Otávio', 30)
pessoa.nameCompleto = 'João Silva Oliveira'
const Method = pessoa.Method('Olá mundo!')
const MethodStatic = SomePerson.MethodStatic('Olá mundo!')
console.log(pessoa)
console.log(Method)
console.log(MethodStatic)
console.log(SomePerson.StaticProperty)
