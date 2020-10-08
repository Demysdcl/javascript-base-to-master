import { MyDatabaseClassic } from './my-database-classic';


const myDatabaseClassic1 = MyDatabaseClassic.getInstance()

myDatabaseClassic1.add({name: 'Demys', age: 35})
myDatabaseClassic1.add({name: 'Laíza', age: 27})
myDatabaseClassic1.add({name: 'Davi', age: 3})
myDatabaseClassic1.add({name: 'Carlos', age: 35})
myDatabaseClassic1.add({name: 'Maria', age: 35})

export { myDatabaseClassic1 };
