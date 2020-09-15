type Vehicle = {
  brand: string
  year: number
}

type Veiculo = {
  marca: Vehicle['brand']
  ano: Vehicle['year']
  tipo: string
}

const carro: Veiculo = {
  marca: 'Ford',
  // Must be the same type o Vehicle year, it is number
  ano: '2019',
  type: 'esportivo',
}
