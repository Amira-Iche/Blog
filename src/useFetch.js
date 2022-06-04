import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res.ok) {
                throw Error('could not fetch the data for that resources')
            }
            return res.json()
       })
        .then(data => {
            setData(data)
            setIsLoading(false)
        })
        .catch(er => {
            setIsLoading(false)
            setError(er.message)
        })
            
    } , [url])

   return  {data,isLoading,error} 
    
}


 export default useFetch;