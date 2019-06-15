"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var TypeOrmRepository = (function () {
    function TypeOrmRepository(entityClass) {
        this.context = typeorm_1.getRepository(entityClass);
    }
    TypeOrmRepository.prototype.insertOrUpdate = function (model) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var o;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.context.findOne(model.id)];
                    case 1:
                        o = _a.sent();
                        if (o) {
                            return [2, this.context.update(model.id, Object.assign(o, model))];
                        }
                        else {
                            return [2, this.context.insert(this.context.create(model))];
                        }
                        return [2];
                }
            });
        });
    };
    TypeOrmRepository.prototype.post = function (model) {
        return this.context.insert(this.context.create(model));
    };
    TypeOrmRepository.prototype.find = function (options) {
        return this.context.find(options);
    };
    TypeOrmRepository.prototype.page = function (table, startIndex, pageSize) {
        console.log(this.context.manager);
        return Promise.all([
            this.context.query("select * from " + table + " order by id desc Limit " + startIndex + ", " + pageSize),
            this.context.count()
        ]);
    };
    TypeOrmRepository.prototype.getAll = function () {
        return this.context.find({});
    };
    TypeOrmRepository.prototype.findById = function (id) {
        return this.context.findOne(id);
    };
    TypeOrmRepository.prototype.put = function (id, model) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var old;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.context.findOneOrFail(id)];
                    case 1:
                        old = _a.sent();
                        return [2, this.context.update(id, Object.assign(old, model))];
                }
            });
        });
    };
    TypeOrmRepository.prototype.delete = function (id) {
        return this.context.delete(id);
    };
    return TypeOrmRepository;
}());
exports.TypeOrmRepository = TypeOrmRepository;
