//useTestimony.tsx

import { useEffect, useState } from "react"
import type { testimonialProp } from "../components/TestimonyCard";
export const useTestimony = () => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [testimonies, setTestimonies] = useState<testimonialProp[]>([]);
    const [error, setError] = useState<string>('');

        useEffect(()=>{
    const fetchTestimonies = async () => {
        const url = import.meta.env.PROD
        ? import.meta.env.VITE_PROD_TESTIMONY
        : import.meta.env.VITE_DEV_API_TESTIMONY

        try{
            setLoading(true);
            const response = await fetch(url, {
                method: "GET",
                headers:{
                    "Content-Type":'application/json'
                }
            });

            if(!response.ok) {
                const errData = await response.json();
                setError(`${errData}, ${response.status}`);
                throw new Error(`${response.status}`);
            }

            const result = await response.json();
            setTestimonies(result.data);


        } catch(err:any) {
            console.error(err.message);
        }
    }
    fetchTestimonies();
    }, []);
    return{testimonies, isLoading, error}
};