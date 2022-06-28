import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { totp, authenticator } from 'otplib'

import { UsersService } from '~server/modules/Users/users.service'
import { SignUserDto, UserDto } from '~server/modules/Users/dto'

import { OTP_INCORRECT, USER_NOT_FOUND } from './auth.constants'

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) {}

    public async generateOTP(signUserDto: SignUserDto) {
        const candidate = await this.usersService.findByEmail(signUserDto.email)

        const secret = authenticator.generateSecret(20)
        const _totp = totp.generate(secret)

        // TODO: Email or Phone service
        console.log(_totp)

        if (candidate) {
            return this.usersService.updateById(candidate._id, {
                otpSecret: secret,
            })
        }

        return this.usersService.create({
            ...signUserDto,
            otpSecret: secret,
        })
    }

    public async verifyOTP(
        signUserDto: SignUserDto,
        otp: string
    ): Promise<string> {
        const candidate = await this.usersService.findByEmail(signUserDto.email)

        if (!candidate) {
            throw new HttpException(USER_NOT_FOUND, HttpStatus.NOT_FOUND)
        }

        const isOtpCorrect = totp.verify({
            token: otp,
            secret: candidate.otpSecret,
        })

        if (!isOtpCorrect) {
            throw new HttpException(
                OTP_INCORRECT,
                HttpStatus.METHOD_NOT_ALLOWED
            )
        }

        return this.generateJwt(candidate)
    }

    private generateJwt(user: UserDto): string {
        return this.jwtService.sign({
            id: user.id,
            email: user.email,
            tariff: user.tariff,
        })
    }
}
