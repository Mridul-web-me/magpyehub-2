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
const WomenOccasionHatsFascinators = () => {
  const [price, setPrice] = useState(0);
  const [filter, setFilter] = useState([]);
  const { AllProducts, handleAddToCart } = useProduct();
  const [products, setProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const size = 8;
  const category = 'womenOccasionHatsFascinators';
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
        <title>Occasion Hats & Fascinators</title>
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
            Occasion Hats & Fascinators
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
                <Accordion.Header>Clothing</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link
                      onClick={() => {
                        filterProduct('dresses');
                      }}
                      to=""
                    >
                      Dresses
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('jeans');
                      }}
                      to=""
                    >
                      Jeans
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('shirtsTops');
                      }}
                      to=""
                    >
                      Shirts & Tops
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('shorts');
                      }}
                      to=""
                    >
                      Shorts
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('skirts');
                      }}
                      to=""
                    >
                      Skirts
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('sportsClothes');
                      }}
                      to=" "
                    >
                      Sports & Clothes{' '}
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('swimwearBeachwear');
                      }}
                      to=" "
                    >
                      Swimwear Beachwear{' '}
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('womenTrousers');
                      }}
                      to=""
                    >
                      Trousers
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('leggings');
                      }}
                      to=""
                    >
                      Leggings
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('plusSize');
                      }}
                      to=""
                    >
                      Plus Size
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('maternityClothes');
                      }}
                      to=" "
                    >
                      Maternity Clothes
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('coatsJackets');
                      }}
                      to=" "
                    >
                      Coats & Jackets
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('jumpersKnitwear');
                      }}
                      to=" "
                    >
                      Jumpers & Knitwear
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('jumpsuits');
                      }}
                      to=" "
                    >
                      Jumpsuits
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('linen');
                      }}
                      to=""
                    >
                      Linen
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('loungewear');
                      }}
                      to=" "
                    >
                      Loungewear
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('petite');
                      }}
                      to=" "
                    >
                      Petite
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('occasionwear');
                      }}
                      to=" "
                    >
                      Occasionwear
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('weddingBoutique');
                      }}
                      to=" "
                    >
                      Wedding
                    </Link>{' '}
                    <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Footwear</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link
                      onClick={() => {
                        filterProduct('womenShoes');
                      }}
                      to=""
                    >
                      Shoes
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('womenSandals');
                      }}
                      to=""
                    >
                      Sandals
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('womenSlippers');
                      }}
                      to=""
                    >
                      Slippers
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('womenTrainersAndPlimsoles');
                      }}
                      to=""
                    >
                      Trainers & Plimsoles
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('womenCourtShoes');
                      }}
                      to=""
                    >
                      Court Shoes
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('womenBoots');
                      }}
                      to=""
                    >
                      Boots
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('womenPumps');
                      }}
                      to=""
                    >
                      Court Pumps
                    </Link>{' '}
                    <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Lingerie, Nightwear & Hosiery</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link
                      onClick={() => {
                        filterProduct('brasSportsBras');
                      }}
                      to=""
                    >
                      Bras & Sports Bras
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('Nightwear');
                      }}
                      to=""
                    >
                      Nightwear
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('socks');
                      }}
                      to=""
                    >
                      Socks
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('Knickers');
                      }}
                      to=""
                    >
                      Knickers
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('tights');
                      }}
                      to=""
                    >
                      Tights
                    </Link>{' '}
                    <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Accessories</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link
                      onClick={() => {
                        filterProduct('womenHandbags');
                      }}
                      to=""
                    >
                      Handbags
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('womenPurses');
                      }}
                      to=""
                    >
                      Purses
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('womenBelts');
                      }}
                      to=""
                    >
                      Belts
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('womenSunglasses');
                      }}
                      to=""
                    >
                      Sunglasses
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('womenJewellery');
                      }}
                      to=""
                    >
                      Jewellery
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('womenHats');
                      }}
                      to=""
                    >
                      Hats
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('womenWatches');
                      }}
                      to=""
                    >
                      Watches
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('womenHairAccessories');
                      }}
                      to=""
                    >
                      Hair Accessories
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('womenOccasionHatsFascinators');
                      }}
                      to=""
                    >
                      Occasion Hats & Fascinators
                    </Link>{' '}
                    <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
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

export default WomenOccasionHatsFascinators;
