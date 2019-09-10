import { Service} from 'typedi';
import { TypeOrmRepository } from './shared/TypeOrmRepository';
import { Chiffre } from '../models/Models';

@Service()
export class ChiffreRepository extends TypeOrmRepository // implements IRepository<T>
{
    constructor() {
        super(Chiffre);
    }
}
