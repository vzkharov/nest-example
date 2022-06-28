"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UpdateTransferDto = void 0;
var class_validator_1 = require("class-validator");
var transfer_schema_1 = require("../schema/transfer.schema");
var UpdateTransferDto = /** @class */ (function () {
    function UpdateTransferDto() {
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)()
    ], UpdateTransferDto.prototype, "name");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsObject)()
    ], UpdateTransferDto.prototype, "route");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)()
    ], UpdateTransferDto.prototype, "driver");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsArray)()
    ], UpdateTransferDto.prototype, "tags");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsEnum)(transfer_schema_1.Color)
    ], UpdateTransferDto.prototype, "color");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)()
    ], UpdateTransferDto.prototype, "password");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)()
    ], UpdateTransferDto.prototype, "group");
    return UpdateTransferDto;
}());
exports.UpdateTransferDto = UpdateTransferDto;
