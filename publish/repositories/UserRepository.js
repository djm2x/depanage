"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var typedi_1 = require("typedi");
var TypeOrmRepository_1 = require("./shared/TypeOrmRepository");
var Models_1 = require("../models/Models");
var UserRepository = (function (_super) {
    tslib_1.__extends(UserRepository, _super);
    function UserRepository() {
        return _super.call(this, Models_1.User) || this;
    }
    UserRepository.prototype.login = function (model) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var user;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.context.findOne({ email: model.email })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw 'user not found';
                        }
                        if (model.password !== user.password) {
                            throw 'password not correct';
                        }
                        return [2, user];
                }
            });
        });
    };
    UserRepository.prototype.page = function (table, startIndex, pageSize) {
        console.log(this.context.manager);
        return Promise.all([
            this.context.query("select * from " + table + " order by id desc Limit " + startIndex + ", " + pageSize),
            this.context.count()
        ]);
    };
    UserRepository = tslib_1.__decorate([
        typedi_1.Service(),
        tslib_1.__metadata("design:paramtypes", [])
    ], UserRepository);
    return UserRepository;
}(TypeOrmRepository_1.TypeOrmRepository));
exports.UserRepository = UserRepository;
