import { registerAs } from '@nestjs/config'

export const mongoConfig = registerAs('mongo', () => ({
    uri: 'mongodb://itsjustmongodbuser:anditsjustmongodbpassword@localhost:27017',
}))
