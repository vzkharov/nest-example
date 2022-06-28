import {
    IsArray,
    IsEnum,
    IsObject,
    IsOptional,
    IsString,
} from 'class-validator'

import { Color } from '../schema/transfer.schema'
import { Route } from '../schema/route.schema'

export class UpdateTransferDto {
    @IsOptional()
    @IsString()
    name: string

    @IsOptional()
    @IsObject()
    route: Route

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
