"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var routing_controllers_1 = require("routing-controllers");
var nodeMailer = require("nodemailer");
var EmailController = (function () {
    function EmailController() {
        this.service = null;
    }
    EmailController.prototype.post2 = function (model, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var transporter, mailOptions, _a, _b, error_1;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        transporter = nodeMailer.createTransport({
                            host: 'smtp.office365.com',
                            port: 587,
                            secure: false,
                            auth: {
                                user: 'dj-m2x@hotmail.com',
                                pass: 'nina01'
                            }
                        });
                        mailOptions = {
                            from: '',
                            to: 'dj-m2x@hotmail.com',
                            subject: '',
                            text: '',
                            html: '',
                            date: new Date(),
                        };
                        mailOptions.from = model.email;
                        mailOptions.subject = model.subject;
                        mailOptions.text = "" + model.message;
                        mailOptions.html = model.html;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        _b = (_a = response).json;
                        return [4, transporter.sendMail(mailOptions)];
                    case 2: return [2, _b.apply(_a, [_c.sent()])];
                    case 3:
                        error_1 = _c.sent();
                        return [2, response.json(error_1)];
                    case 4: return [2];
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
    ], EmailController.prototype, "post2", null);
    EmailController = tslib_1.__decorate([
        routing_controllers_1.JsonController('/email'),
        tslib_1.__metadata("design:paramtypes", [])
    ], EmailController);
    return EmailController;
}());
exports.EmailController = EmailController;
