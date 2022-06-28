import { IsEnum, IsEmail, IsString } from 'class-validator'

import { Tariffs } from '../schema/user.schema'

export class UpdateUserDto {
    @IsEmail()
    email?: string

    @IsString()
    otpSecret?: string

    @IsEnum(Tariffs)
    tariff?: Tariffs
}
