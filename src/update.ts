import 'reflect-metadata';
import { getConnection } from 'typeorm';
import connect from './database/connection';
import StudentBusiness from './business/StudentBusiness';

(async () => {
  try {
    await connect();

    const studentBusiness = new StudentBusiness();
    const student = await studentBusiness.findStudentById(1);
    student.name = 'Gleyson Abreu de Sousa';

    const studentUpdate = await studentBusiness.studentUpdate(student);
    console.log(studentUpdate);

    await getConnection().close();
  } catch (error) {
    throw new Error(error);
  }
})();