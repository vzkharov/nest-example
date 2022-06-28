"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PositionSchema = exports.Position = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var class_transformer_1 = require("class-transformer");
var Position = /** @class */ (function () {
    function Position() {
    }
    __decorate([
        (0, class_transformer_1.Exclude)()
    ], Position.prototype, "__v");
    __decorate([
        (0, mongoose_1.Prop)({
            required: [true, "Route Field 'from' should be defined"]
        })
    ], Position.prototype, "long");
    __decorate([
        (0, mongoose_1.Prop)({
            required: [true, "Route Field 'to' should be defined"]
        })
    ], Position.prototype, "lat");
    Position = __decorate([
        (0, mongoose_1.Schema)({ _id: false })
    ], Position);
    return Position;
}());
exports.Position = Position;
exports.PositionSchema = mongoose_1.SchemaFactory.createForClass(Position);
