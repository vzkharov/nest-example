import { registerAs } from '@nestjs/config'

export const jwtConfig = registerAs('jwt', () => ({
    secret: 'adnsfadaoa3040q,3x0jq03rejfio',
}))
