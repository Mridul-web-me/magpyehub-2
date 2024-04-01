import React, { createContext } from 'react';
import useProductFilter from '../../hooks/Product/useProductFilter';


export const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {

    const allContexts = useProductFilter();

    return (
        <ProductContext.Provider value={allContexts}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;