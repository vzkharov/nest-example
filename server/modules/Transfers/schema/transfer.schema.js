"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TransferSchema = exports.Transfer = exports.Color = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var uuid_1 = require("uuid");
var user_schema_1 = require("~server/modules/Users/schema/user.schema");
var route_schema_1 = require("./route.schema");
var Color;
(function (Color) {
    Color["GRAY"] = "GRAY";
    Color["GREEN"] = "GREEN";
    Color["RED"] = "RED";
})(Color = exports.Color || (exports.Color = {}));
var Transfer = /** @class */ (function () {
    function Transfer() {
    }
    Object.defineProperty(Transfer.prototype, "id", {
        get: function () {
            return this._id ? "".concat(this._id) : undefined;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        (0, mongoose_1.Prop)()
    ], Transfer.prototype, "name");
    __decorate([
        (0, mongoose_1.Prop)({
            "default": []
        })
    ], Transfer.prototype, "tags");
    __decorate([
        (0, mongoose_1.Prop)({
            "default": false
        })
    ], Transfer.prototype, "isShared");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Transfer.prototype, "password");
    __decorate([
        (0, mongoose_1.Prop)({
            "default": ''
        })
    ], Transfer.prototype, "driver");
    __decorate([
        (0, mongoose_1.Prop)({
            "default": Color.GRAY
        })
    ], Transfer.prototype, "color");
    __decorate([
        (0, mongoose_1.Prop)({
            required: [true, "Transfers field 'route' should be defined!"],
            type: route_schema_1.RouteSchema
        })
    ], Transfer.prototype, "route");
    __decorate([
        (0, mongoose_1.Prop)({
            type: String,
            ref: user_schema_1.User.name,
            required: [true, "Transfer Field 'creator' should be defined"]
        })
    ], Transfer.prototype, "creator");
    __decorate([
        (0, mongoose_1.Prop)({
            type: String,
            "default": uuid_1.v4
        })
    ], Transfer.prototype, "_id");
    Transfer = __decorate([
        (0, mongoose_1.Schema)({ timestamps: true })
    ], Transfer);
    return Transfer;
}());
exports.Transfer = Transfer;
exports.TransferSchema = mongoose_1.SchemaFactory.createForClass(Transfer);
