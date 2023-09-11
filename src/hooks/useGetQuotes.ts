import useSWR from 'swr';
import useSWRSubscription from 'swr/subscription';

import QuotesRepository from "../repository/QuotesRepository";
import QuotesRepositoryImpl from "../repository/QuotesRepositoryImpl";
import QuotesResult from '../models/QuotesResult';
import StringResources from '../utils/StringResources';


const quotesRepository: QuotesRepository = new QuotesRepositoryImpl();

async function fetcher(repository: QuotesRepository) {
    const result = await repository.getQuotes();

    if (!result.isSuccess) {
        throw result.error;
    }

    return result.value!!;
}

//socket
export const useWSGetQuotes = () => {
    return useSWRSubscription<QuotesResult>(
        `ws://${StringResources.BASE_API_HOST}/api/v1/quotes`, (key: any, { next }: any) => {
            const socket = new WebSocket(key);

            socket.addEventListener('message', (event) => {
                if (event.data === "Error!")
                    next(new Error("Failed to fetch data"));
                else {
                    const parse = JSON.parse(event.data);
                    const result: QuotesResult = {
                        quotes: parse.data,
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

const useGetQuotes = () => {


    return useSWR('/quotes', () => fetcher(quotesRepository));
}

export default useGetQuotes;