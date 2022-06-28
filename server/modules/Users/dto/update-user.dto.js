"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UpdateUserDto = void 0;
var class_validator_1 = require("class-validator");
var user_schema_1 = require("../schema/user.schema");
var UpdateUserDto = /** @class */ (function () {
    function UpdateUserDto() {
    }
    __decorate([
        (0, class_validator_1.IsEmail)()
    ], UpdateUserDto.prototype, "email");
    __decorate([
        (0, class_validator_1.IsString)()
    ], UpdateUserDto.prototype, "otpSecret");
    __decorate([
        (0, class_validator_1.IsEnum)(user_schema_1.Tariffs)
    ], UpdateUserDto.prototype, "tariff");
    return UpdateUserDto;
}());
exports.UpdateUserDto = UpdateUserDto;
