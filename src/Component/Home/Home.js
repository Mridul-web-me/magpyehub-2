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
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Set a timeout to reload the page after 15 seconds if it's the first load
    const reloadTimeout = setTimeout(() => {
      if (loading && isFirstLoad) {
        window.location.href = window.location.href;
      }
    }, 15000);

    fetch(`https://magpyehub-server.onrender.com/products/`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
        setIsFirstLoad(false); // Data has been loaded at least once
        clearTimeout(reloadTimeout); // Clear the timeout if products are loaded
      })
      .catch(err => {
        console.error('Failed to fetch products:', err);
        setLoading(false); // Handle error state
      });

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(reloadTimeout);
  }, [loading, isFirstLoad]);

  console.log(products.length);
  return (
    <div>
      <Helmet>
        <title>Magpyehub Online | Home</title>
        <meta name="description" content="This is Magpyehub Online Shop" />
      </Helmet>

      {loading && (
        <>
          <div className="text-center" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            {' '}
            <div>
              <Spinner animation="grow" variant="info" />
              <Spinner animation="grow" variant="info" />
              <Spinner animation="grow" variant="info" />
            </div>
            <p style={{ fontSize: '20px', marginTop: '10px' }}>The server is sleeping. Please wait a few seconds. Thank you!</p>
          </div>
        </>
      )}

      {!loading && (
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
