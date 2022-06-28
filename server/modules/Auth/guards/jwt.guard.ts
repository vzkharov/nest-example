import {
    Injectable,
    CanActivate,
    ExecutionContext,
    UnauthorizedException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService) {}

    canActivate(ctx: ExecutionContext): boolean {
        const req = ctx.switchToHttp().getRequest()

        try {
            const bearerToken =
                req.headers['authorization'] || req.headers['Authorization']

            const jwtToken = bearerToken.split(' ')[1]
            req.user = this.jwtService.verify(jwtToken)

            return true
        } catch (e) {
            throw new UnauthorizedException()
        }
    }
}
