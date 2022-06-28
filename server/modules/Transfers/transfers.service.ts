import { Model } from 'mongoose'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { UsersService } from '~/modules/Users/users.service'

import { Transfer, TransferDocument } from './schema/transfer.schema'
import { CreateTransferDto, UpdateTransferDto } from './dto'

@Injectable()
export class TransfersService {
    constructor(
        @InjectModel(Transfer.name)
        private readonly transferModel: Model<TransferDocument>,
        private readonly usersService: UsersService
    ) {}

    async getOneById(
        transferId: string,
        password: string
    ): Promise<Partial<Transfer>> {
        const transfer = await this.transferModel.findById(transferId).exec()

        if (!transfer) {
            throw new HttpException('', HttpStatus.NOT_FOUND)
        }

        if (!(transfer.isShared && transfer.password === password)) {
            throw new HttpException('', HttpStatus.FORBIDDEN)
        }

        return transfer
    }

    async getAllByUserId(userId: string): Promise<Transfer[]> {
        return this.transferModel.find({ creator: userId }).exec()
    }

    async deleteById(userId: string, transferId: string) {
        return this.isTransferExistsForUser(userId, transferId).then(() =>
            this.transferModel
                .findByIdAndDelete(transferId)
                .then(async (res) => {
                    await this.usersService.updateTransfersByValue(userId, -1)
                    return res
                })
        )
    }

    async deleteAllByUserId(userId: string): Promise<Transfer[]> {
        return Promise.all(
            (await this.getAllByUserId(userId))
                .map((transfer) => transfer.id)
                .map((transferId) =>
                    this.transferModel.findByIdAndDelete(transferId)
                )
        )
    }

    async updateById(
        userId: string,
        transferId: string,
        { password, ...updateTransferDto }: UpdateTransferDto
    ): Promise<Transfer> {
        return this.isTransferExistsForUser(userId, transferId).then(
            (transfer) =>
                this.transferModel.findByIdAndUpdate(
                    transferId,
                    {
                        password: password || transfer.password,
                        isShared: Boolean(password || transfer.password),
                        ...updateTransferDto,
                    },
                    { new: true }
                )
        )
    }

    async create(
        userId: string,
        { password, ...createTransfer }: CreateTransferDto
    ): Promise<Transfer> {
        const transfer = new this.transferModel({
            password,
            creator: userId,
            isShared: Boolean(password),
            ...createTransfer,
        })
        return transfer.save().then(async (res) => {
            await this.usersService.updateTransfersByValue(userId, 1)
            return res
        })
    }

    async isTransferExistsForUser(
        userId: string,
        transferId: string
    ): Promise<Transfer> {
        const transfer = await this.transferModel.findById(transferId).exec()

        if (transfer?.creator !== userId) {
            throw new HttpException(
                "Transfer with such 'id' didnt find",
                HttpStatus.NOT_FOUND
            )
        }

        return transfer
    }
}
