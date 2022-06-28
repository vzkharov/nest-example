import { NestFactory, NestApplication } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import helmet from 'helmet'

import { GlobalFilter } from '~/common/filters/global.filter'
import { GlobalInterceptor } from '~/common/interceptors/global.interceptor'

import { AppModule } from './app.module'

async function bootstrap() {
    const app = await NestFactory.create<NestApplication>(AppModule)

    const configService = app.get(ConfigService)
    const port = configService.get('PORT')

    app.useGlobalFilters(new GlobalFilter())
    app.useGlobalInterceptors(new GlobalInterceptor())
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }))

    app.enableCors({
        origin: true,
        allowedHeaders: '*',
    })

    app.use(helmet())

    app.setGlobalPrefix('api')

    const swaggerConfig = new DocumentBuilder()
        .setTitle('Transfers API with Authorization')
        .setDescription('Transfers API')
        .setVersion('1.0')
        .addTag('transfer')
        .build()

    const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig)
    SwaggerModule.setup('swagger', app, swaggerDocument)

    await app.listen(port || 8080)
}

void bootstrap()
