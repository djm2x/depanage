"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var typedi_1 = require("typedi");
var TypeOrmRepository_1 = require("./shared/TypeOrmRepository");
var Models_1 = require("../models/Models");
var SectionRepository = (function (_super) {
    tslib_1.__extends(SectionRepository, _super);
    function SectionRepository() {
        return _super.call(this, Models_1.Section) || this;
    }
    SectionRepository = tslib_1.__decorate([
        typedi_1.Service(),
        tslib_1.__metadata("design:paramtypes", [])
    ], SectionRepository);
    return SectionRepository;
}(TypeOrmRepository_1.TypeOrmRepository));
exports.SectionRepository = SectionRepository;
