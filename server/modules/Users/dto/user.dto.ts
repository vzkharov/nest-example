import { Expose } from 'class-transformer'

import { Tariffs } from '../schema/user.schema'

export class UserDto {
    @Expose()
    id: string

    @Expose()
    email: string

    @Expose()
    tariff: Tariffs
}
