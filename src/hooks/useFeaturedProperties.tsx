//featured property hook

import { useEffect, useState } from "react"
import { featuredProperties } from "../components/SectionHeader";
import type { PropertyCardProp } from "../components/PropertyCard";


export const useFetchFeaturedProperties = () => {
    const [isFeaturedProperties, setFeaturedProperties] = useState<PropertyCardProp[]>([]);
    const [error, setError] = useState<string>('');
    const [isLoading, setLoading] = useState<boolean>(false);
    useEffect(()=>{
        const fetchFeaturedProperties = async () => {
            const url = import.meta.env.PROD 
            ? import.meta.env.VITE_PRODUCTION_ENDPOINT 
            : import.meta.env.VITE_LOCALHOST_ENDPOINT;
            setLoading(true);
            try{
                const response = await fetch(url, ({
                    method:'GET',
                    headers:{
                        'Content-Type':'application/json'
                    }
                }));

                if(!response.ok) {
                    const result = await response.json();
                    setError(result.error);
                    throw new Error(`${response.status}`)
                };

                const result = await response.json();
                setFeaturedProperties(result.featuredListings);

            } catch(err:any) {
                setError(err.message);
                console.error('Internal Server Error', err)
            } finally{
                setLoading(false);
            }
        };
        fetchFeaturedProperties();
    }, [featuredProperties]);
    return{isLoading, error, isFeaturedProperties}
};