import 'reflect-metadata';
import { getConnection } from 'typeorm';
import connect from './database/connection';
import StudentBusiness from './business/StudentBusiness';

(async () => {
  try {
    await connect();

    const studentBusiness = new StudentBusiness();
    await studentBusiness.studentDelete(1);

    console.log('Deletado com sucesso.');

    await getConnection().close();
  } catch (error) {
    throw new Error(error);
  }
})();