"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserSchema = exports.User = exports.Tariffs = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var uuid_1 = require("uuid");
var Tariffs;
(function (Tariffs) {
    Tariffs["FREE"] = "FREE";
    Tariffs["FIVE"] = "FIVE";
    Tariffs["UNLIMITED"] = "UNLIMITED";
})(Tariffs = exports.Tariffs || (exports.Tariffs = {}));
var User = /** @class */ (function () {
    function User() {
    }
    Object.defineProperty(User.prototype, "id", {
        get: function () {
            return this._id ? "".concat(this._id) : undefined;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        (0, mongoose_1.Prop)({
            type: String,
            unique: [true, 'Email field must be unique!'],
            required: [true, 'Email field must be defined!']
        })
    ], User.prototype, "email");
    __decorate([
        (0, mongoose_1.Prop)({
            "enum": Tariffs,
            "default": Tariffs.UNLIMITED
        })
    ], User.prototype, "tariff");
    __decorate([
        (0, mongoose_1.Prop)({
            type: String
        })
    ], User.prototype, "otpSecret");
    __decorate([
        (0, mongoose_1.Prop)({
            type: Number,
            "default": 0
        })
    ], User.prototype, "noTransfers");
    __decorate([
        (0, mongoose_1.Prop)({
            type: String,
            "default": uuid_1.v4
        })
    ], User.prototype, "_id");
    User = __decorate([
        (0, mongoose_1.Schema)({
            timestamps: true
        })
    ], User);
    return User;
}());
exports.User = User;
var UserSchema = mongoose_1.SchemaFactory.createForClass(User);
exports.UserSchema = UserSchema;
