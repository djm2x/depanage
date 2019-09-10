import { Service} from 'typedi';
import { TypeOrmRepository } from './shared/TypeOrmRepository';
import { Client } from '../models/Models';

@Service()
export class ClientRepository extends TypeOrmRepository // implements IRepository<T>
{
    constructor() {
        super(Client);
    }
}
