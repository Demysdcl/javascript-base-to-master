type ColorsObj = typeof colorsObj
type ColorsKeys = keyof ColorsObj

const colorsObj = {
  red: 'vermelho',
  green: 'verde',
  blue: 'azul',
  purple: 'roxo',
}

function translateColor(color: ColorsKeys, colors: ColorsObj) {
  return colors[color]
}

console.log(translateColor('blue', colorsObj))
console.log(translateColor('green', colorsObj))
console.log(translateColor('red', colorsObj))
