import { User } from '../models/user'

export interface IUserRepository {
  get(): Promise<User[]>
  find(id: Number): Promise<User>
}
