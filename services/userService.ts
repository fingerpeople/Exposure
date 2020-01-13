import { IUserRepository } from "../repositories/contracts";
import { User } from "../models/user";

export default class UserService {
  protected dbUserRepository: IUserRepository

  constructor(dbUserRepository: IUserRepository) {
    this.dbUserRepository = dbUserRepository
  }

  get(): Promise<User[]> {
    return this.dbUserRepository.get()
  }

  find(id: Number): Promise<User> {
    return this.dbUserRepository.find(id)
  }
}
