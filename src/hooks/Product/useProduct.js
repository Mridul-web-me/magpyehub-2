import { useContext } from 'react';
import { ProductContext } from '../../context/ProductProvider/ProductProvider';

const useProduct = () => {
    const product = useContext(ProductContext);
    return product;
};

export default useProduct;