import axios from "axios";
import QuotesResult from "../models/QuotesResult";
import Result from "../utils/Result";
import QuotesRepository from "./QuotesRepository";
import StringResources from "../utils/StringResources";
import catchAsync from "../utils/catchAsync";
import ApiResult from "../utils/ApiResult";
import DolorBlueQuote from "../models/DolorBlueQuote";
import QuotesAverageResult from "../models/QuotesAverageResult";
import QuotesAverage from "../models/QuotesAverage";

class QuotesRepositoryImpl implements QuotesRepository {

    getQuotes = catchAsync(async (): Promise<Result<QuotesResult>> => {

        const response = await axios.get<ApiResult<DolorBlueQuote[]>>(StringResources.BASE_API_URL + "/api/v1/quotes");

        const data = response.data;

        const result: QuotesResult = {
            quotes: data.data,
            updatedAt: data.updatedAt
        }

        return Result.success(result);
    });

    getQuotesAverage = catchAsync(async (): Promise<Result<QuotesAverageResult>> => {
        const response = await axios.get<ApiResult<QuotesAverage>>(StringResources.BASE_API_URL + "/api/v1/average");

        const data = response.data;

        const result: QuotesAverageResult = {
            average: data.data,
            updatedAt: data.updatedAt
        }

        return Result.success(result);
    });

}

export default QuotesRepositoryImpl;