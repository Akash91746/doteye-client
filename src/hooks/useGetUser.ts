import axios from "axios";
import StringResources from "../utils/StringResources";
import ApiResult from "../utils/ApiResult";
import User from "../models/User";
import useSWR from "swr";

const fetcher = async () => {
    const response = await axios.get<ApiResult<User>>(`${StringResources.BASE_API_URL}/api/v1/auth/login/success`,
        { withCredentials: true }
    );

    if (response.status === 200) {
        return response.data;
    }

    throw new Error("Not Authroized");
}

const useGetUser = () => {
    return useSWR("/me", fetcher,
        {
            revalidateOnFocus: true,
            revalidateOnReconnect: true,
            revalidateIfStale: true,
            refreshWhenHidden: true,
            revalidateOnMount: true
        }
    );
}

export default useGetUser;