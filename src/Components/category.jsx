import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../fetcher';
import CategoryProduct from './categoryProduct';

const Category = () => {

    const [products, setProducts] = useState({ errorMsg: '', data: {} });

    const { categoryId } = useParams();

    useEffect(() => {
        const fetchData = async () => {

            const responseObject = await getProducts(categoryId);
            setProducts(responseObject);
        }

        fetchData();
    }, [categoryId]);

    const renderProducts = () => {
        return products.data.map((p) => (
            <CategoryProduct key={p.id} {...p}>{p.title}</CategoryProduct>
        ))
    }

    return (

        <div>
            {products.errorMsg && <div>Error: {products.errorMsg}</div>}
            {products.data.length > 0 ? renderProducts() : <div>No products found</div>}
        </div >
    )
};

export default Category;