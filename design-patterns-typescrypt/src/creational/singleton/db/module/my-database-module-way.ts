import { User } from '../../interfaces/user';

const users: User[] = []

export const MyDatabaseModule = {
    

    add(user: User): void {
        users.push(user)
    },

    remove(index: number): void {
        users.splice(index, 1)
    },

    show(): void {
        users.forEach(it => console.log(it))
    },
}
