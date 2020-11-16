import 'reflect-metadata';
import connect from './database/connection';
import UserBusiness from './business/UserBusiness';
import User from './entity/User';

(async () => {
    await connect();

    const userBusiness = new UserBusiness();
    const user = await userBusiness.findAll();

    console.log(user);
})();