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
const KidsGamesPuzzles = () => {
  const [price, setPrice] = useState(0);
  const [filter, setFilter] = useState([]);
  const { AllProducts, handleAddToCart } = useProduct();
  const [products, setProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const size = 8;
  const category = 'KidsGamesPuzzles';
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
        <title>Kids Games & Puzzles</title>
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
            Kids Games & Puzzles
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
                <Accordion.Header>Baby Food & Milk</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link
                      onClick={() => {
                        filterProduct('BabyToddlerFood');
                      }}
                      to=""
                    >
                      Baby & Toddler Food
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('BabyToddlerMilk');
                      }}
                      to=""
                    >
                      Baby & Toddler Milk
                    </Link>
                    <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Baby Home & Nursery</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link
                      onClick={() => {
                        filterProduct('sleeping');
                      }}
                      to=""
                    >
                      Sleeping
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('bathingChanging');
                      }}
                      to=""
                    >
                      Bathing & Changing
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('feedingWeaning');
                      }}
                      to=""
                    >
                      Feeding & Weaning
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('nurseryFunitureFurnishings');
                      }}
                      to=""
                    >
                      Nursery Funiture & Furnishings
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('safetyHealthcare');
                      }}
                      to=""
                    >
                      Safety & Healthcare
                    </Link>
                    <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Baby Clothes (0-4 years)</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link
                      onClick={() => {
                        filterProduct('babyToddlerclothes');
                      }}
                      to=""
                    >
                      Baby & Toddler clothes
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('babyBoyClothes');
                      }}
                      to=""
                    >
                      Baby Boy Clothes
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('babyGirlClothes');
                      }}
                      to=""
                    >
                      Baby Girl Clothes
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('sleepsuitsBodysuits');
                      }}
                      to=""
                    >
                      Sleepsuits & Bodysuits
                    </Link>
                    <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Kids Clothing & Shoes</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link
                      onClick={() => {
                        filterProduct('AllGirlsclothes');
                      }}
                      to=""
                    >
                      All Girls clothes
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('GirlsDresses');
                      }}
                      to=""
                    >
                      Girls Dresses
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('GirlsShoes');
                      }}
                      to=""
                    >
                      Girls Shoes
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('AllBoysClothes');
                      }}
                      to=""
                    >
                      All Boys Clothes
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('BoysShorts');
                      }}
                      to=""
                    >
                      Boys Shorts{' '}
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('BoysShoes');
                      }}
                      to=""
                    >
                      Boys Shoes
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('BoysTops');
                      }}
                      to=""
                    >
                      Boys Tops{' '}
                    </Link>
                    <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Kids Travel</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link
                      onClick={() => {
                        filterProduct('carSeats');
                      }}
                      to=""
                    >
                      Car Seats
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('babyCarriers');
                      }}
                      to=""
                    >
                      Baby Carriers
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('strollers');
                      }}
                      to=""
                    >
                      Strollers
                    </Link>
                    <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>Kids Toys & Gifts</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link
                      onClick={() => {
                        filterProduct('Toys');
                      }}
                      to=""
                    >
                      Toys
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('BabyPreschoolToys');
                      }}
                      to=""
                    >
                      Baby & preschool Toys
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('KidsGamesPuzzles');
                      }}
                      to=""
                    >
                      Games & Puzzles
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('LEGO');
                      }}
                      to=""
                    >
                      LEGO
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('GiftsForBabiesKids');
                      }}
                      to=""
                    >
                      Gifts for Babies & Kids
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

export default KidsGamesPuzzles;
