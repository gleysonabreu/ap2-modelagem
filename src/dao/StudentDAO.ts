import { getRepository, Repository } from 'typeorm';
import Student from '../entity/Student';
import ICreateStudent from './ICreateStudent';
import IStudentDAO from './IDaoStudent';

class StudentDao implements IStudentDAO {
  private ormRepository: Repository<Student>;

  constructor(){
    this.ormRepository = getRepository(Student);
  }

  findAll = async (): Promise<Student[] | undefined> => {
    const students = <Student[]> await this.ormRepository.query('SELECT * FROM student');
    return students;
  }

  delete = async (id: number): Promise<void> => {
    await this.ormRepository.query('DELETE FROM student WHERE id = ?', [id]);
  }

  create = async (student: ICreateStudent): Promise<Student> => {
    const createStudent = this.ormRepository.create(student);
    await this.ormRepository.save(createStudent);

    this.ormRepository.queryRunner
    return createStudent;
  }

  show = async (id: number): Promise<Student | undefined> => {
    const student = <Student> await this.ormRepository.query('SELECT * FROM student WHERE id = ?', [id]);
    return student[0];
  }

  update = async (student: Student): Promise<Student> => { 
    const studentUpdated = await this.ormRepository.save({ ...student });
    return studentUpdated;
  }

  findByEmail = async (email: string): Promise<Student | undefined> => {
    const student = <Student> await this.ormRepository.query('SELECT * FROM student WHERE email = ?', [email]);  
    return student[0];
  }
}

export default StudentDao;