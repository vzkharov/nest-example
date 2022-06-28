import { registerAs } from '@nestjs/config'

export const otpConfig = registerAs('otp', () => ({
    secret: 'adnsfadaoa3040q,3x0jq03rejfio',
}))
