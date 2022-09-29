import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(()=> {

        const abortCont = new AbortController();

            fetch(url)
                .then(res => {
                    // console.log(res)
                    if(!res.ok){
                        throw Error('Could not fetch the data, this may be due to network issue');
                    }
                    if(!res){
                        return 'No data to fetch'
                    }else{
                        return res.json()
                    }
                })
                .then(data => {
                    setIsLoading(false);
                    setData(data);
                    setError(null);
                })
                .catch(err=> {
                    setIsLoading(false);
                    setError(err.message);
                });
        
        return() => abortCont.abort();
    }, [url]);

    return ({ data, isLoading, error });
}

export default useFetch; 