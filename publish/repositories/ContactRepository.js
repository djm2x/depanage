"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var typedi_1 = require("typedi");
var TypeOrmRepository_1 = require("./shared/TypeOrmRepository");
var ContactRepository = (function (_super) {
    tslib_1.__extends(ContactRepository, _super);
    function ContactRepository() {
        return _super.call(this, null) || this;
    }
    ContactRepository = tslib_1.__decorate([
        typedi_1.Service(),
        tslib_1.__metadata("design:paramtypes", [])
    ], ContactRepository);
    return ContactRepository;
}(TypeOrmRepository_1.TypeOrmRepository));
exports.ContactRepository = ContactRepository;
