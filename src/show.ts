import 'reflect-metadata';
import { getConnection } from 'typeorm';
import connect from './database/connection';
import StudentBusiness from './business/StudentBusiness';

(async () => {
  try {
    await connect();

    const studentBusiness = new StudentBusiness();
    const student = await studentBusiness.findStudentById(1);

    console.log(student);

    await getConnection().close();
  } catch (error) {
    throw new Error(error);
  }
})();