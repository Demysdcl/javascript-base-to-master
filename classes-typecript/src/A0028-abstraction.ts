export abstract class Character {
  protected abstract emoji: string

  constructor(
    protected name: string,
    protected attack: number,
    protected life: number,
  ) {}

  attackOther(character: Character): void {
    this.warCry()
    character.loseLife(this.attack)
  }

  loseLife(attackForce: number): void {
    this.life -= attackForce
    console.log(`${this.emoji} ${this.name} has ${this.life} right now`)
  }

  abstract warCry(): void
}

export class Warrior extends Character {
  protected emoji = '\u{1F9DD}'

  warCry(): void {
    console.log(this.emoji + ' Pegasus meteor')
  }
}
export class Monster extends Character {
  protected emoji = '\u{1F9DF}'
  warCry(): void {
    console.log(this.emoji + ' Take this')
  }
}

const warrior = new Warrior('Saint seiya', 100, 1200)
const monster = new Monster('Cacius', 120, 1000)

warrior.attackOther(monster)
warrior.attackOther(monster)
warrior.attackOther(monster)

monster.attackOther(warrior)
monster.attackOther(warrior)
monster.attackOther(warrior)
