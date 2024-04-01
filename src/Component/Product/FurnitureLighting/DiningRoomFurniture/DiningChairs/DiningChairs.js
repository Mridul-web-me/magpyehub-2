import { useEffect, useState } from 'react'
import { Accordion, Button, Col, Container, Row, Spinner } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import useProduct from '../../../../../hooks/Product/useProduct'
import Footer from '../../../../Footer/Footer'
import Header from '../../../../Header/Header'
import Newsletter from '../../../../Newsletter/Newsletter'
import PromoUnit from '../../../../PromoUnit/PromoUnit'
import AllProduct from '../../../AllProduct/AllProduct'



const DiningChairs = (props) => {
    const [price, setPrice] = useState(0)
    const [filter, setFilter] = useState([])
    const { AllProducts, handleAddToCart } = useProduct();
    const [products, setProducts] = useState([])
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(true)
    const size = 8;
    const category = 'DiningChairs'
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
                <title>Dining Chairs</title>
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
                    }}>Dining Chairs</h3>
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
                                <Accordion.Header>Living Room Furniture</Accordion.Header>
                                <Accordion.Body>
                                    <div className="filterItem">
                                        <Link onClick={() => { filterProduct('sofasArmchairs') }} to="">Sofas & Armchairs</Link><br />
                                        <Link onClick={() => { filterProduct('tVStands') }} to="">TV Stands</Link><br />
                                        <Link onClick={() => { filterProduct('coffeeTables') }} to="">Coffee Tables</Link><br />
                                        <Link onClick={() => { filterProduct('bookcasesShelving') }} to="">Bookcases & Shelving</Link><br />
                                        <Link onClick={() => { filterProduct('cabinetsSideboards') }} to="">Cabinets & Sideboards</Link><br />
                                        <Link onClick={() => { filterProduct('consoleTables') }} to="">Console Tables</Link><br />
                                        <Link onClick={() => { filterProduct('sideTables') }} to="">Side Tables</Link><br />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Bedroom Furniture</Accordion.Header>
                                <Accordion.Body>
                                    <div className="filterItem">
                                        <Link onClick={() => { filterProduct('beds') }} to="">Beds</Link><br />
                                        <Link onClick={() => { filterProduct('mattresses') }} to="">Mattresses</Link><br />
                                        <Link onClick={() => { filterProduct('bedsideTables') }} to="">Bedside Tables</Link><br />
                                        <Link onClick={() => { filterProduct('chestsDrawers') }} to="">Chests of Drawers</Link><br />
                                        <Link onClick={() => { filterProduct('dressingTables') }} to="">Dressing Tables</Link><br />
                                        <Link onClick={() => { filterProduct('wardrobes') }} to="">Wardrobes</Link><br />
                                        <Link onClick={() => { filterProduct('childrenBedroom') }} to="">Children's Bedroom</Link><br />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Dining Room Furniture</Accordion.Header>
                                <Accordion.Body>
                                    <div className="filterItem">
                                        <Link onClick={() => { filterProduct('DiningTables') }} to="">Dining Tables</Link><br />
                                        <Link onClick={() => { filterProduct('DiningChairs') }} to="">Dining Chairs </Link><br />
                                        <Link onClick={() => { filterProduct('BarChairsStools') }} to="">Bar Chairs & Stools</Link><br />
                                        <Link onClick={() => { filterProduct('DiningBenches') }} to="">Dining Benches</Link><br />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Home Office & Storage</Accordion.Header>
                                <Accordion.Body>
                                    <div className="filterItem">
                                        <Link onClick={() => { filterProduct('OfficeDesks') }} to="">Office Desks</Link><br />
                                        <Link onClick={() => { filterProduct('OfficeChairs') }} to="">Office Chairs</Link><br />
                                        <Link onClick={() => { filterProduct('HomeStorage') }} to="">Home Storage</Link><br />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Lighting</Accordion.Header>
                                <Accordion.Body>
                                    <div className="filterItem">
                                        <Link to="" onClick={() => { filterProduct('CeilingLights') }}>Ceiling Lights</Link><br />
                                        <Link to="" onClick={() => { filterProduct('DeskTableLamps') }}>Desk & Table lamps</Link><br />
                                        <Link to="" onClick={() => { filterProduct('FloorLamps') }}>Floor Lamps</Link><br />
                                        <Link to="" onClick={() => { filterProduct('WallLighting') }}>Wall Lighting</Link><br />
                                        <Link to="" onClick={() => { filterProduct('GardenOutdoorlights') }}>Garden & Outdoor lights</Link><br />
                                        <Link to="" onClick={() => { filterProduct('LightBulbs') }}>Light Bulbs</Link><br />
                                        <Link to="" onClick={() => { filterProduct('LampShades') }}>Lamp Shades</Link><br />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header>Inspire Me</Accordion.Header>
                                <Accordion.Body>
                                    <div className="filterItem">
                                        <Link to="" onClick={() => { filterProduct('gardenDiningSets') }}>Garden Dining Sets</Link><br />
                                        <Link to="" onClick={() => { filterProduct('gardenLoungeSets') }}>Garden Lounge Sets</Link><br />
                                        <Link to="/furnitureAndLighting/ShopLighting">New in: Lighting</Link><br />
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

export default DiningChairs
