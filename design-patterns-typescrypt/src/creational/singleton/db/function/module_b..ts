import { myDatabaseFunction as fromModuleA } from './module_a';
import { MyDatabaseFunction } from './my-database-function-way';

const myDatabaseFunction = MyDatabaseFunction

myDatabaseFunction.add({name: 'Demys B', age: 35})
myDatabaseFunction.add({name: 'Laíza B', age: 27})
myDatabaseFunction.add({name: 'Davi B', age: 3})
myDatabaseFunction.add({name: 'Carlos B', age: 35})
myDatabaseFunction.add({name: 'Maria B', age: 35})
myDatabaseFunction.show()

console.log(myDatabaseFunction === fromModuleA)