//useFAQ.tsx

import { useEffect, useState } from "react";

export interface FAQProp{
    id:string;
    title:string;
    question:string;
    context:string;
    link:string;
}

export const useFrequentlyAskedQuestions = () => {
    const [questions, setQuestions] = useState<FAQProp[]>([]);
    const [error, setError] = useState<string>('');
    const [isLoading, setLoading] = useState<boolean>(false);
    useEffect(()=> {
        const fetchFAQ = async () => {
            const url = import.meta.env.PROD 
            ? import.meta.env.VITE_PROD_FAQ 
            : import.meta.env.VITE_DEV_FAQ
            try{
                setLoading(true);
                const response = await fetch(url, {
                    method: 'GET',
                    headers:{
                        'Content-Type':'application/json',
                    }
                });

                if(!response.ok){
                    const resError = await response.json();
                    setError(`${resError.message, response.status}`);
                    throw new Error(`${response.status}`);
                };

                const result = await response.json();
                setQuestions(result.data);
                console.log(`${result.message}`);
            } catch(err:any) {
                setError(err.message);
                console.error(err.message)
            }finally{
                setLoading(false);
            }
        };
        fetchFAQ();
    }, []);
    return{ questions, error, isLoading};
};
