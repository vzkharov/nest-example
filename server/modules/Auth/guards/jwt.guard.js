"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.JwtAuthGuard = void 0;
var common_1 = require("@nestjs/common");
var JwtAuthGuard = /** @class */ (function () {
    function JwtAuthGuard(jwtService) {
        this.jwtService = jwtService;
    }
    JwtAuthGuard.prototype.canActivate = function (ctx) {
        var req = ctx.switchToHttp().getRequest();
        try {
            var bearerToken = req.headers['authorization'] || req.headers['Authorization'];
            var jwtToken = bearerToken.split(' ')[1];
            req.user = this.jwtService.verify(jwtToken);
            return true;
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
    };
    JwtAuthGuard = __decorate([
        (0, common_1.Injectable)()
    ], JwtAuthGuard);
    return JwtAuthGuard;
}());
exports.JwtAuthGuard = JwtAuthGuard;
