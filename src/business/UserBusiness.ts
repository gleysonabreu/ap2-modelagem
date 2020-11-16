import { ICreateUser } from "../dao/ICreateUser";
import IUserDao from '../dao/IDaoUser';
import UserDao from "../dao/UserDao";
import User from "../entity/User";

class UserBusiness {

  private userDao: IUserDao;

  constructor() {
    this.userDao = new UserDao();
  }

  findAll = async () => {
    const users = await this.userDao.findAll();

    if(!users) throw new Error('Não tem usuários cadastrados.');

    return users
  }

  userRegister = async ({ email, name }: ICreateUser): Promise<User> => {
    
    if(email === '' || name === '') throw new Error('Preencha todos os dados.');
    const user = await this.userDao.findByEmail(email);

    if(user) throw new Error('Usuário já cadastrado!');

    const register = await this.userDao.create({ name, email});

    return register;

  };

  userDelete = async (id: number): Promise<void> => {
    const checkExist = await this.findUserById(id);
    await this.userDao.delete(checkExist.id);
  }

  userUpdate = async (user: User): Promise<User> => {
    const userUpdated = await this.userDao.update(user);

    return userUpdated;
  }

  findUserByEmail = async (email: string): Promise<User | undefined> => {
    const user = await this.userDao.findByEmail(email);

    if(!user) throw new Error('Usuário não existe!');

    return user;
  }

  findUserById = async (id: number): Promise<User | undefined> => {
    const user = await this.userDao.show(id);

    if(!user) throw new Error('Usuário não existe!');

    return user;
  }
}

export default UserBusiness;