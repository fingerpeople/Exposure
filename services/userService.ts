import { IUser } from "../models/user";
import { IUserRepository } from "../repositories/contracts";

export default class UserService {
  protected dbUserRepository: IUserRepository;

  constructor(dbUserRepository: IUserRepository) {
    this.dbUserRepository = dbUserRepository;
  }

  public get(): Promise<IUser[]> {
    return this.dbUserRepository.get();
  }

  public find(id: number): Promise<IUser> {
    return this.dbUserRepository.find(id);
  }
}
