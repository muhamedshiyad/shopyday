import { useEffect, useState } from "react";
import { axiosInstance } from "../config/axiosInstance";

export const useFetch = (url) => {
    const [data,setData]=useState(null);
    const [isLoading,setIsLoading]=useState(true)
    const [error,setError]=useState(null)

    const fetchData=async()=>{
        try {
            const response = await axiosInstance({
              url:url,
            });
            setData(response?.data?.data);
            setIsLoading(false)
            
        } catch (error) {
            setError(error)
        }finally{
            setIsLoading(false)
        }
        
      };
    useEffect(()=>{
      fetchData()
    },[]);

    return[data,isLoading,error]
};
