import 'reflect-metadata';
import { getConnection } from 'typeorm';
import connect from './database/connection';
import StudentBusiness from './business/StudentBusiness';

(async () => {

  try {
    await connect();

    const name = 'Gleyson Abreu';
    const email = 'gleyson_datu@hotmail.com';

    const studentBusiness = new StudentBusiness();
    const student = await studentBusiness.studentRegister({ email, name });

    console.log(student);

    await getConnection().close();
  } catch (error) {
    throw new Error(error);
  }

})();