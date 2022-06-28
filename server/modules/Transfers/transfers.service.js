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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.TransfersService = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var transfer_schema_1 = require("./schema/transfer.schema");
var TransfersService = /** @class */ (function () {
    function TransfersService(transferModel, usersService) {
        this.transferModel = transferModel;
        this.usersService = usersService;
    }
    TransfersService.prototype.getOneById = function (transferId, password) {
        return __awaiter(this, void 0, void 0, function () {
            var transfer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.transferModel.findById(transferId).exec()];
                    case 1:
                        transfer = _a.sent();
                        if (!transfer) {
                            throw new common_1.HttpException('', common_1.HttpStatus.NOT_FOUND);
                        }
                        if (!(transfer.isShared && transfer.password === password)) {
                            throw new common_1.HttpException('', common_1.HttpStatus.FORBIDDEN);
                        }
                        return [2 /*return*/, transfer];
                }
            });
        });
    };
    TransfersService.prototype.getAllByUserId = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.transferModel.find({ creator: userId }).exec()];
            });
        });
    };
    TransfersService.prototype.deleteById = function (userId, transferId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.isTransferExistsForUser(userId, transferId).then(function () {
                        return _this.transferModel
                            .findByIdAndDelete(transferId)
                            .then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.usersService.updateTransfersByValue(userId, -1)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/, res];
                                }
                            });
                        }); });
                    })];
            });
        });
    };
    TransfersService.prototype.deleteAllByUserId = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = Promise).all;
                        return [4 /*yield*/, this.getAllByUserId(userId)];
                    case 1: return [2 /*return*/, _b.apply(_a, [(_c.sent())
                                .map(function (transfer) { return transfer.id; })
                                .map(function (transferId) {
                                return _this.transferModel.findByIdAndDelete(transferId);
                            })])];
                }
            });
        });
    };
    TransfersService.prototype.updateById = function (userId, transferId, _a) {
        var password = _a.password, updateTransferDto = __rest(_a, ["password"]);
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_b) {
                return [2 /*return*/, this.isTransferExistsForUser(userId, transferId).then(function (transfer) {
                        return _this.transferModel.findByIdAndUpdate(transferId, __assign({ password: password || transfer.password, isShared: Boolean(password || transfer.password) }, updateTransferDto), { "new": true });
                    })];
            });
        });
    };
    TransfersService.prototype.create = function (userId, _a) {
        var password = _a.password, createTransfer = __rest(_a, ["password"]);
        return __awaiter(this, void 0, void 0, function () {
            var transfer;
            var _this = this;
            return __generator(this, function (_b) {
                transfer = new this.transferModel(__assign({ password: password, creator: userId, isShared: Boolean(password) }, createTransfer));
                return [2 /*return*/, transfer.save().then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.usersService.updateTransfersByValue(userId, 1)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/, res];
                            }
                        });
                    }); })];
            });
        });
    };
    TransfersService.prototype.isTransferExistsForUser = function (userId, transferId) {
        return __awaiter(this, void 0, void 0, function () {
            var transfer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.transferModel.findById(transferId).exec()];
                    case 1:
                        transfer = _a.sent();
                        if ((transfer === null || transfer === void 0 ? void 0 : transfer.creator) !== userId) {
                            throw new common_1.HttpException("Transfer with such 'id' didnt find", common_1.HttpStatus.NOT_FOUND);
                        }
                        return [2 /*return*/, transfer];
                }
            });
        });
    };
    TransfersService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, mongoose_1.InjectModel)(transfer_schema_1.Transfer.name))
    ], TransfersService);
    return TransfersService;
}());
exports.TransfersService = TransfersService;
