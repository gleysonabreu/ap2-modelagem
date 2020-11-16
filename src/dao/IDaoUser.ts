import User from "../entity/User";
import { ICreateUser } from "./ICreateUser";

export default interface IDaoUser {
  create(user: ICreateUser): Promise<User>;
  show(id: number): Promise<User | undefined>;
  update(user: User): Promise<User>;
  delete(id: number): Promise<void>;
  findByEmail(email: string): Promise<User | undefined>;
  findAll(): Promise<User[] | undefined>;
}