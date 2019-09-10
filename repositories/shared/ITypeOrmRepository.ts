
export interface ITypeOrmRepository {
    post(model: any): Promise<any>;

    put(id, model): Promise<any>;

    delete(id): Promise<any>;

    find(options: any): Promise<any>;

    findById(id: any): Promise<any>;

    getAll(): Promise<any>;
}
