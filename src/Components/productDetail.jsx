import { useState, useEffect } from 'react';

import { getProductById } from '../fetcher';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ProductDetail = () => {

    const [product, setProduct] = useState({ errorMsg: '', data: {} });

    const {productId} = useParams();

    useEffect(() => {
        const fetchData = async () => {

            const responseObject = await getProductById(productId);
            setProduct(responseObject);
        }

        fetchData();
    }, [productId]);

    const createMarkup = () => {
        return { __html: product.data?.description };
    }

    return (
        <article>
            <ProductTitle>
                {product.data.title}
            </ProductTitle>

            <figure>
                <ProductImageContainer>
                    <ProductImageContainerImage src={`../assets/${product.data.image}`} alt={product.data.title} />
                </ProductImageContainer>
            </figure>

            <aside>

                {product.data.specs && 

                    <ProductInfo>
                        <ProductInfoHeader>Dimensions</ProductInfoHeader>
                        <label>{product.data.specs.dimensions}</label>
                    </ProductInfo>
                }

                {product.data.specs && product.data.specs.capacity &&

                    <ProductInfo>
                        <ProductInfoHeader>Capacity</ProductInfoHeader>
                        <label> {product.data.specs.capacity}</label>
                    </ProductInfo>
                }

                {product.data.specs && product.data.specs.remoteControlType &&
                    <ProductInfo>
                        <ProductInfoHeader>Remote Control Type</ProductInfoHeader>
                        <label> {product.data.specs.remoteControlType}</label>
                    </ProductInfo>
                }

                <ProductInfo>
                    <ProductInfoHeader>Features</ProductInfoHeader>
                    <ul>
                        {product.data.features?.map((f, i) => {
                            return <ProductInfoListItem key={`feature${i}`}>{f}</ProductInfoListItem>
                        })}
                    </ul>
                </ProductInfo>
            </aside>

            <ProductFinance>
                <ProductFinancePrice>
                    ${product.data.price}
                </ProductFinancePrice>

                <ProductInfoStock>
                    <ProductInfoStockLabel>Stock: {product.data.stock}</ProductInfoStockLabel>
                </ProductInfoStock>

                <ProductAction>
                    <ProductActionButton>Add to Basket</ProductActionButton>
                </ProductAction>

            </ProductFinance>

            <ProductDescr dangerouslySetInnerHTML={createMarkup()}></ProductDescr>

        </article>
    );
}

const ProductDescr = styled.div`
    grid-column: 1 / span 3;
`;

const ProductTitle = styled.div`
    grid-column: 1 / span 3;
    color: darkslategray;
    font-weight: bold;
    font-size: 1.5em;
    padding-left: 10px;
`;

const ProductImageContainer = styled.div`
    padding: 10px;
    width: 60%;
`;

const ProductImageContainerImage = styled.img`
    width: 100%;
    height: 100%;
`;

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProductInfoHeader = styled.h3`
    display: flex;
`;

const ProductInfoListItem = styled.li`
    padding-top: 5px;
`;

const ProductInfoStock = styled.div`
    padding-left: 10px;
    margin-top: 20px;
    padding-top: 10px;
    background-color: lightgrey;
    height: 20%;
    width: 30%;
    border-radius: 5px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
`;

const ProductInfoStockLabel = styled.label`
    padding-bottom: 5px;
`;

const ProductFinance = styled.aside`
    padding-left: 10px;
`;

const ProductFinancePrice = styled.div`
    color: darkslategray;
    font-size: 2em;
    font-weight: bold;
    padding-top: 10px;
    padding-left: 10px;
`;

const ProductAction = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProductActionButton = styled.button`
    width: 160px;
    height: 30px;
    border-radius: 10px;
    margin-top: 20px;
    background-color: lightgray;
    border: solid 1px slategrey;
    font-weight: bold;
`;

export default ProductDetail;