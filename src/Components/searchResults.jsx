import { useState, useEffect } from 'react';

import { getProductsByQuery } from '../fetcher';
import { useSearchParams } from '../../node_modules/react-router-dom/dist/index';
import CategoryProduct from './categoryProduct';

const SearchResults = () => {

    /**
     * React Hook: Sets the initial value of the products to a JSON object 
     * with a string to contain an error message and a nested JSON object 
     * containing selected elements.
     */
    const [products, setProducts] = useState({ errorMsg: '', data: {} });

    const [searchParams] = useSearchParams();

    const query = searchParams.get('s');

    useEffect(() => {
        const fetchData = async () => {

            const responseObject = await getProductsByQuery(query);
            setProducts(responseObject);
        }

        fetchData();
    }, [query]);

    const renderProducts = () => {

        if (products.data.length > 0) {
            return products.data.map((p) => (
                <CategoryProduct key={p.id} {...p}>{p.title}</CategoryProduct>
            ));
        }

        else {
            return <div>No products found</div>
        }
    }

    return (
        <div>
            {products.errorMsg && <div>Error: {products.errorMsg}</div>}
            {renderProducts()}
        </div >
    );
}

export default SearchResults;