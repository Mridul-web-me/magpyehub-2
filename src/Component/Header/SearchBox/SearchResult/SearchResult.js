import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useProduct from '../../../../hooks/Product/useProduct';
import Footer from '../../../Footer/Footer';
import Newsletter from '../../../Newsletter/Newsletter';
import AllProduct from '../../../Product/AllProduct/AllProduct';
import PromoUnit from '../../../PromoUnit/PromoUnit';
import Header from '../../Header';
// import { useForm } from 'react-hook-form';

const SearchResult = () => {
  // const { _id, title, img, category, price } = props.product;
  const { searchText } = useParams();
  const { handleAddToCart } = useProduct();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://magpyehub-server.onrender.com/search?search=${searchText}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      });
    // console.log(product);
  }, [searchText]);

  // const {} = useForm < FieldValues > {};

  return (
    <div>
      <Header></Header>
      <PromoUnit></PromoUnit>
      <Container>
        {loading ? (
          <div>
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="info" />
          </div>
        ) : !product.length ? (
          <div style={{ margin: '100px' }}>
            {' '}
            <h2 style={{ color: '#606060', fontWeight: '700' }}>No Product Found</h2>{' '}
          </div>
        ) : (
          <Row xs={1} md={4} className="g-4">
            {product.map(product => (
              <AllProduct
                key={product._id}
                product={product}
                handleAddToCart={handleAddToCart}
                // pageCount={pageCount}
              ></AllProduct>
            ))}
          </Row>
        )}
      </Container>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
};

export default SearchResult;
