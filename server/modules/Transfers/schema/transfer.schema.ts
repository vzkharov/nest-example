import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { v4 as uuid } from 'uuid'
import { Document } from 'mongoose'

import { User } from '~/modules/Users/schema/user.schema'

import { RouteSchema, Route } from './route.schema'

export type TransferDocument = Transfer & Document

export enum Color {
    GRAY = 'GRAY',
    GREEN = 'GREEN',
    RED = 'RED',
}

@Schema({ timestamps: true })
export class Transfer {
    @Prop()
    name: string

    @Prop({
        default: [],
    })
    tags: string[]

    @Prop({
        default: false,
    })
    isShared: boolean

    @Prop()
    password: string

    // TODO: Driver Schema
    @Prop({
        default: '',
    })
    driver: string

    @Prop({
        default: Color.GRAY,
    })
    color: Color

    @Prop({
        required: [true, "Transfers field 'route' should be defined!"],
        type: RouteSchema,
    })
    route: Route

    @Prop({
        type: String,
        ref: User.name,
        required: [true, "Transfer Field 'creator' should be defined"],
    })
    creator: string

    @Prop({
        type: String,
        default: uuid,
    })
    _id: string

    get id(): string {
        return this._id ? `${this._id}` : undefined
    }
}

export const TransferSchema = SchemaFactory.createForClass(Transfer)
