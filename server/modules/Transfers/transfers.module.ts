import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { UsersModule } from '~server/modules/Users/users.module'

import { Transfer, TransferSchema } from './schema/transfer.schema'

import { TransfersService } from './transfers.service'
import { TransfersController } from './transfers.controller'

@Module({
    imports: [
        UsersModule,
        MongooseModule.forFeature([
            {
                name: Transfer.name,
                schema: TransferSchema,
            },
        ]),
    ],
    controllers: [TransfersController],
    providers: [TransfersService],
    exports: [TransfersService],
})
export class TransfersModule {}
