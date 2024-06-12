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

const ThrowsblanketsandSpreads = () => {
  const [price, setPrice] = useState(0);
  const { AllProducts, handleAddToCart } = useProduct();
  const [filter, setFilter] = useState([]);
  const [products, setProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const size = 8;
  const category = 'throwsBlanketsAndSpreads';
  useEffect(() => {
    fetch(`https://magpyehub-server.onrender.com/products/${category}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
        setLoading(false);
      });
  }, [page, products]);
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
        <title>Throws, blankets and Spreads</title>
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
            Throws, blankets and Spreads
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
                    </Link>
                    <Link
                      onClick={() => {
                        filterProduct('bedding');
                      }}
                      to=""
                    >
                      Bed Sheets
                    </Link>
                    <Link
                      onClick={() => {
                        filterProduct('pillowCases');
                      }}
                      to=""
                    >
                      Pillow Cases
                    </Link>
                    <Link
                      onClick={() => {
                        filterProduct('duvets');
                      }}
                      to=""
                    >
                      Duvets
                    </Link>
                    <Link
                      onClick={() => {
                        filterProduct('pillows');
                      }}
                      to=""
                    >
                      Pillows
                    </Link>
                    <Link
                      onClick={() => {
                        filterProduct('throwsBlanketsAndSpreads');
                      }}
                      to=""
                    >
                      Throws & Blankets
                    </Link>
                    <Link
                      onClick={() => {
                        filterProduct('childrensBedding');
                      }}
                      to=""
                    >
                      Children's Bedding
                    </Link>
                    <Link
                      onClick={() => {
                        filterProduct('shopBedding');
                      }}
                      to=""
                    >
                      Shop Bedding
                    </Link>
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
                    </Link>
                    <Link
                      onClick={() => {
                        filterProduct('tablewareAndcutlery');
                      }}
                      to=""
                    >
                      Tableware & Cutlery
                    </Link>
                    <Link
                      onClick={() => {
                        filterProduct('glassesDrinkware');
                      }}
                      to=""
                    >
                      Glasses & Drinkware
                    </Link>
                    <Link
                      onClick={() => {
                        filterProduct('potsPans');
                      }}
                      to=""
                    >
                      Pots & Pans
                    </Link>
                    <Link
                      onClick={() => {
                        filterProduct('foodPreparation');
                      }}
                      to=""
                    >
                      Food Preparation
                    </Link>
                    <Link
                      onClick={() => {
                        filterProduct('picnicware');
                      }}
                      to=""
                    >
                      Picnicware
                    </Link>
                    <Link
                      onClick={() => {
                        filterProduct('kitchenUtensilsGadgets');
                      }}
                      to=""
                    >
                      Kitchen Utensils & Gadgets
                    </Link>
                    <Link
                      onClick={() => {
                        filterProduct('kitchenBins');
                      }}
                      to=""
                    >
                      Kitchen Bins
                    </Link>
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
                    </Link>
                    <Link
                      onClick={() => {
                        filterProduct('cushions');
                      }}
                      to=""
                    >
                      Cushions & Bean Bags
                    </Link>
                    <Link
                      onClick={() => {
                        filterProduct('candlesAndHomeFragrances');
                      }}
                      to=""
                    >
                      Candles & Home Fragrance
                    </Link>
                    <Link
                      onClick={() => {
                        filterProduct('towels');
                      }}
                      to=""
                    >
                      {' '}
                      Towels
                    </Link>
                    <Link
                      onClick={() => {
                        filterProduct('picturesArtFrames');
                      }}
                      to=""
                    >
                      Pictures, Art & Frames
                    </Link>
                    <Link
                      onClick={() => {
                        filterProduct('mirrors');
                      }}
                      to=""
                    >
                      {' '}
                      Mirrors
                    </Link>
                    <Link
                      onClick={() => {
                        filterProduct('rugs');
                      }}
                      to=""
                    >
                      {' '}
                      Rugs
                    </Link>
                    <Link
                      onClick={() => {
                        filterProduct('storage');
                      }}
                      to=""
                    >
                      {' '}
                      Storage
                    </Link>
                    <Link
                      onClick={() => {
                        filterProduct('wallpaperPaintDIY');
                      }}
                      to=""
                    >
                      {' '}
                      Wallpaper, Paint & DIY
                    </Link>
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
                    </Link>
                    <Link
                      onClick={() => {
                        filterProduct('madeToMeasureCurtains');
                      }}
                      to=""
                    >
                      Made to Measure Curtains
                    </Link>
                    <Link
                      onClick={() => {
                        filterProduct('curtainPolesAccessories');
                      }}
                      to=""
                    >
                      Curtain Poles & Accessories
                    </Link>
                    <Link
                      onClick={() => {
                        filterProduct('blinds');
                      }}
                      to=""
                    >
                      {' '}
                      Blinds
                    </Link>
                    <Link
                      onClick={() => {
                        filterProduct('fabrics');
                      }}
                      to=""
                    >
                      {' '}
                      Fabrics
                    </Link>
                    <Link
                      onClick={() => {
                        filterProduct('carpetsAndFlooring');
                      }}
                      to=""
                    >
                      {' '}
                      Carpets & Flooring
                    </Link>
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
                    </Link>
                    <Link
                      onClick={() => {
                        filterProduct('gardenSeating');
                      }}
                      to=""
                    >
                      Garden Seating
                    </Link>
                    <Link
                      onClick={() => {
                        filterProduct('gasBBQs');
                      }}
                      to=""
                    >
                      Gas BBQs
                    </Link>
                    <Link
                      onClick={() => {
                        filterProduct('charcoalBBQs');
                      }}
                      to=""
                    >
                      Charcoal BBQs
                    </Link>
                    <Link
                      onClick={() => {
                        filterProduct('pizzaOvens');
                      }}
                      to=""
                    >
                      Pizza Ovens
                    </Link>
                    <Link
                      onClick={() => {
                        filterProduct('decorativeGardenAccessories');
                      }}
                      to=""
                    >
                      {' '}
                      Decorative Garden Accessories
                    </Link>
                    <Link
                      onClick={() => {
                        filterProduct('ardenOutdoorlights');
                      }}
                      to=""
                    >
                      {' '}
                      Outdoor Lighting
                    </Link>
                    <Link
                      onClick={() => {
                        filterProduct('parasolsAccessories');
                      }}
                      to=""
                    >
                      {' '}
                      Parasols & Accessories
                    </Link>
                    <Link
                      onClick={() => {
                        filterProduct('shopGarden');
                      }}
                      to=""
                    >
                      {' '}
                      Shop Garden
                    </Link>
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

export default ThrowsblanketsandSpreads;
