"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.AuthController = void 0;
var common_1 = require("@nestjs/common");
var MongooseClassSerializer_1 = require("~server/common/decorators/MongooseClassSerializer");
var dto_1 = require("~server/modules/Users/dto");
var CurrentUser_1 = require("~server/common/decorators/CurrentUser");
var jwt_guard_1 = require("./guards/jwt.guard");
var auth_constants_1 = require("./auth.constants");
var AuthController = /** @class */ (function () {
    function AuthController(authService, usersService) {
        this.authService = authService;
        this.usersService = usersService;
    }
    AuthController.prototype.me = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, req.user];
            });
        });
    };
    /*
     * sign-up and sign-in
     * { + generates OTP to verify }
     */
    AuthController.prototype.generate = function (credentials) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.generateOTP(credentials)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, { message: 'OTP is sent' }];
                }
            });
        });
    };
    /*
     * verify OTP to get JWT token
     */
    AuthController.prototype.verify = function (credentials, otp) {
        return __awaiter(this, void 0, void 0, function () {
            var jwtToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.verifyOTP(credentials, otp)];
                    case 1:
                        jwtToken = _a.sent();
                        return [2 /*return*/, {
                                token: jwtToken,
                                message: auth_constants_1.OTP_VERIFIED
                            }];
                }
            });
        });
    };
    AuthController.prototype["delete"] = function (_a) {
        var userId = _a.id;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2 /*return*/, this.usersService.deleteById(userId)];
            });
        });
    };
    AuthController.prototype.update = function (_a, updateUser) {
        var userId = _a.id;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2 /*return*/, this.usersService.updateById(userId, updateUser)];
            });
        });
    };
    __decorate([
        (0, common_1.Get)('me'),
        (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
        __param(0, (0, common_1.Request)())
    ], AuthController.prototype, "me");
    __decorate([
        (0, common_1.Post)('generate'),
        __param(0, (0, common_1.Body)())
    ], AuthController.prototype, "generate");
    __decorate([
        (0, common_1.Post)('verify/:otp'),
        __param(0, (0, common_1.Body)()),
        __param(1, (0, common_1.Param)('otp'))
    ], AuthController.prototype, "verify");
    __decorate([
        (0, common_1.Delete)('delete'),
        (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
        (0, MongooseClassSerializer_1.MongooseClassSerializerInterceptor)(dto_1.UserDto),
        __param(0, (0, CurrentUser_1.CurrentUser)())
    ], AuthController.prototype, "delete");
    __decorate([
        (0, common_1.Put)('update'),
        (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
        (0, MongooseClassSerializer_1.MongooseClassSerializerInterceptor)(dto_1.UserDto),
        __param(0, (0, CurrentUser_1.CurrentUser)()),
        __param(1, (0, common_1.Body)())
    ], AuthController.prototype, "update");
    AuthController = __decorate([
        (0, common_1.Controller)('auth')
    ], AuthController);
    return AuthController;
}());
exports.AuthController = AuthController;
