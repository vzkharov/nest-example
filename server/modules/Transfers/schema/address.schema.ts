import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { Exclude } from 'class-transformer'

import { Position } from './position.schema'

export type AddressDocument = Address & Document

@Schema({ _id: false })
export class Address {
    @Exclude()
    __v: number

    @Prop({
        required: [true, "Address Field 'country' should be defined"],
    })
    country: string

    @Prop({
        required: [true, "Address Field 'city' should be defined"],
    })
    city: string

    @Prop({
        required: [true, "Address Field 'position' should be defined"],
    })
    position: Position
}

export const AddressSchema = SchemaFactory.createForClass(Address)
