import { Service } from 'typedi';
import { TypeOrmRepository } from './shared/TypeOrmRepository';
import { User } from '../models/Models';

@Service()
export class UserRepository extends TypeOrmRepository // implements IRepository<T>
{
  constructor() {
    super(User);
  }

  async login(model: {email: any, password: string}) {
    const user = await this.context.findOne({email: model.email});
    if (!user) {
      throw 'user not found';
    }
    if (model.password !== user.password) {
      throw 'password not correct';
    }
    return user;
  }

  page(table: string, startIndex: number, pageSize: number) {
    console.log(this.context.manager);
    return Promise.all([
      this.context.query(`select * from ${table} order by id desc Limit ${startIndex}, ${pageSize}`),
      this.context.count()
    ]);
  }

}
