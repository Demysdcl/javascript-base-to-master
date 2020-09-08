export class Writer {
  private _tool: Tool | null = null

  constructor(private _name: string) {}

  get name(): string {
    return this._name
  }

  get tool(): Tool | null {
    return this._tool
  }

  set tool(tool: Tool | null) {
    this._tool = tool
  }

  write(): void {
    if (this.tool === null) {
      console.log(`I can't write without a tool`)
    } else {
      this.tool.write()
    }
  }
}

export abstract class Tool {
  constructor(private _name: string) {}

  abstract write(): void

  get name(): string {
    return this._name
  }
}

export class Pen extends Tool {
  write(): void {
    console.log(`${this.name} is writting`)
  }
}

export class Typewriter extends Tool {
  write(): void {
    console.log(`${this.name} is typing`)
  }
}

const writer = new Writer('Demys')
const pen = new Pen('Bic')
const typewriter = new Typewriter('Typer 3000')

writer.write()

writer.tool = pen
writer.write()

writer.tool = typewriter
writer.write()
