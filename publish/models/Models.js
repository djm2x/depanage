"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var Section = (function () {
    function Section() {
    }
    tslib_1.__decorate([
        typeorm_1.PrimaryColumn(),
        tslib_1.__metadata("design:type", Number)
    ], Section.prototype, "id", void 0);
    tslib_1.__decorate([
        typeorm_1.Column('text'),
        tslib_1.__metadata("design:type", String)
    ], Section.prototype, "discription", void 0);
    tslib_1.__decorate([
        typeorm_1.Column(),
        typeorm_1.CreateDateColumn(),
        tslib_1.__metadata("design:type", Date)
    ], Section.prototype, "createdAt", void 0);
    tslib_1.__decorate([
        typeorm_1.Column(),
        typeorm_1.UpdateDateColumn(),
        tslib_1.__metadata("design:type", Date)
    ], Section.prototype, "updatedAt", void 0);
    Section = tslib_1.__decorate([
        typeorm_1.Entity()
    ], Section);
    return Section;
}());
exports.Section = Section;
var Client = (function () {
    function Client() {
    }
    tslib_1.__decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        tslib_1.__metadata("design:type", Number)
    ], Client.prototype, "id", void 0);
    tslib_1.__decorate([
        typeorm_1.Column('text'),
        tslib_1.__metadata("design:type", String)
    ], Client.prototype, "name", void 0);
    tslib_1.__decorate([
        typeorm_1.Column('text'),
        tslib_1.__metadata("design:type", String)
    ], Client.prototype, "imgUrl", void 0);
    Client = tslib_1.__decorate([
        typeorm_1.Entity()
    ], Client);
    return Client;
}());
exports.Client = Client;
var Chiffre = (function () {
    function Chiffre() {
    }
    tslib_1.__decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        tslib_1.__metadata("design:type", Number)
    ], Chiffre.prototype, "id", void 0);
    tslib_1.__decorate([
        typeorm_1.Column('text'),
        tslib_1.__metadata("design:type", String)
    ], Chiffre.prototype, "name", void 0);
    tslib_1.__decorate([
        typeorm_1.Column('text'),
        tslib_1.__metadata("design:type", String)
    ], Chiffre.prototype, "count", void 0);
    Chiffre = tslib_1.__decorate([
        typeorm_1.Entity()
    ], Chiffre);
    return Chiffre;
}());
exports.Chiffre = Chiffre;
var User = (function () {
    function User() {
    }
    tslib_1.__decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        tslib_1.__metadata("design:type", Number)
    ], User.prototype, "id", void 0);
    tslib_1.__decorate([
        typeorm_1.Column('text'),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "email", void 0);
    tslib_1.__decorate([
        typeorm_1.Column('text'),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "password", void 0);
    User = tslib_1.__decorate([
        typeorm_1.Entity()
    ], User);
    return User;
}());
exports.User = User;
