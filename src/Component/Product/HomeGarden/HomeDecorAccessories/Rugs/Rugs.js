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

const Rugs = () => {
  const [price, setPrice] = useState(0);
  const [filter, setFilter] = useState([]);
  const { AllProducts, handleAddToCart } = useProduct();
  const [products, setProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const size = 8;
  const category = 'rugs';
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
        <title>Rugs</title>
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
              margin: '20px 0'
            }}
          >
            Rugs
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
                <Accordion.Header>Home Furnishings & Accessories</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link
                      onClick={() => {
                        filterProduct('duvetCovers');
                      }}
                      to=""
                    >
                      Duvet Covers
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('bedding');
                      }}
                      to=""
                    >
                      Bed Sheets
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('pillowCases');
                      }}
                      to=""
                    >
                      Pillow Cases
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('duvets');
                      }}
                      to=""
                    >
                      Duvets
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('pillows');
                      }}
                      to=""
                    >
                      Pillows
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('throwsBlanketsAndSpreads');
                      }}
                      to=""
                    >
                      Throws & Blankets
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('childrensBedding');
                      }}
                      to=""
                    >
                      Children's Bedding
                    </Link>{' '}
                    <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Cooking & Dining</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link
                      onClick={() => {
                        filterProduct('cookwareBakeware');
                      }}
                      to=""
                    >
                      Cookware & Bakeware
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('tablewareAndcutlery');
                      }}
                      to=""
                    >
                      Tableware & Cutlery
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('glassesDrinkware');
                      }}
                      to=""
                    >
                      Glasses & Drinkware
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('potsPans');
                      }}
                      to=""
                    >
                      Pots & Pans
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('foodPreparation');
                      }}
                      to=""
                    >
                      Food Preparation
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('picnicware');
                      }}
                      to=""
                    >
                      Picnicware
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('kitchenUtensilsGadgets');
                      }}
                      to=""
                    >
                      Kitchen Utensils & Gadgets
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('kitchenBins');
                      }}
                      to=""
                    >
                      Kitchen Bins
                    </Link>{' '}
                    <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Home Décor & Accessories</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link
                      onClick={() => {
                        filterProduct('homeAccessories');
                      }}
                      to=""
                    >
                      Home Accessories
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('cushions');
                      }}
                      to=""
                    >
                      Cushions & Bean Bags
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('candlesAndHomeFragrances');
                      }}
                      to=""
                    >
                      Candles & Home Fragrance
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('towels');
                      }}
                      to=""
                    >
                      {' '}
                      Towels
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('picturesArtFrames');
                      }}
                      to=""
                    >
                      Pictures, Art & Frames
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('mirrors');
                      }}
                      to=""
                    >
                      {' '}
                      Mirrors
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('rugs');
                      }}
                      to=""
                    >
                      {' '}
                      Rugs
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('storage');
                      }}
                      to=""
                    >
                      {' '}
                      Storage
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('wallpaperPaintDIY');
                      }}
                      to=""
                    >
                      {' '}
                      Wallpaper, Paint & DIY
                    </Link>{' '}
                    <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Curtains, Blinds & Floors</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link
                      onClick={() => {
                        filterProduct('curtains');
                      }}
                      to=""
                    >
                      Curtains
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('madeToMeasureCurtains');
                      }}
                      to=""
                    >
                      Made to Measure Curtains
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('curtainPolesAccessories');
                      }}
                      to=""
                    >
                      Curtain Poles & Accessories
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('blinds');
                      }}
                      to=""
                    >
                      {' '}
                      Blinds
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('fabrics');
                      }}
                      to=""
                    >
                      {' '}
                      Fabrics
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('carpetsAndFlooring');
                      }}
                      to=""
                    >
                      {' '}
                      Carpets & Flooring
                    </Link>{' '}
                    <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Garden</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link
                      onClick={() => {
                        filterProduct('gardenFurnitureSets');
                      }}
                      to=""
                    >
                      Garden Furniture Sets
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('gardenSeating');
                      }}
                      to=""
                    >
                      Garden Seating
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('gasBBQs');
                      }}
                      to=""
                    >
                      Gas BBQs
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('pizzaOvens');
                      }}
                      to=""
                    >
                      Pizza Ovens
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('decorativeGardenAccessories');
                      }}
                      to=""
                    >
                      {' '}
                      Decorative Garden Accessories
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('ardenOutdoorlights');
                      }}
                      to=""
                    >
                      {' '}
                      Outdoor Lighting
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('parasolsAccessories');
                      }}
                      to=""
                    >
                      {' '}
                      Parasols & Accessories
                    </Link>{' '}
                    <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
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

export default Rugs;
