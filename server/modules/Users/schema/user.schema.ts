import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { v4 as uuid } from 'uuid'
import { Document } from 'mongoose'

export type UserDocument = User & Document

export enum Tariffs {
    FREE = 'FREE',
    FIVE = 'FIVE',
    UNLIMITED = 'UNLIMITED',
}

@Schema({
    timestamps: true,
})
export class User {
    @Prop({
        type: String,
        unique: [true, 'Email field must be unique!'],
        required: [true, 'Email field must be defined!'],
    })
    email: string

    @Prop({
        enum: Tariffs,
        default: Tariffs.UNLIMITED,
    })
    tariff: Tariffs

    @Prop({
        type: String,
    })
    otpSecret: string

    @Prop({
        type: Number,
        default: 0,
    })
    noTransfers: number

    @Prop({
        type: String,
        default: uuid,
    })
    _id: string

    get id(): string {
        return this._id ? `${this._id}` : undefined
    }
}

const UserSchema = SchemaFactory.createForClass(User)

export { UserSchema }
