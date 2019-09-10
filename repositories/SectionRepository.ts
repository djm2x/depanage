import { Service} from 'typedi';
import { TypeOrmRepository } from './shared/TypeOrmRepository';
import { Section } from '../models/Models';

@Service()
export class SectionRepository extends TypeOrmRepository // implements IRepository<T>
{
    constructor() {
        super(Section);
    }
}
