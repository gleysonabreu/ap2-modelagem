import Student from "../entity/Student";
import ICreateStudent from "./ICreateStudent";

export default interface IDaoStudent {
  create(student: ICreateStudent): Promise<Student>;
  show(id: number): Promise<Student | undefined>;
  update(student: Student): Promise<Student>;
  delete(id: number): Promise<void>;
  findByEmail(email: string): Promise<Student | undefined>;
  findAll(): Promise<Student[] | undefined>;
}