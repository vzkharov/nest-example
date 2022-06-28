"use strict";
exports.__esModule = true;
exports.MongooseClassSerializerInterceptor = void 0;
var common_1 = require("@nestjs/common");
var class_transformer_1 = require("class-transformer");
var rxjs_1 = require("rxjs");
var SerializeInterceptor = /** @class */ (function () {
    function SerializeInterceptor(dto) {
        this.dto = dto;
    }
    SerializeInterceptor.prototype.intercept = function (context, handler) {
        var _this = this;
        return handler.handle().pipe((0, rxjs_1.map)(function (data) {
            return (0, class_transformer_1.plainToClass)(_this.dto, data, {
                excludeExtraneousValues: true
            });
        }));
    };
    return SerializeInterceptor;
}());
var MongooseClassSerializerInterceptor = function (dto) { return (0, common_1.UseInterceptors)(new SerializeInterceptor(dto)); };
exports.MongooseClassSerializerInterceptor = MongooseClassSerializerInterceptor;
