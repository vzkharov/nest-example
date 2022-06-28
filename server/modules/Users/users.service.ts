import { Model } from 'mongoose'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { USER_NOT_FOUND } from '~server/modules/Auth/auth.constants'

import { User, type UserDocument } from './schema/user.schema'
import { UpdateUserDto } from './dto'

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<UserDocument>
    ) {}

    async findByEmail(email: string) {
        return this.userModel.findOne({ email }).exec()
    }

    async updateById(userId: string, updateUser: UpdateUserDto) {
        return this.userModel.findByIdAndUpdate(userId, updateUser, {
            new: true,
        })
    }

    async deleteById(userId: string) {
        return this.userModel.findByIdAndDelete(userId)
    }

    async updateTransfersByValue(userId: string, value: number) {
        const user = await this.userModel.findById(userId)

        if (!user) {
            throw new HttpException(USER_NOT_FOUND, HttpStatus.NOT_FOUND)
        }

        return this.userModel.findByIdAndUpdate(
            userId,
            { user, noTransfers: user.noTransfers + value },
            {
                new: true,
            }
        )
    }

    async create(createUser: Partial<User>) {
        const user = new this.userModel(createUser)
        return await user.save()
    }
}
