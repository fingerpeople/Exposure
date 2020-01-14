import { IUser } from "../models/user";

export interface IUserService {
  get(): Promise<IUser[]>;
  find(id: number): Promise<IUser>;
}
