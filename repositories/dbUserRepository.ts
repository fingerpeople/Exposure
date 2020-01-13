import { UserNotFoundException } from '../exceptions/userExceptions'
import { User } from '../models/user'

const users = [
  {
    id: 1,
    name: 'User 1'
  },
  {
    id: 2,
    name: 'User 2'
  }
]

export default class DbUserRepository {
  get(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(users)
      }, 1000)
    })
  }

  find(id: Number): Promise<User> {
    return new Promise((resolve, reject) => {
      const user = users.find(item => item.id === id)

      setTimeout(() => {
        if (!user) {
          reject(new UserNotFoundException())
        }
        resolve(user)
      }, 1000)
    })
  }
}
