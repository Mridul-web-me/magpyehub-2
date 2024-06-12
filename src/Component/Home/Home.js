import React, { useEffect, useState } from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Banner from '../Header/Banner/Banner';
import Header from '../Header/Header';
import Newsletter from '../Newsletter/Newsletter';
import Brand from '../Product/Brand/Brand';
import FavouriteProduct from '../Product/FavouriteProduct/FavouriteProduct';
import Product from '../Product/Product';
import './Home.css';
import PromoUnit from '../PromoUnit/PromoUnit';
import { Helmet } from 'react-helmet';
import { Spinner } from 'react-bootstrap';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://magpyehub-server.onrender.com/products/`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Magpyehub Online | Home</title>
        <meta name="description" content="This is Magpyehub Online Shop" />
      </Helmet>

      {loading ? (
        <>
          <div className="text-center" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            {' '}
            <div>
              <Spinner animation="grow" variant="info" />
              <Spinner animation="grow" variant="info" />
              <Spinner animation="grow" variant="info" />
            </div>
            <h2>
              The server is sleeping. Wait a few seconds or <span style={{ color: 'blueviolet' }}>RELOAD</span> the page.{' '}
            </h2>
          </div>
        </>
      ) : (
        <>
          <Header></Header>
          <PromoUnit></PromoUnit>
          <Banner></Banner>
          <Product></Product>
          <Brand></Brand>
          <FavouriteProduct></FavouriteProduct>
          <About></About>
          <Newsletter></Newsletter>
          <Footer></Footer>
        </>
      )}
    </div>
  );
};

export default Home;
