import { useEffect, useState } from 'react';
import { getStoredCart } from '../fakeDB';


const useCart = products => {
    const [cart, setCart] = useState([]);

    //  Get Stored Cart
    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const _id in savedCart) {
                console.log(_id);
                const AddedProduct = products.find(product => product._id === _id);
                console.log(_id, AddedProduct);
                if (AddedProduct) {
                    const quantity = savedCart[_id];
                    AddedProduct.quantity = quantity;
                    console.log(quantity);
                    storedCart.push(AddedProduct);
                }
            }
            setCart(storedCart);
        }
    }, [products])
    return [cart, setCart]
};

export default useCart;
