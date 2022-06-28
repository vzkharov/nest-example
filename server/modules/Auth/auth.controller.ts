import {
    Get,
    Put,
    Body,
    Post,
    Param,
    Delete,
    Request,
    UseGuards,
    Controller,
} from '@nestjs/common'

import { MongooseClassSerializerInterceptor } from '~server/common/decorators/MongooseClassSerializer'
import { SignUserDto, UpdateUserDto, UserDto } from '~server/modules/Users/dto'
import { UsersService } from '~server/modules/Users/users.service'
import { CurrentUser } from '~server/common/decorators/CurrentUser'

import { JwtAuthGuard } from './guards/jwt.guard'

import { AuthService } from './auth.service'
import { OTP_VERIFIED } from './auth.constants'

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly usersService: UsersService
    ) {}

    @Get('me')
    @UseGuards(JwtAuthGuard)
    async me(@Request() req) {
        return req.user
    }

    /*
     * sign-up and sign-in
     * { + generates OTP to verify }
     */
    @Post('generate')
    async generate(
        @Body() credentials: SignUserDto
    ): Promise<{ message: string }> {
        await this.authService.generateOTP(credentials)
        return { message: 'OTP is sent' }
    }

    /*
     * verify OTP to get JWT token
     */
    @Post('verify/:otp')
    async verify(
        @Body() credentials: SignUserDto,
        @Param('otp') otp: string
    ): Promise<{ token: string; message: string }> {
        const jwtToken = await this.authService.verifyOTP(credentials, otp)
        return {
            token: jwtToken,
            message: OTP_VERIFIED,
        }
    }

    @Delete('delete')
    @UseGuards(JwtAuthGuard)
    @MongooseClassSerializerInterceptor(UserDto)
    async delete(@CurrentUser() { id: userId }: UserDto) {
        return this.usersService.deleteById(userId)
    }

    @Put('update')
    @UseGuards(JwtAuthGuard)
    @MongooseClassSerializerInterceptor(UserDto)
    async update(
        @CurrentUser() { id: userId }: UserDto,
        @Body() updateUser: UpdateUserDto
    ) {
        return this.usersService.updateById(userId, updateUser)
    }
}
