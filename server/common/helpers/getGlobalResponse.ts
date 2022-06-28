export type GlobalResponse = {
    statusCode: number | null
    errorType: string | null
    errorMessage: string | null
    message: string | null
    data: unknown | null
}

const defaultResponse: GlobalResponse = {
    statusCode: null,
    errorType: null,
    errorMessage: null,
    message: null,
    data: null,
}

export const getGlobalResponse = (
    args: Partial<GlobalResponse>
): GlobalResponse => ({
    ...defaultResponse,
    ...args,
})
