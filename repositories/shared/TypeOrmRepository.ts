import { ITypeOrmRepository } from './ITypeOrmRepository';
import { getRepository, ObjectType, EntitySchema, Repository, FindManyOptions } from 'typeorm';

export class TypeOrmRepository implements ITypeOrmRepository {
  protected context: Repository<any>;
  constructor(entityClass: ObjectType<any> | EntitySchema<any> | string) {
    this.context = getRepository(entityClass);
  }

  async insertOrUpdate(model: any) {
    const o = await this.context.findOne(model.id);
    if (o) {
      return this.context.update(model.id, Object.assign(o, model));
    } else {
      return this.context.insert(this.context.create(model));
    }
  }

  post(model: any): Promise<any> {
    return this.context.insert(this.context.create(model));
  }

  find(options: FindManyOptions<any>) {
    return this.context.find(options);
  }

  page(table: string, startIndex: number, pageSize: number) {
    console.log(this.context.manager);
    return Promise.all([
      this.context.query(`select * from ${table} order by id desc Limit ${startIndex}, ${pageSize}`),
      this.context.count()
    ]);
  }

  getAll() {
    return this.context.find({});
  }

  findById(id) {
    return this.context.findOne(id);
  }

  async put(id, model) {
    const old = await this.context.findOneOrFail(id);
    return this.context.update(id, Object.assign(old, model));
  }

  delete(id) {
    return this.context.delete(id);
  }
}
