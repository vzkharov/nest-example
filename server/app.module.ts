import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'

import { AuthModule } from './modules/Auth/auth.module'
import { UsersModule } from './modules/Users/users.module'

import { jwtConfig, otpConfig, mongoConfig } from './common/config'

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [jwtConfig, otpConfig, mongoConfig],
            isGlobal: true,
            cache: true,
        }),
        MongooseModule.forRootAsync({
            useFactory: async (configService: ConfigService) => ({
                uri: configService.get<string>('mongo.uri'),
                retryAttempts: 5,
                autoCreate: true,
            }),
            inject: [ConfigService],
        }),
        UsersModule,
        AuthModule,
    ],
})
export class AppModule {}
