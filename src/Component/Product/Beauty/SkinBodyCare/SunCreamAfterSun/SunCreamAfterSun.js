import React, { useEffect, useState } from 'react';
import { Accordion, Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import useProduct from '../../../../../hooks/Product/useProduct';
import Footer from '../../../../Footer/Footer';
import Header from '../../../../Header/Header';
import Newsletter from '../../../../Newsletter/Newsletter';
import PromoUnit from '../../../../PromoUnit/PromoUnit';
import AllProduct from '../../../AllProduct/AllProduct';
const SunCreamAfterSun = () => {
  const [price, setPrice] = useState(0);
  const [filter, setFilter] = useState([]);
  const { AllProducts, handleAddToCart } = useProduct();
  const [products, setProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const size = 8;
  const category = 'sunCreamAfterSun';
  useEffect(() => {
    fetch(`https://magpyehub-server.onrender.com/products/${category}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
        console.log(data.products);
        setLoading(false);
      });
  }, [category, page]);

  const filterProduct = catProduct => {
    const updatedProduct = AllProducts.filter(curElem => {
      return curElem.category === catProduct;
    });
    setFilter(updatedProduct);
  };

  const handleInput = e => {
    setPrice(e.target.value);
  };
  return (
    <div>
      <Helmet>
        <title>Sun Cream & After Sun</title>
        <meta name="description" content="This is Magpyehub Online Shop" />
      </Helmet>
      <Header></Header>
      <PromoUnit></PromoUnit>

      <Container fluid>
        <Row>
          <h3
            style={{
              textAlign: 'start',
              color: '#303030',
              fontSize: '26px',
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}
          >
            Sun Cream & After Sun
          </h3>
          <Col md={3} xs={12}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Price Range</Accordion.Header>
                <Accordion.Body>
                  <input type="range" onInput={handleInput} />
                  <p>Price: {price}</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Top Brands</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link
                      onClick={() => {
                        filterProduct('theOrdinary');
                      }}
                      to=""
                    >
                      The Ordinary
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('CHANEL');
                      }}
                      to=""
                    >
                      CHANEL
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('CharlotteTilbury');
                      }}
                      to=""
                    >
                      Charlotte Tilbury
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('Clarins');
                      }}
                      to=""
                    >
                      Clarins
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('Clinique');
                      }}
                      to=""
                    >
                      Clinique
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('DIOR');
                      }}
                      to=""
                    >
                      DIOR
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('JoMaloneLondon');
                      }}
                      to=""
                    >
                      Jo Malone London
                    </Link>{' '}
                    <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Makeup</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link
                      onClick={() => {
                        filterProduct('viewallMakeup');
                      }}
                      to=""
                    >
                      View all Makeup
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('foundations');
                      }}
                      to=""
                    >
                      Foundations
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('concealers');
                      }}
                      to=""
                    >
                      Concealers
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('eyeshadows');
                      }}
                      to=""
                    >
                      Eyeshadows
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('mascaras');
                      }}
                      to=""
                    >
                      Mascaras
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('lipsticks');
                      }}
                      to=""
                    >
                      Lipsticks
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('nailPolish');
                      }}
                      to=""
                    >
                      Nail Polish
                    </Link>
                    <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Fragrance</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link
                      onClick={() => {
                        filterProduct('womensPerfume');
                      }}
                      to=""
                    >
                      Women's Perfume
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('perfumeGiftSets');
                      }}
                      to=""
                    >
                      Perfume Gift Sets
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('mensAftershave');
                      }}
                      to=""
                    >
                      Men's Aftershave
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('aftershaveGiftSets');
                      }}
                      to=""
                    >
                      Aftershave Gift Sets
                    </Link>
                    <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Skin & Body Care</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link
                      onClick={() => {
                        filterProduct('cleansers');
                      }}
                      to=""
                    >
                      Cleansers
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('moisturisers');
                      }}
                      to=""
                    >
                      Moisturisers
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('bathsShower');
                      }}
                      to=""
                    >
                      Baths & Shower
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('bodyCare');
                      }}
                      to=""
                    >
                      Body Care
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('lipBalmCare');
                      }}
                      to=""
                    >
                      Lip Balm & Care
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('handFootCare');
                      }}
                      to=""
                    >
                      Hand & Foot Care
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('skinCareTreatments');
                      }}
                      to=""
                    >
                      Skin Care & Treatments
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('sunCreamAfterSun');
                      }}
                      to=""
                    >
                      Sun Cream & After Sun
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('beautyToolsTechnology');
                      }}
                      to=""
                    >
                      Beauty Tools & Technology
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('menGrooming');
                      }}
                      to=""
                    >
                      Men's Grooming
                    </Link>
                    <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Hair Care & Styling</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link
                      onClick={() => {
                        filterProduct('hairCare');
                      }}
                      to=""
                    >
                      Hair Care
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('shampoo');
                      }}
                      to=""
                    >
                      Shampoo
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('conditioner');
                      }}
                      to=""
                    >
                      Conditioner
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('hairTreatments');
                      }}
                      to=""
                    >
                      Hair Treatments
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('hairStylingProducts');
                      }}
                      to=""
                    >
                      Hair Styling Products
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('hairBrushes');
                      }}
                      to=""
                    >
                      Hair Brushes
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('electricalHairBeauty');
                      }}
                      to=""
                    >
                      Electrical Hair & Beauty
                    </Link>
                    <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>Inspire Me</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link
                      onClick={() => {
                        filterProduct('Offers');
                      }}
                      to=""
                    >
                      Offers
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('NewArrivals');
                      }}
                      to=""
                    >
                      New Arrivals
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('VeganBeauty');
                      }}
                      to=""
                    >
                      Vegan Beauty
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('Wellness');
                      }}
                      to=""
                    >
                      Wellness
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('GiftSets');
                      }}
                      to=""
                    >
                      Gift Sets
                    </Link>
                    <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>Brand</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link
                      onClick={() => {
                        filterProduct('aptamil');
                      }}
                      to=""
                    >
                      Aptamil
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('babyClub');
                      }}
                      to=""
                    >
                      Baby Club
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('britax');
                      }}
                      to=""
                    >
                      Britax
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('fitFlop');
                      }}
                      to=""
                    >
                      Fit Flop
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('gucci');
                      }}
                      to=""
                    >
                      Gucci
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('hipp');
                      }}
                      to=""
                    >
                      Hipp
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('jole');
                      }}
                      to=""
                    >
                      Jole
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('levis');
                      }}
                      to=""
                    >
                      Levis
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('maxiCosi');
                      }}
                      to=""
                    >
                      Maxi Cosi
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('phaseEight');
                      }}
                      to=""
                    >
                      Phase Eight
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('tedBaker');
                      }}
                      to=""
                    >
                      Ted Baker
                    </Link>
                    <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col md={9} xs={12}>
            {loading ? (
              <div className="text-center" style={{ height: '40vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {' '}
                <Spinner animation="grow" variant="info" />
                <Spinner animation="grow" variant="info" />
                <Spinner animation="grow" variant="info" />
              </div>
            ) : (
              <div>
                {!filter.length ? (
                  <Row xs={1} md={4} className="g-4">
                    {products
                      .filter(product => {
                        return product.price > parseInt(price);
                      })
                      .map(product => (
                        <AllProduct
                          key={product._id}
                          product={product}
                          handleAddToCart={handleAddToCart}
                          // pageCount={pageCount}
                        ></AllProduct>
                      ))}
                  </Row>
                ) : (
                  <Row xs={1} md={4} className="g-4">
                    {filter.map(product => (
                      <AllProduct
                        key={product._id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        // pageCount={pageCount}
                      ></AllProduct>
                    ))}
                  </Row>
                )}
              </div>
            )}
            <div className="pagination">
              {[...Array(pageCount).keys()].map(number => (
                <Button className={number === page ? 'selected' : ''} variant="light" key={number} onClick={() => setPage(number)}>
                  {number + 1}
                </Button>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
};

export default SunCreamAfterSun;
