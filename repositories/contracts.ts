import { IUser } from "../models/user";

export interface IUserRepository {
  get(): Promise<IUser[]>;
  find(id: number): Promise<IUser>;
}
