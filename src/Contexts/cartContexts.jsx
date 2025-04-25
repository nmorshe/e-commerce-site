import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import { CartReducer } from './cartReducer';

export const CartContext = createContext();

//const storage = sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')) : [];

const storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

const initialState = { cartItems: storage };

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addProduct = (payload) => {
        dispatch({ type: 'ADD', payload });
        return state.cartItems;
    }

    const removeProduct = (payload) => {
        dispatch({ type: 'REMOVE', payload });
        return state.cartItems;
    }

    const increaseQty = (payload) => {
        dispatch({ type: 'INCQTY', payload });
        return state.cartItems;
    }

    const decreaseQty = (payload) => {
        dispatch({ type: 'DECQTY', payload });
        return state.cartItems;
    }

    const clearBasket = () => {
        dispatch({ type: 'CLEAR', payload: undefined });
        return state.cartItems;
    }

    const getItems = () => {
        return state.cartItems;
    }

    const contextValues = {
        addProduct,
        removeProduct,
        increaseQty,
        decreaseQty,
        clearBasket,
        getItems,
        ...state
    }

    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    )
}

CartContextProvider.propTypes = {
    children: PropTypes.element
};

export default CartContextProvider;