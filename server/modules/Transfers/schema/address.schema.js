"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddressSchema = exports.Address = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var class_transformer_1 = require("class-transformer");
var Address = /** @class */ (function () {
    function Address() {
    }
    __decorate([
        (0, class_transformer_1.Exclude)()
    ], Address.prototype, "__v");
    __decorate([
        (0, mongoose_1.Prop)({
            required: [true, "Address Field 'country' should be defined"]
        })
    ], Address.prototype, "country");
    __decorate([
        (0, mongoose_1.Prop)({
            required: [true, "Address Field 'city' should be defined"]
        })
    ], Address.prototype, "city");
    __decorate([
        (0, mongoose_1.Prop)({
            required: [true, "Address Field 'position' should be defined"]
        })
    ], Address.prototype, "position");
    Address = __decorate([
        (0, mongoose_1.Schema)({ _id: false })
    ], Address);
    return Address;
}());
exports.Address = Address;
exports.AddressSchema = mongoose_1.SchemaFactory.createForClass(Address);
