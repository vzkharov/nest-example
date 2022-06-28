import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { RenderModule } from 'nest-next'
import NextServer from 'next'

import { AuthModule } from './modules/Auth/auth.module'
import { UsersModule } from './modules/Users/users.module'

import { jwtConfig, otpConfig, mongoConfig } from './common/config'

import { AppController } from './app.controller'

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
        RenderModule.forRootAsync(
            NextServer({
                dev: true,
            }),
            { passthrough404: true, viewsDir: null }
        ),
        UsersModule,
        AuthModule,
    ],
    controllers: [AppController],
})
export class AppModule {}
