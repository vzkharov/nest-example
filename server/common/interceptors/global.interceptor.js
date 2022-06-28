"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GlobalInterceptor = void 0;
var common_1 = require("@nestjs/common");
var operators_1 = require("rxjs/operators");
var getGlobalResponse_1 = require("~server/common/helpers/getGlobalResponse");
var GlobalInterceptor = /** @class */ (function () {
    function GlobalInterceptor() {
    }
    GlobalInterceptor.prototype.intercept = function (ctx, next) {
        return next.handle().pipe((0, operators_1.map)(function (data) {
            return (0, getGlobalResponse_1.getGlobalResponse)({
                statusCode: ctx.switchToHttp().getResponse().statusCode,
                message: (data === null || data === void 0 ? void 0 : data.message) || null,
                data: __assign(__assign({}, data), { message: undefined })
            });
        }));
    };
    GlobalInterceptor = __decorate([
        (0, common_1.Injectable)()
    ], GlobalInterceptor);
    return GlobalInterceptor;
}());
exports.GlobalInterceptor = GlobalInterceptor;
