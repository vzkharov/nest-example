import { Expose } from 'class-transformer'

import { Color } from '../schema/transfer.schema'
import { Route } from '../schema/route.schema'

export class TransferDto {
    @Expose()
    name: string

    @Expose()
    route: Route

    @Expose()
    driver: string

    @Expose()
    tags: string[]

    @Expose()
    color: Color

    @Expose()
    password: string

    @Expose()
    group: string
}
