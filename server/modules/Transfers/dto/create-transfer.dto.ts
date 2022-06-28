import {
    IsEnum,
    IsArray,
    IsObject,
    IsString,
    IsOptional,
} from 'class-validator'

import { Color } from '../schema/transfer.schema'
import { Route } from '../schema/route.schema'

export class CreateTransferDto {
    @IsString()
    name: string

    @IsObject()
    route: Route

    // TODO: Driver Schema
    @IsOptional()
    @IsString()
    driver: string

    @IsOptional()
    @IsArray()
    tags: string[]

    @IsOptional()
    @IsEnum(Color)
    color: Color

    @IsOptional()
    @IsString()
    password: string

    @IsOptional()
    @IsString()
    group: string
}
