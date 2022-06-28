import { createParamDecorator, ExecutionContext } from '@nestjs/common'

import { User } from '~server/modules/Users/schema/user.schema'

export const CurrentUser = createParamDecorator(
    (data: never, ctx: ExecutionContext): User => {
        const req = ctx.switchToHttp().getRequest()
        return req.user
    }
)
