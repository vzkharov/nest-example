import { Get, Post, Body, Param, Delete, Controller } from '@nestjs/common'

import { MongooseClassSerializerInterceptor } from '~server/common/decorators/MongooseClassSerializer'
import { CurrentUser } from '~server/common/decorators/CurrentUser'
import { User } from '~server/modules/Users/schema/user.schema'

import { CreateTransferDto, UpdateTransferDto, TransferDto } from './dto'

import { TransfersService } from './transfers.service'

@Controller('transfers')
@MongooseClassSerializerInterceptor(TransferDto)
export class TransfersController {
    constructor(private readonly transfersService: TransfersService) {}

    @Get('/:id')
    async getOne(
        @Param('id') transferId: string,
        @Body() { password }: { password: string }
    ) {
        return await this.transfersService.getOneById(transferId, password)
    }

    @Get('/')
    async getAll(
        // TODO: Query filter: 'limit', 'page'
        @CurrentUser() { _id: userId }: User
    ) {
        return await this.transfersService.getAllByUserId(userId)
    }

    @Delete('/:id')
    async deleteOne(
        @Param('id') transferId: string,
        @CurrentUser() { _id: userId }: User
    ) {
        return await this.transfersService.deleteById(userId, transferId)
    }

    @Delete('/')
    async deleteAll(@CurrentUser() { _id: userId }: User) {
        return await this.transfersService.deleteAllByUserId(userId)
    }

    @Post('/update/:id')
    async updateOne(
        @Param('id') transferId: string,
        @CurrentUser() { _id: userId }: User,
        @Body() transfer: UpdateTransferDto
    ) {
        return await this.transfersService.updateById(
            userId,
            transferId,
            transfer
        )
    }

    @Post('/create')
    async create(
        @CurrentUser() { _id: userId }: User,
        @Body() transfer: CreateTransferDto
    ) {
        return await this.transfersService.create(userId, transfer)
    }
}
