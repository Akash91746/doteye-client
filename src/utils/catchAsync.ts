import Result from "./Result";

const catchAsync = <T>(
    fn: (...args: any) => Promise<Result<T>>
) => (...args: any): Promise<Result<T>> => {
    return fn(...args).catch((error) => {
        return Result.failed(error)
    }
    );
}

export default catchAsync;
