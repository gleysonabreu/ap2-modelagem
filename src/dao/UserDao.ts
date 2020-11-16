import { getRepository, Repository } from 'typeorm';
import User from '../entity/User';
import { ICreateUser } from './ICreateUser';
import IUserDao from './IDaoUser';

class UserDao implements IUserDao{
  private ormRepository: Repository<User>;

  constructor(){
    this.ormRepository = getRepository(User);
  }

  delete = async (id: number): Promise<void> => {
    await this.ormRepository.delete(id);
  }

  create = async (user: ICreateUser): Promise<User> => {
    const createUser = this.ormRepository.create(user);
    await this.ormRepository.save(createUser);

    return createUser;
  }

  show = async (id: number): Promise<User| undefined> => {
    const user = await this.ormRepository.findOneOrFail(id);

    return user;
  }

  update = async (user: User): Promise<User> => { 
    const userUpdated = await this.ormRepository.save({ ...user });

    return userUpdated;
  }

  findByEmail = async (email: string): Promise<User | undefined> => {
    const user = await this.ormRepository
    .createQueryBuilder('SELECT * FROM users WHERE email = :email')
    .setParameters({ email })
    .getOne();
    
    return user;
  }
}

export default UserDao;