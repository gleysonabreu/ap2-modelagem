import { getRepository, Repository } from 'typeorm';
import Student from '../entity/Student';
import ICreateStudent from './ICreateStudent';
import IStudentDAO from './IDaoStudent';

class UserDao implements IStudentDAO {
  private ormRepository: Repository<Student>;

  constructor(){
    this.ormRepository = getRepository(Student);
  }

  findAll = async (): Promise<Student[] | undefined> => {
    const students = await this.ormRepository.createQueryBuilder('SELECT * FROM student').getMany();
    return students;
  }

  delete = async (id: number): Promise<void> => {
    await this.ormRepository.createQueryBuilder('DELETE FROM student WHERE id = :id')
    .setParameters({ id })
    .execute();
  }

  create = async (student: ICreateStudent): Promise<Student> => {
    const createStudent = this.ormRepository.create(student);
    await this.ormRepository.save(createStudent);

    this.ormRepository.queryRunner
    return createStudent;
  }

  show = async (id: number): Promise<Student | undefined> => {
    const user = await this.ormRepository.createQueryBuilder('SELECT * FROM student WHERE id = :id')
    .setParameters({ id }).getOne();

    return user;
  }

  update = async (student: Student): Promise<Student> => { 
    const studentUpdated = await this.ormRepository.save({ ...student });

    return studentUpdated;
  }

  findByEmail = async (email: string): Promise<Student | undefined> => {
    const user = await this.ormRepository
    .createQueryBuilder('SELECT * FROM users WHERE email = :email')
    .setParameters({ email })
    .getOne();
    
    return user;
  }
}

export default UserDao;