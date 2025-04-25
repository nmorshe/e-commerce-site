/***
 * This file serves as the base fetcher that gets items from a simulated JSON file API
 * for grabbing information.
 */

/**
 * URL of the JSON API to get information from.
 */
const BASE_URL = "http://localhost:3001";

/**
 * Main fetcher function: 
 * 
 * This is set as an asynchronous function due to the fact that it 
 * utilizes fetch and json (async functions). As such this function may 
 * cause race conditions.
 * 
 * @param {any} url : File path in the JSON file for fetching elements.
 * @returns : Fetched items returned as a JSON object.
 */
const fetcher = async(url) => {

    /**
     * Declaration of main response object to return.
     */
    let respObject = {
        errorMsg: '',
        data: []
    };

    /**
     * Starting of the try-catch scenario.
     */
    try {


        /**
         * Fetching response data via the inputed URL
         */
        const response = await fetch(BASE_URL + url);

        /**
         * Checking if the response is valid - throws an error if it is not.
         */
        if (response.ok === false) {
            throw new Error(`HTTP Error ${response.status}`);
        }

        /**
         * Grabs data from the response and populates respObject with it.
         */
        const responseData = await response.json();
        respObject.errorMsg = '';
        respObject.data = responseData;
    }

    /**
     * Catches and prints any errors.
     */
    catch (err) {
        respObject.errorMsg = err.message;
    }

    /**
     * Returns final response object.
     */
    return respObject;
}

export const getCategories = () => {
    return fetcher('/categories');
}

export const getProducts = (id) => {
    return fetcher("/products?catId=" + id);
}

export const getProductById = (id) => {
    return fetcher("/products/" + id);
}

export const getProductsByQuery = (query) => {
    return fetcher("/products?q=" + query);
}