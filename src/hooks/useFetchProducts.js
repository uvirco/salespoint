import { useState, useEffect } from "react";
import { supabase } from '../supabaseClient';

function useFetchProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            console.log('About to fetch products...');
            const { data, error } = await supabase.from("products").select("*");
            console.log('Finished fetching products');
            if (error) {
                console.error("Error fetching products:", error);
            } else {
                setProducts(data);
                console.log('data', data)
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    return { products, loading };
}

export default useFetchProducts;