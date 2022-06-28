"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RouteSchema = exports.Route = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var class_transformer_1 = require("class-transformer");
var address_schema_1 = require("./address.schema");
var Route = /** @class */ (function () {
    function Route() {
    }
    __decorate([
        (0, class_transformer_1.Exclude)()
    ], Route.prototype, "__v");
    __decorate([
        (0, mongoose_1.Prop)({
            required: [true, "Route Field 'from' should be defined"],
            type: address_schema_1.AddressSchema
        }),
        (0, class_transformer_1.Type)(function () { return address_schema_1.Address; })
    ], Route.prototype, "from");
    __decorate([
        (0, mongoose_1.Prop)({
            required: [true, "Route Field 'to' should be defined"],
            type: address_schema_1.AddressSchema
        }),
        (0, class_transformer_1.Type)(function () { return address_schema_1.Address; })
    ], Route.prototype, "to");
    Route = __decorate([
        (0, mongoose_1.Schema)({ _id: false })
    ], Route);
    return Route;
}());
exports.Route = Route;
exports.RouteSchema = mongoose_1.SchemaFactory.createForClass(Route);
