import {
    Catch,
    ExceptionFilter,
    ArgumentsHost,
    InternalServerErrorException,
} from '@nestjs/common'

import { getGlobalResponse } from '~/common/helpers/getGlobalResponse'

@Catch()
export class GlobalFilter implements ExceptionFilter {
    catch(exception: InternalServerErrorException, host: ArgumentsHost) {
        const res = host.switchToHttp().getResponse()
        const status = exception.getStatus()

        return res.status(status).json(
            getGlobalResponse({
                statusCode: status,
                errorType: exception.name,
                errorMessage: exception.message,
            })
        )
    }
}
