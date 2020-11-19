import 'reflect-metadata';
import { getConnection } from 'typeorm';
import connect from './database/connection';
import StudentBusiness from './business/StudentBusiness';
import Student from './entity/Student';

(async () => {
    await connect();

    const studentBusiness = new StudentBusiness();
    const student = await studentBusiness.findAll();

    console.log(student);

    await getConnection().close();
})();