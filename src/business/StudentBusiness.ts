import ICreateStudent from '../dao/ICreateStudent';
import IStudentDao from '../dao/IDaoStudent';
import StudentDAO from '../dao/StudentDAO';
import Student from '../entity/Student';

class StudentBusiness {

  private studentDAO: IStudentDao;

  constructor() {
    this.studentDAO = new StudentDAO();
  }

  findAll = async () => {
    const students = await this.studentDAO.findAll();

    if(!students) throw new Error('Não tem estudantes cadastrados.');

    return students;
  }

  studentRegister = async ({ email, name }: ICreateStudent): Promise<Student> => {
    
    if(email === '' || name === '') throw new Error('Preencha todos os dados.');
    const student = await this.studentDAO.findByEmail(email);

    if(student) throw new Error('Estudante já cadastrado!');

    const register = await this.studentDAO.create({ name, email});

    return register;

  };

  studentDelete = async (id: number): Promise<void> => {
    const checkExist = await this.findStudentById(id);
    await this.studentDAO.delete(checkExist.id);
  }

  studentUpdate = async (student: Student): Promise<Student> => {
    const studentUpdated = await this.studentDAO.update(student);

    return studentUpdated;
  }

  findStudentByEmail = async (email: string): Promise<Student | undefined> => {
    const student = await this.studentDAO.findByEmail(email);

    if(!student) throw new Error('Estudante não existe!');

    return student;
  }

  findStudentById = async (id: number): Promise<Student | undefined> => {
    const student = await this.studentDAO.show(id);

    if(!student) throw new Error('Estudante não existe!');

    return student;
  }
}

export default StudentBusiness;