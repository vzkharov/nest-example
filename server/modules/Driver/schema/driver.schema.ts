import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { v4 as uuid } from 'uuid'
import { Document } from 'mongoose'
import { Exclude } from 'class-transformer'

import { Position } from '~server/modules/Transfers/schema/position.schema'

export type DriverDocument = Driver & Document

@Schema({ timestamps: true, _id: false })
export class Driver {
    @Exclude()
    __v: number

    @Prop({
        type: String,
        default: uuid,
    })
    id: string

    @Prop({
        unique: [true, 'Phone field must be unique!'],
        required: [true, 'Phone field must be defined!'],
    })
    phone: string

    @Prop({
        default: [],
    })
    extraPhones: string[]

    @Prop()
    position: Position
}

export const DriverSchema = SchemaFactory.createForClass(Driver)
