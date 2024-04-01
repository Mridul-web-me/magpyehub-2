import React, { useEffect, useState } from 'react'
import { Accordion, Button, Col, Container, Row, Spinner } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import useProduct from '../../../../../hooks/Product/useProduct'
import Footer from '../../../../Footer/Footer'
import Header from '../../../../Header/Header'
import Newsletter from '../../../../Newsletter/Newsletter'
import PromoUnit from '../../../../PromoUnit/PromoUnit'
import AllProduct from '../../../AllProduct/AllProduct'
const Smartwatches = () => {
    const [price, setPrice] = useState(0)
    const [filter, setFilter] = useState([])
    const { AllProducts, handleAddToCart } = useProduct();
    const [products, setProducts] = useState([])
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(true)
    const size = 8;
    const category = 'Smartwatches'
    useEffect(() => {
        fetch(`https://magpyehub-server.onrender.com/products/${category}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber)
                console.log(data.products);
                setLoading(false)
            });
    }, [category, page]);


    const filterProduct = (catProduct) => {
        const updatedProduct = AllProducts.filter((curElem) => {
            return curElem.category === catProduct;
        });
        setFilter(updatedProduct);

    };

    const handleInput = (e) => {
        setPrice(e.target.value);
    }


    return (
        <div>
            <Helmet>
                <title>Smartwatches</title>
                <meta name="description" content="This is Magpyehub Online Shop" />
            </Helmet>
            <Header></Header>
            <PromoUnit></PromoUnit>

            <Container fluid>
                <Row>
                    <h3 style={{
                        textAlign: 'start',
                        color: '#303030', fontSize: '26px',
                        textTransform: 'uppercase',
                        marginBottom: '20px'
                    }}>Smartwatches</h3>
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
                                <Accordion.Header>Sportswear</Accordion.Header>
                                <Accordion.Body>
                                    <div className="filterItem">
                                        <Link to="" onClick={() => { filterProduct('WomensClothing') }}>Women's Clothing</Link><br />
                                        <Link to="" onClick={() => { filterProduct('WomenSportsTrainers') }}>Women's Sports Trainers</Link><br />
                                        <Link to="" onClick={() => { filterProduct('MenClothing') }}>Men's Clothing</Link><br />
                                        <Link to="" onClick={() => { filterProduct('MenSportsTrainers') }}>Men's Sports Trainers</Link><br />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Fitness</Accordion.Header>
                                <Accordion.Body>
                                    <div className="filterItem">
                                        <Link to="" onClick={() => { filterProduct('FitnessMachinesTechnology') }}>Fitness Machines & Technology</Link><br />
                                        <Link to="" onClick={() => { filterProduct('SportsEquipment') }}>Sports Equipment</Link><br />
                                        <Link to="" onClick={() => { filterProduct('Treadmills') }}>Treadmills</Link><br />
                                        <Link to="" onClick={() => { filterProduct('ExerciseBikes') }}>Exercise Bikes</Link><br />
                                        <Link to="" onClick={() => { filterProduct('CrossTrainers') }}>Cross Trainers</Link><br />
                                        <Link to="" onClick={() => { filterProduct('Weights') }}>Weights</Link><br />
                                        <Link to="" onClick={() => { filterProduct('Smartwatches') }}>Smartwatches</Link><br />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Equipment by Sport</Accordion.Header>
                                <Accordion.Body>
                                    <div className="filterItem">
                                        <Link onClick={() => { filterProduct('Cycling') }} to="">Cycling </Link><br />
                                        <Link onClick={() => { filterProduct('GymTrainingFitness') }} to=" ">Gym, Training & Fitness </Link><br />
                                        <Link onClick={() => { filterProduct('Running') }} to="">Running </Link><br />
                                        <Link onClick={() => { filterProduct('Swimming') }} to="">Swimming </Link><br />
                                        <Link onClick={() => { filterProduct('Yoga') }} to="">Yoga </Link><br />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Sports Brands</Accordion.Header>
                                <Accordion.Body>
                                    <div className="filterItem">
                                        <Link to="" onClick={() => { filterProduct('Adidas') }}>Adidas</Link><br />
                                        <Link to="" onClick={() => { filterProduct('SweatyBetty') }}>Sweaty Betty</Link><br />
                                        <Link to="" onClick={() => { filterProduct('TheNorthFace') }}>The North Face</Link><br />
                                        <Link to="" onClick={() => { filterProduct('Therabody') }}>Therabody</Link><br />
                                        <Link to="" onClick={() => { filterProduct('UnderArmour') }}>Under Armour</Link><br />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Hobbies & Crafts</Accordion.Header>
                                <Accordion.Body>
                                    <div className="filterItem">
                                        <Link to="" onClick={() => { filterProduct('Haberdashery') }}>Haberdashery</Link> <br />
                                        <Link to="" onClick={() => { filterProduct('GamesPuzzles') }}>Games & Puzzles</Link> <br />
                                        <Link to="" onClick={() => { filterProduct('Crafts') }}>Crafts</Link> <br />
                                        <Link to="" onClick={() => { filterProduct('Stationery') }}>Stationery</Link> <br />
                                        <Link to="" onClick={() => { filterProduct('Books') }}>Books</Link> <br />
                                        <Link to="" onClick={() => { filterProduct('SewingMachines') }}>Sewing Machines</Link> <br />
                                        <Link to="" onClick={() => { filterProduct('WoolYarn') }}>Wool & Yarn</Link> <br />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header>Travel & Luggage</Accordion.Header>
                                <Accordion.Body>
                                    <div className="filterItem">
                                        <Link to="" onClick={() => { filterProduct('ViewAllLuggage') }}>View All Luggage</Link><br />
                                        <Link to="" onClick={() => { filterProduct('Backpacks') }}>Backpacks</Link><br />
                                        <Link to="" onClick={() => { filterProduct('CabinCases') }}>Cabin Cases</Link><br />
                                        <Link to="" onClick={() => { filterProduct('Suitcases') }}>Suitcases</Link><br />
                                        <Link to="" onClick={() => { filterProduct('HoldallsWeekendBags') }}>Holdalls & Weekend Bags</Link><br />
                                        <Link to="" onClick={() => { filterProduct('Camping') }}>Camping</Link><br />
                                        <Link to="" onClick={() => { filterProduct('HolidaySummerShop') }}>Holiday & Summer Shop</Link><br />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7">
                                <Accordion.Header>Brand</Accordion.Header>
                                <Accordion.Body>
                                    <div className="filterItem">
                                        <Link onClick={() => { filterProduct('aptamil') }} to="">Aptamil</Link><br />
                                        <Link onClick={() => { filterProduct('babyClub') }} to="">Baby Club</Link><br />
                                        <Link onClick={() => { filterProduct('britax') }} to="">Britax</Link><br />
                                        <Link onClick={() => { filterProduct('fitFlop') }} to="">Fit Flop</Link><br />
                                        <Link onClick={() => { filterProduct('gucci') }} to="">Gucci</Link><br />
                                        <Link onClick={() => { filterProduct('hipp') }} to="">Hipp</Link><br />
                                        <Link onClick={() => { filterProduct('jole') }} to="">Jole</Link><br />
                                        <Link onClick={() => { filterProduct('levis') }} to="">Levis</Link><br />
                                        <Link onClick={() => { filterProduct('maxiCosi') }} to="">Maxi Cosi</Link><br />
                                        <Link onClick={() => { filterProduct('phaseEight') }} to="">Phase Eight</Link><br />
                                        <Link onClick={() => { filterProduct('tedBaker') }} to="">Ted Baker</Link><br />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col md={9} xs={12}>
                        {loading ? <div className='text-center' style={{ height: '40vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <Spinner animation="grow" variant="info" />
                            <Spinner animation="grow" variant="info" />
                            <Spinner animation="grow" variant="info" />
                        </div> : <div>

                            {!filter.length ? <Row xs={1} md={4} className="g-4">
                                {
                                    products.filter(product => { return product.price > parseInt(price) })
                                        .map(product =>
                                            <>
                                                <AllProduct
                                                    key={product._id}
                                                    product={product}
                                                    handleAddToCart={handleAddToCart}
                                                // pageCount={pageCount}
                                                ></AllProduct>
                                            </>

                                        )
                                }
                            </Row> :
                                <Row xs={1} md={4} className="g-4">
                                    {
                                        filter.map(product =>
                                            <>
                                                <AllProduct
                                                    key={product._id}
                                                    product={product}
                                                    handleAddToCart={handleAddToCart}
                                                // pageCount={pageCount}
                                                ></AllProduct>
                                            </>

                                        )
                                    }
                                </Row>}
                        </div>
                        }
                        <div className="pagination">
                            {
                                [...Array(pageCount).keys()]
                                    .map(number => <Button
                                        className={number === page ? 'selected' : ''}
                                        variant="light"
                                        key={number}
                                        onClick={() => setPage(number)}
                                    >{number + 1}</Button>)
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    )
}

export default Smartwatches