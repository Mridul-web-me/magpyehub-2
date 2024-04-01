const addToDb = _id => {
    const stored_cart = getStoredCart();
    if (_id in stored_cart) {
        stored_cart[_id] += 1;

    }
    else {
        stored_cart[_id] = 1;
    }
    updateDb(stored_cart);
}

const addToWishList = _id => {
    const stored_wish_list = getStoredWishList();
    stored_wish_list[_id] = 1;
    updateWishListDb(stored_wish_list);
}

const DecrementToDb = _id => {
    const stored_cart = getStoredCart();
    if (_id in stored_cart) {
        stored_cart[_id] -= 1;
    }
    else {
        stored_cart[_id] = 1
    }
    updateDb(stored_cart);
}

const getDb = () => localStorage.getItem('shopping_cart');
const getWishListDb = () => localStorage.getItem('wish_list');

const removeFromDb = _id => {
    const exist = getDb()
    if (!exist) {

    }
    else {
        const shopping_cart = JSON.parse(exist)
        delete shopping_cart[_id]
        updateDb(shopping_cart);
    }
}
const removeWishListFromDb = _id => {
    const exist = getWishListDb()
    if (!exist) {

    }
    else {
        const wish_list = JSON.parse(exist)
        delete wish_list[_id]
        updateWishListDb(wish_list);
    }
}
const updateDb = cart => {
    localStorage.setItem('shopping_cart', JSON.stringify(cart));
}
const updateWishListDb = wishList => {
    localStorage.setItem('wish_list', JSON.stringify(wishList));
}

const getStoredCart = () => {
    const exist = getDb();
    return exist ? JSON.parse(exist) : {};
}

const getStoredWishList = () => {
    const exist = getWishListDb();
    return exist ? JSON.parse(exist) : {};
}

const clearTheCart = () => {
    localStorage.removeItem('shopping_cart');
}
const clearTheWishList = () => {
    localStorage.removeItem('wish_list');
}
export {
    addToDb,
    addToWishList,
    getStoredCart,
    getStoredWishList,
    removeFromDb,
    clearTheCart,
    DecrementToDb,
    removeWishListFromDb,
    clearTheWishList
}