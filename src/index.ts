import 'reflect-metadata';
import connect from './database/connection';
import UserBusiness from './business/UserBusiness';

(async () => {
    await connect();

    const userBusiness = new UserBusiness();
    await userBusiness.userDelete(10);

    console.log('Deletado com sucesso!');

})();