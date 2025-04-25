import { useContext } from 'react';
import PropTypes from 'prop-types';

import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CartContext } from '../Contexts/cartContexts';



const CategoryProduct = ({id, title, image, specs, features, price, stock}) => {

    const navigate = useNavigate();

    const { addProduct } = useContext(CartContext);

    return (
        <article>
            <ProductTitle>
                <Link to={`/products/${id}`}>{title}</Link>
            </ProductTitle>

            <figure>
                <ProductImageContainer>
                    <ProductImageContainerImage src={`/assets/${image}`} alt={title} />
                </ProductImageContainer>
            </figure>

            <aside>
                <ProductInfo>
                    <ProductInfoHeader>Dimensions</ProductInfoHeader>
                    <label>{specs.dimensions}</label>
                </ProductInfo>

                {specs.capacity &&
                    <ProductInfo>
                        <ProductInfoHeader>Capacity</ProductInfoHeader>
                        <label> {specs.capacity}</label>
                    </ProductInfo>
                }

                {specs.remoteControlType &&
                    <ProductInfo>
                        <ProductInfoHeader>Remote Control Type</ProductInfoHeader>
                        <label> {specs.remoteControlType}</label>
                    </ProductInfo>
                }

                <ProductInfo>
                    <ProductInfoHeader>Features</ProductInfoHeader>
                    <ul>
                        {features?.map((f, i) => { 
                            return <ProductInfoListItem key={`feature${i}`}>{f}</ProductInfoListItem>
                        }) }
                    </ul>
                </ProductInfo>
            </aside>

            <ProductFinance>
                <ProductFinancePrice>
                    ${price}
                </ProductFinancePrice>

                <ProductInfoStock>
                    <ProductInfoStockLabel>Stock Level: {stock}</ProductInfoStockLabel>
                </ProductInfoStock>

                <ProductAction>
                    <ProductActionButton onClick={() => navigate(`/products/${id}`)}>View Product</ProductActionButton>
                    <ProductActionButton onClick={() => addProduct({id, title, price})}>Add to Basket</ProductActionButton>
                </ProductAction>

            </ProductFinance>

        </article>
    );
}

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

CategoryProduct.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    specs: PropTypes.object.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired
}

export default CategoryProduct;