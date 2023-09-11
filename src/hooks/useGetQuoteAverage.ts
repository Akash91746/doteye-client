import useSWRSubscription from 'swr/subscription';

import QuotesAverageResult from "../models/QuotesAverageResult";
import StringResources from '../utils/StringResources';

// const repository: QuotesRepository = new QuotesRepositoryImpl();

// const fetcher = async () => {
//     const result = await repository.getQuotesAverage();

//     if (!result.isSuccess) {
//         throw result.error;
//     }

//     return result.value!!;
// }

//socket
export const useWSGetQuoteAvg = () => {
    return useSWRSubscription<QuotesAverageResult>(
        `ws://${StringResources.BASE_API_HOST}/api/v1/average`, (key: any, { next }: any) => {
            const socket = new WebSocket(key);

            socket.addEventListener('message', (event) => {
                if (event.data === "Error!")
                    next(new Error("Failed to fetch data"));
                else {
                    const parse = JSON.parse(event.data);
                    const result: QuotesAverageResult = {
                        average: parse.data,
                        updatedAt: parse.updatedAt
                    }
                    next(null, result);
                }
            });

            socket.addEventListener('error', (event) => next(event));

            return () => {
                if (socket.readyState === 1)
                    socket.close();
            }
        });
}

// const useGetQuoteAverage = () => {

//     return useSWR("/average", fetcher);
// }

// export default useGetQuoteAverage;