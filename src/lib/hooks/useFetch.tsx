import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

/*axios.create({
    baseURL: 'https://localhost:44360/api/', // TODO: Will move in config,
    headers: {
        'Accept': 'application/json'
    }
})*/

export const useFetch = <T extends unknown>(apiUrl: string)  => {
    const [response, setResponse] = useState<T>();
    const [fetchErrors, setFetchErrors] = useState(''); // TODO: Convert this to array of errors if applicable
    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        const controller = new AbortController(); // Avoid memory leak
        const fetchData = async () => {
            try {
                const apiResponse = await axios.get(apiUrl, {
                    signal: controller.signal
                });              
                setResponse(apiResponse.data.data);
            } catch (err) {
                //setFetchErrors(err.message);
            } finally {
                setLoaded(true);
            }
        }

        fetchData();

        return () => controller.abort();
    },[]);

    return { response, fetchErrors, loaded };
}