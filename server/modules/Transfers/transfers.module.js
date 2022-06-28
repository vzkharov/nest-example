"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TransfersModule = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var users_module_1 = require("~server/modules/Users/users.module");
var transfer_schema_1 = require("./schema/transfer.schema");
var transfers_service_1 = require("./transfers.service");
var transfers_controller_1 = require("./transfers.controller");
var TransfersModule = /** @class */ (function () {
    function TransfersModule() {
    }
    TransfersModule = __decorate([
        (0, common_1.Module)({
            imports: [
                users_module_1.UsersModule,
                mongoose_1.MongooseModule.forFeature([
                    {
                        name: transfer_schema_1.Transfer.name,
                        schema: transfer_schema_1.TransferSchema
                    },
                ]),
            ],
            controllers: [transfers_controller_1.TransfersController],
            providers: [transfers_service_1.TransfersService],
            exports: [transfers_service_1.TransfersService]
        })
    ], TransfersModule);
    return TransfersModule;
}());
exports.TransfersModule = TransfersModule;
