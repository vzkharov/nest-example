import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { Exclude } from 'class-transformer'

export type PositionDocument = Position & Document

@Schema({ _id: false })
export class Position {
    @Exclude()
    __v: number

    @Prop({
        required: [true, "Route Field 'from' should be defined"],
    })
    long: string

    @Prop({
        required: [true, "Route Field 'to' should be defined"],
    })
    lat: string
}

export const PositionSchema = SchemaFactory.createForClass(Position)
