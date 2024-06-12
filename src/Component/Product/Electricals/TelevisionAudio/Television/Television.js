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

const Television = props => {
  const [price, setPrice] = useState(0);
  const [filter, setFilter] = useState([]);
  const { AllProducts, handleAddToCart } = useProduct();
  const [products, setProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const size = 8;
  const category = 'Television';
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
        <title>Television</title>
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
            Television
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
                <Accordion.Header>Television & Audio</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link
                      onClick={() => {
                        filterProduct('Television');
                      }}
                      to=""
                    >
                      Television
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('SoundbarsHomeCinema');
                      }}
                      to=""
                    >
                      Soundbars & Home Cinema
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('TVStandsWallMounts');
                      }}
                      to=""
                    >
                      TV Stands & Wall Mounts
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('TVStreamingDevices');
                      }}
                      to=""
                    >
                      TV Streaming Devices
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('SpeakersSoundSystems');
                      }}
                      to=""
                    >
                      Speakers & Sound Systems
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('Headphones');
                      }}
                      to=""
                    >
                      Headphones
                    </Link>
                    <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Computing & Gaming</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link
                      onClick={() => {
                        filterProduct('IpadsTablets');
                      }}
                      to=""
                    >
                      Ipads & Tablets
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('LaptopsMacBooks');
                      }}
                      to=""
                    >
                      Laptops & MacBooks{' '}
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('PCsDesktopComputers');
                      }}
                      to=""
                    >
                      PCs & Desktop Computers
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('MonitorsProjectors');
                      }}
                      to=""
                    >
                      Monitors & Projectors
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('PrintersAccessories');
                      }}
                      to=""
                    >
                      Printers & Accessories
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('Gaming');
                      }}
                      to=""
                    >
                      Gaming
                    </Link>
                    <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Home Appliances</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link
                      onClick={() => {
                        filterProduct('WashingMachines');
                      }}
                      to=""
                    >
                      Washing Machines
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('FridgeFreezers');
                      }}
                      to=""
                    >
                      Fridge Freezers
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('Dishwashers');
                      }}
                      to=""
                    >
                      Dishwashers
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('CookersOvens');
                      }}
                      to=""
                    >
                      Cookers & Ovens
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('Microwaves');
                      }}
                      to=""
                    >
                      Microwaves
                    </Link>
                    <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Kitchen Appliances & Vacuums</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link
                      onClick={() => {
                        filterProduct('CoffeeMachines');
                      }}
                      to=""
                    >
                      Coffee Machines
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('Kettles');
                      }}
                      to=""
                    >
                      Kettles
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('Toasters');
                      }}
                      to=""
                    >
                      Toasters
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('VacuumCleaners');
                      }}
                      to=""
                    >
                      Vacuum Cleaners
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('FansCoolingPurifiers');
                      }}
                      to=""
                    >
                      Fans, Cooling & Purifiers
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('Ironing');
                      }}
                      to=""
                    >
                      Ironing
                    </Link>
                    <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Mobile, Cameras & Smart Tech</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link
                      onClick={() => {
                        filterProduct('MobilePhonesAccessories');
                      }}
                      to=""
                    >
                      Mobile Phones & Accessories
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('CamerasCamcorders');
                      }}
                      to=""
                    >
                      Cameras & Camcorders
                    </Link>
                    <br />
                    <Link
                      onClick={() => {
                        filterProduct('SmartFitnessWatches');
                      }}
                      to=""
                    >
                      Smart & Fitness Watches
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

export default Television;
