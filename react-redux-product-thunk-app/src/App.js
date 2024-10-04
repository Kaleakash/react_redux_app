import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ProductList from './components/ProductList';

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <h1>Product Management</h1>
                <ProductList />
            </div>
        </Provider>
    );
};

export default App;
