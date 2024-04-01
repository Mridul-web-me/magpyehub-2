import { useEffect, useState } from 'react';
import { addToDb, getStoredCart, removeFromDb, getStoredWishList, addToWishList, removeWishListFromDb } from '../../fakeDB';

const useProductFilter = () => {

    const [AllProducts, setAllProducts] = useState([]);
    const [filters, setFilters] = useState([])
    const [carts, setCart] = useState([]);
    const [wishLists, setWishLists] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(true)
    // const size = 5;
    useEffect(() => {
        // fetch('./ProductData.JSON')
        fetch(`https://magpyehub-server.onrender.com/products`)
            .then(res => res.json())
            .then(data => {
                setAllProducts(data.products)
                setLoading(false)
                setFilters(data.products)
            });
    }, []);


    const filterProduct = (catProduct) => {
        const updatedProduct = AllProducts.filter((curElem) => {
            return curElem.category === catProduct;
        });
        setFilters(updatedProduct);
    };

    // Get Stored Cart
    useEffect(() => {
        if (AllProducts.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            setLoading(false)
            for (const _id in savedCart) {
                const AddedCartProduct = AllProducts.find(cartProduct => cartProduct._id === _id);
                if (AddedCartProduct) {
                    const quantity = savedCart[_id];
                    AddedCartProduct.quantity = quantity;
                    // console.log(quantity);
                    storedCart.push(AddedCartProduct);
                }
            }
            setCart(storedCart);
            setLoading(false)
        }
    }, [AllProducts])

    useEffect(() => {
        if (AllProducts.length) {
            const savedWishList = getStoredWishList();
            const storedWishList = [];
            setLoading(false)
            for (const _id in savedWishList) {
                const AddedWishListProduct = AllProducts.find(wishListProduct => wishListProduct._id === _id);
                if (AddedWishListProduct) {
                    const quantity = savedWishList[_id];
                    AddedWishListProduct.quantity = quantity;
                    // console.log(quantity);
                    storedWishList.push(AddedWishListProduct);
                }
            }
            setWishLists(storedWishList);
            setLoading(false)
        }
    }, [AllProducts])

    // Cart Handler
    const handleAddToCart = (products) => {
        const newCart = [...carts, products];
        setCart(newCart);
        addToDb(products._id);
    }

    const handleAddToWishList = (products) => {
        const newWishList = [...wishLists, products];
        setWishLists(newWishList);
        addToWishList(products._id);
    }

    const handleRemove = _id => {
        const removeCart = carts.filter(product => product._id !== _id)
        setCart(removeCart)
        removeFromDb(_id);
    }
    const handleWishListRemove = _id => {
        const removeWishList = wishLists.filter(product => product._id !== _id)
        setWishLists(removeWishList)
        removeWishListFromDb(_id);
    }


    // Total Price
    let totalCartQuantity = 0;
    let total = 0;
    for (const cartProduct of carts) {
        if (!cartProduct.quantity) {
            cartProduct.quantity = 1;
        }
        total = total + cartProduct.price * cartProduct.quantity;
        totalCartQuantity = totalCartQuantity + cartProduct.quantity;
    }

    // Total Price
    let totalWishListQuantity = 0;
    let wishListTotal = 0;
    for (const wishListProduct of wishLists) {
        if (!wishListProduct.quantity) {
            wishListProduct.quantity = 1;
        }
        wishListTotal = wishListTotal + wishListProduct.price * wishListProduct.quantity;
        totalWishListQuantity = totalWishListQuantity + wishListProduct.quantity;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 10;
    const grandTotal = total + shipping + tax;


    return {
        AllProducts,
        handleAddToCart,
        handleAddToWishList,
        handleWishListRemove,
        carts,
        grandTotal,
        totalCartQuantity,
        totalWishListQuantity,
        total, tax, shipping,
        pageCount,
        page,
        setPage,
        handleRemove,
        loading,
        setFilters,
        filters,
        setCart,
        filterProduct,
        wishLists
    }
};

export default useProductFilter;