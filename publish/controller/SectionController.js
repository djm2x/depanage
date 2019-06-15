"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var SectionRepository_1 = require("../repositories/SectionRepository");
var typedi_1 = require("typedi");
var routing_controllers_1 = require("routing-controllers");
var SectionController = (function () {
    function SectionController() {
        this.service = typedi_1.default.get(SectionRepository_1.SectionRepository);
    }
    SectionController.prototype.getValues = function (response) {
        return [{ val: 'me' }, { val: 'you' }];
    };
    SectionController.prototype.getAll = function (response) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, _b, error_1;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        console.log('getAll');
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        _b = (_a = response).json;
                        return [4, this.service.getAll()];
                    case 2: return [2, _b.apply(_a, [_c.sent()])];
                    case 3:
                        error_1 = _c.sent();
                        return [2, response.json(error_1)];
                    case 4: return [2];
                }
            });
        });
    };
    SectionController.prototype.insertOrUpdate = function (model, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, _b, error_2;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        _b = (_a = response).json;
                        return [4, this.service.insertOrUpdate(model)];
                    case 1: return [2, _b.apply(_a, [_c.sent()])];
                    case 2:
                        error_2 = _c.sent();
                        return [2, response.json(error_2)];
                    case 3: return [2];
                }
            });
        });
    };
    SectionController.prototype.post = function (model, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, _b, error_3;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        _b = (_a = response).json;
                        return [4, this.service.post(model)];
                    case 1: return [2, _b.apply(_a, [_c.sent()])];
                    case 2:
                        error_3 = _c.sent();
                        return [2, response.json(error_3)];
                    case 3: return [2];
                }
            });
        });
    };
    SectionController.prototype.getOne = function (id, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, _b, error_4;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        console.log('getOne');
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        _b = (_a = response).json;
                        return [4, this.service.findById(id)];
                    case 2: return [2, _b.apply(_a, [_c.sent()])];
                    case 3:
                        error_4 = _c.sent();
                        return [2, response.json(error_4)];
                    case 4: return [2];
                }
            });
        });
    };
    SectionController.prototype.put = function (id, model, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, _b, error_5;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        _b = (_a = response).json;
                        return [4, this.service.put(id, model)];
                    case 1: return [2, _b.apply(_a, [_c.sent()])];
                    case 2:
                        error_5 = _c.sent();
                        return [2, response.json(error_5)];
                    case 3: return [2];
                }
            });
        });
    };
    SectionController.prototype.remove = function (id, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, _b, error_6;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        _b = (_a = response).json;
                        return [4, this.service.delete(id)];
                    case 1: return [2, _b.apply(_a, [_c.sent()])];
                    case 2:
                        error_6 = _c.sent();
                        return [2, response.json(error_6)];
                    case 3: return [2];
                }
            });
        });
    };
    tslib_1.__decorate([
        routing_controllers_1.Get('/get/values'),
        tslib_1.__param(0, routing_controllers_1.Res()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], SectionController.prototype, "getValues", null);
    tslib_1.__decorate([
        routing_controllers_1.Get(),
        tslib_1.__param(0, routing_controllers_1.Res()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], SectionController.prototype, "getAll", null);
    tslib_1.__decorate([
        routing_controllers_1.Post('/save'),
        tslib_1.__param(0, routing_controllers_1.Body()), tslib_1.__param(1, routing_controllers_1.Res()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], SectionController.prototype, "insertOrUpdate", null);
    tslib_1.__decorate([
        routing_controllers_1.Post(),
        tslib_1.__param(0, routing_controllers_1.Body()), tslib_1.__param(1, routing_controllers_1.Res()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], SectionController.prototype, "post", null);
    tslib_1.__decorate([
        routing_controllers_1.Get('/:id'),
        tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.Res()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], SectionController.prototype, "getOne", null);
    tslib_1.__decorate([
        routing_controllers_1.Put('/:id'),
        tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.Body()), tslib_1.__param(2, routing_controllers_1.Res()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], SectionController.prototype, "put", null);
    tslib_1.__decorate([
        routing_controllers_1.Delete('/:id'),
        tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.Res()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], SectionController.prototype, "remove", null);
    SectionController = tslib_1.__decorate([
        routing_controllers_1.JsonController('/sections'),
        tslib_1.__metadata("design:paramtypes", [])
    ], SectionController);
    return SectionController;
}());
exports.SectionController = SectionController;
