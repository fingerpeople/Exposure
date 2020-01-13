import { User } from "../models/user";

export interface IUserService {
  get(): Promise<User[]>
  find(id: Number): Promise<User>
}
