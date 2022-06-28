"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DriverSchema = exports.Driver = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var uuid_1 = require("uuid");
var class_transformer_1 = require("class-transformer");
var Driver = /** @class */ (function () {
    function Driver() {
    }
    __decorate([
        (0, class_transformer_1.Exclude)()
    ], Driver.prototype, "__v");
    __decorate([
        (0, mongoose_1.Prop)({
            type: String,
            "default": uuid_1.v4
        })
    ], Driver.prototype, "id");
    __decorate([
        (0, mongoose_1.Prop)({
            unique: [true, 'Phone field must be unique!'],
            required: [true, 'Phone field must be defined!']
        })
    ], Driver.prototype, "phone");
    __decorate([
        (0, mongoose_1.Prop)({
            "default": []
        })
    ], Driver.prototype, "extraPhones");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Driver.prototype, "position");
    Driver = __decorate([
        (0, mongoose_1.Schema)({ timestamps: true, _id: false })
    ], Driver);
    return Driver;
}());
exports.Driver = Driver;
exports.DriverSchema = mongoose_1.SchemaFactory.createForClass(Driver);
