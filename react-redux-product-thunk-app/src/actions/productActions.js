import axios from 'axios';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const SET_PRODUCTS = 'SET_PRODUCTS';

// Action creators
export const addProduct = (product) => ({
    type: ADD_PRODUCT,
    payload: product
});

export const updateProduct = (product) => ({
    type: UPDATE_PRODUCT,
    payload: product
});

export const deleteProduct = (id) => ({
    type: DELETE_PRODUCT,
    payload: id
});

export const setProducts = (products) => ({
    type: SET_PRODUCTS,
    payload: products
});

// Thunk for fetching products
export const fetchProducts = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:3000/products');
            dispatch(setProducts(response.data));
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
};

// Thunk for adding a product
export const addProductAsync = (product) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3000/products', product);
            dispatch(addProduct(response.data));
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };
};

// Thunk for updating a product
export const updateProductAsync = (product) => {
    return async (dispatch) => {
        try {
            const response = await axios.put(`http://localhost:3000/products/${product.id}`, product);
            dispatch(updateProduct(response.data));
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };
};

// Thunk for deleting a product
export const deleteProductAsync = (id) => {
    return async (dispatch) => {
        try {
            await axios.delete(`http://localhost:3000/products/${id}`);
            dispatch(deleteProduct(id));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };
};
