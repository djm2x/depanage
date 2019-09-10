import { Service} from 'typedi';
import { TypeOrmRepository } from './shared/TypeOrmRepository';

@Service()
export class ContactRepository extends TypeOrmRepository // implements IRepository<T>
{
    constructor() {
        super(null);
    }
}
