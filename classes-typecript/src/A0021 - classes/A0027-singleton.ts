export class Database {
  private static instance: Database

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  static getInstance(host: string, user: string, password: string): Database {
    if (!Database.instance) {
      Database.instance = new Database(host, user, password)
    }
    return Database.instance
  }

  connect(): void {
    console.log(`Conected: ${this.host}, ${this.user}, ${this.password} `)
  }
}

const db1 = Database.getInstance('localhost', 'user', '12356')
const db2 = Database.getInstance('10.0.0.0', 'user2', '12357')

console.log(db1 === db2)
