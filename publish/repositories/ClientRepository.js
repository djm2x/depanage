"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var typedi_1 = require("typedi");
var TypeOrmRepository_1 = require("./shared/TypeOrmRepository");
var Models_1 = require("../models/Models");
var ClientRepository = (function (_super) {
    tslib_1.__extends(ClientRepository, _super);
    function ClientRepository() {
        return _super.call(this, Models_1.Client) || this;
    }
    ClientRepository = tslib_1.__decorate([
        typedi_1.Service(),
        tslib_1.__metadata("design:paramtypes", [])
    ], ClientRepository);
    return ClientRepository;
}(TypeOrmRepository_1.TypeOrmRepository));
exports.ClientRepository = ClientRepository;
