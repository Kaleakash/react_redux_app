import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProductAsync, updateProductAsync } from '../actions/productActions';

const ProductForm = ({ product, onClose }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if (product) {
            setName(product.name);
            setPrice(product.price);
        }
    }, [product]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (product) {
            const updatedProduct = {
                ...product,
                name,
                price
            };
            dispatch(updateProductAsync(updatedProduct));
        } else {
            const newProduct = {
                id: Date.now(),
                name,
                price
            };
            dispatch(addProductAsync(newProduct));
        }
        setName('');
        setPrice('');
        onClose(); // Close the form after submission
    };

    return (
        <div>
            <h2>{product ? 'Update Product' : 'Add Product'}</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Product Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="Product Price" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} 
                />
                <button type="submit">{product ? 'Update' : 'Add'}</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default ProductForm;
