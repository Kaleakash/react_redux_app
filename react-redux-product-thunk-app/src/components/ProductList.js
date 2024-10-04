import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProductAsync, fetchProducts } from '../actions/productActions';
import ProductForm from './ProductForm';

const ProductList = () => {
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteProductAsync(id));
    };

    const handleUpdateClick = (product) => {
        setSelectedProduct(product);
        setShowForm(true);
    };

    const handleAddClick = () => {
        setSelectedProduct(null);
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
        setSelectedProduct(null);
    };

    return (
        <div>
            <h2>Product List</h2>
            <button onClick={handleAddClick}>Add Product</button>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - {product.price}
                        <button onClick={() => handleUpdateClick(product)}>Update</button>
                        <button onClick={() => handleDelete(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            {showForm && (
                <ProductForm product={selectedProduct} onClose={handleCloseForm} />
            )}
        </div>
    );
};

export default ProductList;
