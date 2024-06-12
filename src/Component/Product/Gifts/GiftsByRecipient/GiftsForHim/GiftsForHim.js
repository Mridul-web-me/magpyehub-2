import { useEffect, useState } from 'react';
import { Accordion, Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import useProduct from '../../../../../hooks/Product/useProduct';
import Footer from '../../../../Footer/Footer';
import Header from '../../../../Header/Header';
import Newsletter from '../../../../Newsletter/Newsletter';
import PromoUnit from '../../../../PromoUnit/PromoUnit';
import AllProduct from '../../../AllProduct/AllProduct';

const GiftsForHim = props => {
  const [price, setPrice] = useState(0);
  const [filter, setFilter] = useState([]);
  const { AllProducts, handleAddToCart } = useProduct();
  const [products, setProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const size = 8;
  const category = 'GiftsForHim';
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
        <title>Gifts For Him</title>
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
            Gifts For Him
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
                <Accordion.Header>Gifts By Recipient</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link
                      to=""
                      onClick={() => {
                        filterProduct('GiftsForHer');
                      }}
                    >
                      Gifts for Her
                    </Link>
                    <br />
                    <Link
                      to=""
                      onClick={() => {
                        filterProduct('GiftsForHim');
                      }}
                    >
                      Gifts for Him
                    </Link>
                    <br />
                    <Link
                      to=""
                      onClick={() => {
                        filterProduct('GiftsForKids');
                      }}
                    >
                      Gifts for Kids
                    </Link>
                    <br />
                    <Link
                      to=""
                      onClick={() => {
                        filterProduct('GiftsForCouples');
                      }}
                    >
                      Gifts for Couples
                    </Link>
                    <br />
                    <Link
                      to=""
                      onClick={() => {
                        filterProduct('GiftsForBabies');
                      }}
                    >
                      Gifts for Babies
                    </Link>
                    <br />
                    <Link
                      to=""
                      onClick={() => {
                        filterProduct('GiftsForTeenagers');
                      }}
                    >
                      Gifts for Teenagers
                    </Link>
                    <br />
                    <Link
                      to=""
                      onClick={() => {
                        filterProduct('GiftsForPets');
                      }}
                    >
                      Gifts for Pets
                    </Link>
                    <br />
                    <Link
                      to=""
                      onClick={() => {
                        filterProduct('GiftsForGrandparents');
                      }}
                    >
                      Gifts for Grandparents
                    </Link>
                    <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Gifts by Price</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link
                      to=""
                      onClick={() => {
                        filterProduct('GiftsUnder20');
                      }}
                    >
                      Gifts under $20
                    </Link>
                    <br />
                    <Link
                      to=""
                      onClick={() => {
                        filterProduct('GiftsUnder50');
                      }}
                    >
                      Gifts under $50
                    </Link>
                    <br />
                    <Link
                      to=""
                      onClick={() => {
                        filterProduct('GiftsUnder100');
                      }}
                    >
                      Gifts under $100
                    </Link>
                    <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Shop by Occasion</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link
                      to=""
                      onClick={() => {
                        filterProduct('Birthday');
                      }}
                    >
                      Birthday
                    </Link>
                    <br />
                    <Link
                      to=""
                      onClick={() => {
                        filterProduct('Wedding');
                      }}
                    >
                      Wedding
                    </Link>
                    <br />
                    <Link
                      to=""
                      onClick={() => {
                        filterProduct('NewHome');
                      }}
                    >
                      New Home
                    </Link>
                    <br />
                    <Link
                      to=""
                      onClick={() => {
                        filterProduct('Anniversary');
                      }}
                    >
                      Anniversary
                    </Link>
                    <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Food & Drink Gifts</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link
                      to=""
                      onClick={() => {
                        filterProduct('ViewAllGiftFoodDrink');
                      }}
                    >
                      View All Gift Food & Drink
                    </Link>
                    <br />
                    <Link
                      to=""
                      onClick={() => {
                        filterProduct('GiftsForGinLovers');
                      }}
                    >
                      Gifts for Gin Lovers
                    </Link>
                    <br />
                    <Link
                      to=""
                      onClick={() => {
                        filterProduct('CakesBiscuits');
                      }}
                    >
                      Cakes & Biscuits
                    </Link>
                    <br />
                    <Link
                      to=""
                      onClick={() => {
                        filterProduct('SweetsFudge');
                      }}
                    >
                      Sweets & Fudge
                    </Link>
                    <br />
                    <Link
                      to=""
                      onClick={() => {
                        filterProduct('Hampers');
                      }}
                    >
                      Hampers
                    </Link>
                    <br />
                    <Link
                      to=""
                      onClick={() => {
                        filterProduct('Chocolate');
                      }}
                    >
                      Chocolate
                    </Link>
                    <br />
                    <Link
                      to=""
                      onClick={() => {
                        filterProduct('Alcohol');
                      }}
                    >
                      Alcohol
                    </Link>
                    <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Popular Gifts</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link
                      to=""
                      onClick={() => {
                        filterProduct('BeautyFragranceGifts');
                      }}
                    >
                      Beauty & Fragrance Gifts
                    </Link>
                    <br />
                    <Link
                      to=""
                      onClick={() => {
                        filterProduct('GamesAndPuzzles');
                      }}
                    >
                      Games and Puzzles
                    </Link>
                    <br />
                    <Link
                      to=""
                      onClick={() => {
                        filterProduct('CandlesHomeFragrance');
                      }}
                    >
                      Candles & Home Fragrance
                    </Link>
                    <br />
                    <Link
                      to=""
                      onClick={() => {
                        filterProduct('CookingBaking');
                      }}
                    >
                      Cooking & Baking{' '}
                    </Link>
                    <br />
                    <Link
                      to=""
                      onClick={() => {
                        filterProduct('Gardening');
                      }}
                    >
                      Gardening{' '}
                    </Link>
                    <br />
                    <Link
                      to=""
                      onClick={() => {
                        filterProduct('GiftWrapPartyShop');
                      }}
                    >
                      Gift Wrap & Party Shop
                    </Link>
                    <br />
                    <Link
                      to=""
                      onClick={() => {
                        filterProduct('GiftStationery');
                      }}
                    >
                      Stationery
                    </Link>
                    <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>Gift Inspiration</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link
                      onClick={() => {
                        filterProduct('LuxuryGifts');
                      }}
                      to=""
                    >
                      Luxury Gifts
                    </Link>{' '}
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('Techies');
                      }}
                      to=""
                    >
                      Techies
                    </Link>{' '}
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

export default GiftsForHim;
