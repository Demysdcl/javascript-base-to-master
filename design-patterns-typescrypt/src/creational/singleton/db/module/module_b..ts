import { myDatabaseModule as fromModuleA } from './module_a';
import { MyDatabaseModule } from './my-database-module-way';

const myDatabaseModule = MyDatabaseModule

myDatabaseModule.add({name: 'Demys B', age: 35})
myDatabaseModule.add({name: 'Laíza B', age: 27})
myDatabaseModule.add({name: 'Davi B', age: 3})
myDatabaseModule.add({name: 'Carlos B', age: 35})
myDatabaseModule.add({name: 'Maria B', age: 35})
myDatabaseModule.show()

console.log(myDatabaseModule === fromModuleA)