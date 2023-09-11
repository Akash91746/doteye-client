import QuotesAverageResult from "../models/QuotesAverageResult";
import QuotesResult from "../models/QuotesResult";
import Result from "../utils/Result";

interface QuotesRepository {

    getQuotes(): Promise<Result<QuotesResult>>;

    getQuotesAverage(): Promise<Result<QuotesAverageResult>>;

}

export default QuotesRepository;