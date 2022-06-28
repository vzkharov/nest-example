import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import {
    getGlobalResponse,
    GlobalResponse,
} from '~server/common/helpers/getGlobalResponse'

@Injectable()
export class GlobalInterceptor<T>
    implements NestInterceptor<T, GlobalResponse>
{
    intercept(
        ctx: ExecutionContext,
        next: CallHandler
    ): Observable<GlobalResponse> {
        return next.handle().pipe(
            map((data) =>
                getGlobalResponse({
                    statusCode: ctx.switchToHttp().getResponse().statusCode,
                    message: data?.message || null,
                    data: {
                        ...data,
                        message: undefined,
                    },
                })
            )
        )
    }
}
