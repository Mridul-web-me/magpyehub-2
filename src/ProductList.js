import React from "react";
import useProduct from "./hooks/Product/useProduct";
// import Product from "./Product";

const ProductList = props => {
    const { AllProducts } = useProduct()

    const renderProducts = AllProducts.map(({ id, title, category }) => {
        return (
            <li key={id}>
                <h4>{title}</h4>
                <h4>{category}</h4>
            </li>
        );
    });

    return <ul>{renderProducts}</ul>;
};

export default ProductList;
