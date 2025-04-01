import { useEffect, useState } from "react";

export const useFetch = (callback) => {
    const [isPending, setIsPending] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    const fn = async () => {
        setIsPending(true);
        try {
            const res = await callback();
            setData(res);
            setError('');
        } catch (error) {
            setData([])
            setError(`Error Occurred - ${error?.message}`);
        }
        setIsPending(false);
    }

    useEffect(() => {
        fn();
    }, [])

    return {
        isPending,
        data,
        error
    }
}


// Usage :
// const { data, error, isPending } = useFetch(async () => await new SampleService().getPosts());