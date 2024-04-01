import React from 'react'
import About from '../About/About'
import Footer from '../Footer/Footer'
import Banner from '../Header/Banner/Banner'
import Header from '../Header/Header'
import Newsletter from '../Newsletter/Newsletter'
import Brand from '../Product/Brand/Brand'
import FavouriteProduct from '../Product/FavouriteProduct/FavouriteProduct'
import Product from '../Product/Product'
import './Home.css'
import PromoUnit from '../PromoUnit/PromoUnit'
import { Helmet } from 'react-helmet'

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Magpyehub Online | Home
                </title>
                <meta name="description" content="This is Magpyehub Online Shop" />
            </Helmet>

            <Header></Header>
            <PromoUnit></PromoUnit>
            <Banner></Banner>
            <Product></Product>
            <Brand></Brand>
            <FavouriteProduct></FavouriteProduct>
            <About></About>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    )
}

export default Home
