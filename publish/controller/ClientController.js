"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var typedi_1 = require("typedi");
var routing_controllers_1 = require("routing-controllers");
var ClientRepository_1 = require("../repositories/ClientRepository");
var ClientController = (function () {
    function ClientController() {
        this.service = typedi_1.default.get(ClientRepository_1.ClientRepository);
    }
    ClientController.prototype.getAll = function (response) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, _b, error_1;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        _b = (_a = response).json;
                        return [4, this.service.getAll()];
                    case 1: return [2, _b.apply(_a, [_c.sent()])];
                    case 2:
                        error_1 = _c.sent();
                        return [2, response.json(error_1)];
                    case 3: return [2];
                }
            });
        });
    };
    ClientController.prototype.post = function (model, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, _b, error_2;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        _b = (_a = response).json;
                        return [4, this.service.post(model)];
                    case 1: return [2, _b.apply(_a, [_c.sent()])];
                    case 2:
                        error_2 = _c.sent();
                        return [2, response.json(error_2)];
                    case 3: return [2];
                }
            });
        });
    };
    ClientController.prototype.getOne = function (id, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, _b, error_3;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        _b = (_a = response).json;
                        return [4, this.service.findById(id)];
                    case 1: return [2, _b.apply(_a, [_c.sent()])];
                    case 2:
                        error_3 = _c.sent();
                        return [2, response.json(error_3)];
                    case 3: return [2];
                }
            });
        });
    };
    ClientController.prototype.put = function (id, model, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, _b, error_4;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        _b = (_a = response).json;
                        return [4, this.service.put(id, model)];
                    case 1: return [2, _b.apply(_a, [_c.sent()])];
                    case 2:
                        error_4 = _c.sent();
                        return [2, response.json(error_4)];
                    case 3: return [2];
                }
            });
        });
    };
    ClientController.prototype.remove = function (id, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, _b, error_5;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        _b = (_a = response).json;
                        return [4, this.service.delete(id)];
                    case 1: return [2, _b.apply(_a, [_c.sent()])];
                    case 2:
                        error_5 = _c.sent();
                        return [2, response.json(error_5)];
                    case 3: return [2];
                }
            });
        });
    };
    tslib_1.__decorate([
        routing_controllers_1.Get(),
        tslib_1.__param(0, routing_controllers_1.Res()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], ClientController.prototype, "getAll", null);
    tslib_1.__decorate([
        routing_controllers_1.Post(),
        tslib_1.__param(0, routing_controllers_1.Body()), tslib_1.__param(1, routing_controllers_1.Res()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], ClientController.prototype, "post", null);
    tslib_1.__decorate([
        routing_controllers_1.Get('/:id'),
        tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.Res()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], ClientController.prototype, "getOne", null);
    tslib_1.__decorate([
        routing_controllers_1.Put('/:id'),
        tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.Body()), tslib_1.__param(2, routing_controllers_1.Res()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], ClientController.prototype, "put", null);
    tslib_1.__decorate([
        routing_controllers_1.Delete('/:id'),
        tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.Res()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], ClientController.prototype, "remove", null);
    ClientController = tslib_1.__decorate([
        routing_controllers_1.JsonController('/clients'),
        tslib_1.__metadata("design:paramtypes", [])
    ], ClientController);
    return ClientController;
}());
exports.ClientController = ClientController;
