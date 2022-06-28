import { NestFactory, NestApplication } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { GlobalFilter } from '~server/common/filters/global.filter'
import { GlobalInterceptor } from '~server/common/interceptors/global.interceptor'

import { AppModule } from './app.module'

async function bootstrap() {
    const app = await NestFactory.create<NestApplication>(AppModule)

    const configService = app.get(ConfigService)
    const port = configService.get('PORT')

    app.useGlobalFilters(new GlobalFilter())
    app.useGlobalInterceptors(new GlobalInterceptor())
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }))

    await app.listen(port || 3000)
}

void bootstrap()
