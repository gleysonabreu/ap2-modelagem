import 'reflect-metadata';
import { getConnection } from 'typeorm';
import connect from './database/connection';
import StudentBusiness from './business/StudentBusiness';

(async () => {
  try {
    await connect();

    const studentBusiness = new StudentBusiness();
    const students = await studentBusiness.findAll();

    console.log(students);

    await getConnection().close();
  } catch (error) {
    throw new Error(error);
  }
})();