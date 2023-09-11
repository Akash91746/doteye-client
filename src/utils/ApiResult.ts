interface ApiResult<T> {
    status: string,
    data: T,

    [key: string]: any
}

export default ApiResult;