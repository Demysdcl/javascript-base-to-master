import { myDatabaseClassic1 as fromModuleA } from './module_a';
import { MyDatabaseClassic } from './my-database-classic';

const myDatabaseClassic1 = MyDatabaseClassic.getInstance()

myDatabaseClassic1.add({name: 'Demys B', age: 35})
myDatabaseClassic1.add({name: 'Laíza B', age: 27})
myDatabaseClassic1.add({name: 'Davi B', age: 3})
myDatabaseClassic1.add({name: 'Carlos B', age: 35})
myDatabaseClassic1.add({name: 'Maria B', age: 35})
myDatabaseClassic1.show()

console.log(myDatabaseClassic1 === fromModuleA)