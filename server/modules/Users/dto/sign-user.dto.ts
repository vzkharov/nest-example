import { IsEmail } from 'class-validator'

export class SignUserDto {
    @IsEmail()
    email: string
}
