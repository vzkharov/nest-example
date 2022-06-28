import {
    CallHandler,
    ExecutionContext,
    NestInterceptor,
    UseInterceptors,
} from '@nestjs/common'
import type { ClassConstructor } from 'class-transformer/types/interfaces'
import { plainToClass } from 'class-transformer'
import { map, Observable } from 'rxjs'

class SerializeInterceptor implements NestInterceptor {
    constructor(private dto: ClassConstructor<unknown>) {}

    intercept(
        context: ExecutionContext,
        handler: CallHandler
    ): Observable<unknown> {
        return handler.handle().pipe(
            map((data: unknown) => {
                return plainToClass(this.dto, data, {
                    excludeExtraneousValues: true,
                })
            })
        )
    }
}

export const MongooseClassSerializerInterceptor = (
    dto: ClassConstructor<unknown>
) => UseInterceptors(new SerializeInterceptor(dto))
