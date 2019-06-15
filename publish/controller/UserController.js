"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var typedi_1 = require("typedi");
var routing_controllers_1 = require("routing-controllers");
var UserRepository_1 = require("../repositories/UserRepository");
var UserController = (function () {
    function UserController() {
        this.service = typedi_1.default.get(UserRepository_1.UserRepository);
    }
    UserController.prototype.login = function (model, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.service.login(model)];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        return [2, response.json(result)];
                    case 2:
                        error_1 = _a.sent();
                        return [2, response.json(error_1)];
                    case 3: return [2];
                }
            });
        });
    };
    UserController.prototype.getOne = function (id, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, _b, error_2;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        _b = (_a = response).json;
                        return [4, this.service.findById(id)];
                    case 1: return [2, _b.apply(_a, [_c.sent()])];
                    case 2:
                        error_2 = _c.sent();
                        return [2, response.json(error_2)];
                    case 3: return [2];
                }
            });
        });
    };
    UserController.prototype.put = function (id, model, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, _b, error_3;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        _b = (_a = response).json;
                        return [4, this.service.put(id, model)];
                    case 1: return [2, _b.apply(_a, [_c.sent()])];
                    case 2:
                        error_3 = _c.sent();
                        return [2, response.json(error_3)];
                    case 3: return [2];
                }
            });
        });
    };
    UserController.prototype.remove = function (id, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, _b, error_4;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        _b = (_a = response).json;
                        return [4, this.service.delete(id)];
                    case 1: return [2, _b.apply(_a, [_c.sent()])];
                    case 2:
                        error_4 = _c.sent();
                        return [2, response.json(error_4)];
                    case 3: return [2];
                }
            });
        });
    };
    tslib_1.__decorate([
        routing_controllers_1.Post(),
        tslib_1.__param(0, routing_controllers_1.Body()), tslib_1.__param(1, routing_controllers_1.Res()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], UserController.prototype, "login", null);
    tslib_1.__decorate([
        routing_controllers_1.Get('/:id'),
        tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.Res()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], UserController.prototype, "getOne", null);
    tslib_1.__decorate([
        routing_controllers_1.Put('/:id'),
        tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.Body()), tslib_1.__param(2, routing_controllers_1.Res()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], UserController.prototype, "put", null);
    tslib_1.__decorate([
        routing_controllers_1.Delete('/:id'),
        tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.Res()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], UserController.prototype, "remove", null);
    UserController = tslib_1.__decorate([
        routing_controllers_1.JsonController('/users'),
        tslib_1.__metadata("design:paramtypes", [])
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;
