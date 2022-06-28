import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { Exclude, Type } from 'class-transformer'

import { Address, AddressSchema } from './address.schema'

export type RouteDocument = Route & Document

@Schema({ _id: false })
export class Route {
    @Exclude()
    __v: number

    @Prop({
        required: [true, "Route Field 'from' should be defined"],
        type: AddressSchema,
    })
    @Type(() => Address)
    from: Address

    @Prop({
        required: [true, "Route Field 'to' should be defined"],
        type: AddressSchema,
    })
    @Type(() => Address)
    to: Address
}

export const RouteSchema = SchemaFactory.createForClass(Route)
