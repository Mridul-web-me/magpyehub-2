import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Footer from '../../../../Footer/Footer'
import Header from '../../../../Header/Header'
import Newsletter from '../../../../Newsletter/Newsletter'
import PromoUnit from '../../../../PromoUnit/PromoUnit'
import img1 from '../../../../../img/ShopDiningRoom/1.webp'
import img2 from '../../../../../img/ShopDiningRoom/2.webp'
import img3 from '../../../../../img/ShopDiningRoom/3.webp'
import img4 from '../../../../../img/ShopDiningRoom/4.jpg'
import img5 from '../../../../../img/ShopDiningRoom/5.webp'
import img6 from '../../../../../img/ShopDiningRoom/6.webp'
import img7 from '../../../../../img/ShopDiningRoom/7.webp'
import img8 from '../../../../../img/ShopDiningRoom/8.webp'
const ShopDiningRoom = () => {

    return (
        <>
            <Helmet>
                <title>Shop Dining Room</title>
                <meta name="description" content="This is Magpyehub Online Shop" />
            </Helmet>
            <Header></Header>
            <PromoUnit></PromoUnit>
            <Container fluid>
                <Row>
                    <h3 style={{
                        textAlign: 'center',
                        color: '#606060', fontSize: '20px',
                        textTransform: 'uppercase',
                        marginBottom: '20px'
                    }}>Shop Dining Room</h3>
                    <hr />
                    <Col md={2} xs={12}>
                        <div className='mainRoute' style={{
                            textAlign: 'start',
                            padding: '10px 0'
                        }} >
                            <Link to="/home"> Homepage </Link> /
                            <Link to="/FurnitureAndLighting/shopDiningRoom"> Shop Dining Room </Link>
                            <hr />
                        </div>
                        <h6 style={{ textAlign: 'start' }}>Living Room Furniture</h6>
                        <div className="filterItem">
                            <Link to="/furnitureAndLighting/sofasArmchairs">Sofas & Armchairs</Link><br />
                            <Link to="/furnitureAndLighting/tVStands">TV Stands</Link><br />
                            <Link to="/furnitureAndLighting/coffeeTables">Coffee Tables</Link><br />
                            <Link to="/furnitureAndLighting/bookcasesShelving">Bookcases & Shelving</Link><br />
                            <Link to="/furnitureAndLighting/cabinetsSideboards">Cabinets & Sideboards</Link><br />
                            <Link to="/furnitureAndLighting/consoleTables">Console Tables</Link><br />
                            <Link to="/furnitureAndLighting/sideTables">Side Tables</Link><br />
                            <Link to="/furnitureAndLighting/shopLivingRoom">Shop Living Room</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Bedroom Furniture</h6>
                        <div className="filterItem">
                            <Link to="/furnitureAndLighting/beds">Beds</Link><br />
                            <Link to="/furnitureAndLighting/mattresses">Mattresses</Link><br />
                            <Link to="/furnitureAndLighting/bedsideTables">Bedside Tables</Link><br />
                            <Link to="/furnitureAndLighting/chestsDrawers">Chests of Drawers</Link><br />
                            <Link to="/furnitureAndLighting/dressingTables">Dressing Tables</Link><br />
                            <Link to="/furnitureAndLighting/wardrobes">Wardrobes</Link><br />
                            <Link to="/furnitureAndLighting/childrenBedroom">Children's Bedroom</Link><br />
                            <Link to="/furnitureAndLighting/shopBedroom">Shop Bedroom</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Dining Room Furniture</h6>
                        <div className="filterItem">
                            <Link to="/furnitureAndLighting/diningTables">Dining Tables</Link><br />
                            <Link to="/furnitureAndLighting/diningChairs">Dining Chairs </Link><br />
                            <Link to="/furnitureAndLighting/barChairsStools">Bar Chairs & Stools</Link><br />
                            <Link to="/furnitureAndLighting/diningBenches">Dining Benches</Link><br />
                            <Link to="/furnitureAndLighting/shopDiningRoom">Shop Dining Room</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Home Office & Storage</h6>
                        <div className="filterItem">
                            <Link to="/furnitureAndLighting/officeDesks">Office Desks</Link><br />
                            <Link to="/furnitureAndLighting/officeChairs">Office Chairs</Link><br />
                            <Link to="/furnitureAndLighting/homeStorage">Home Storage</Link><br />
                            <Link to="/furnitureAndLighting/shopHomeOffice">Shop Home Office</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Lighting</h6>
                        <div className="filterItem">
                            <Link to="/furnitureAndLighting/ceilingLights">Ceiling Lights</Link><br />
                            <Link to="/furnitureAndLighting/deskTableLamps">Desk & Table lamps</Link><br />
                            <Link to="/furnitureAndLighting/floorLamps">Floor Lamps</Link><br />
                            <Link to="/furnitureAndLighting/wallLighting">Wall Lighting</Link><br />
                            <Link to="/furnitureAndLighting/gardenOutdoorlights">Garden & Outdoor lights</Link><br />
                            <Link to="/furnitureAndLighting/lightBulbs">Light Bulbs</Link><br />
                            <Link to="/furnitureAndLighting/lampShades">Lamp Shades</Link><br />
                            <Link to="/furnitureAndLighting/shopLighting">Shop Lighting</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Inspire Me</h6>
                        <div className="filterItem">
                            <Link to="/furnitureAndLighting/gardenDiningSets">Garden Dining Sets</Link><br />
                            <Link to="/furnitureAndLighting/gardenLoungeSets">Garden Lounge Sets</Link><br />
                            <Link to="/furnitureAndLighting/ShopLighting">New in: Lighting</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Brand</h6>

                        <div className="filterItem">
                            <Link to='/brand/aptamil'>Aptamil</Link><br />
                            <Link to='/brand/babyClub'>Baby Club</Link><br />
                            <Link to='/brand/britax'>Britax</Link><br />
                            <Link to='/brand/fitFlop'>Fit Flop</Link><br />
                            <Link to='/brand/gucci' >Gucci</Link><br />
                            <Link to='/brand/hipp' >Hipp</Link><br />
                            <Link to='/brand/jole' >Jole</Link><br />
                            <Link to='/brand/levis'>Levis</Link><br />
                            <Link to='/brand/maxiCosi'>Maxi Cosi</Link><br />
                            <Link to='/brand/phaseEight'>Phase Eight</Link><br />
                            <Link to='/brand/tedBaker'>Ted Baker</Link><br />
                        </div>
                    </Col>

                    <Col md={10} xs={12} >
                        <Row style={{ margin: '20px 0' }}>
                            <Col md={6} xs={12}>
                                <Link to="/furnitureAndLighting/diningTables" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img src={img1} alt="" className='img-fluid' />
                                    <div style={{ margin: '10px 0' }}>
                                        <h3>Get together</h3>
                                        <h5>
                                            Catching up over a relaxed dinner is the best part of the day

                                        </h5>
                                        <h4><Link to="/furnitureAndLighting/diningTables" style={{ color: '#000' }}>Shop Dining Tables</Link></h4>
                                    </div>
                                </Link>
                            </Col>
                            <Col md={6} xs={12}>
                                <Link to="/furnitureAndLighting/diningChairs" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img src={img2} alt="" className='img-fluid' />
                                    <div style={{ margin: '10px 0' }}>
                                        <h3> Pull up a chair</h3>
                                        <h5>

                                            Contemporary or traditional, there's a set of chairs to suit everyone's style


                                        </h5>
                                        <h4><Link to="/furnitureAndLighting/diningChairs" style={{ color: '#000' }}>Shop Dining Chairs</Link></h4>
                                    </div>
                                </Link>
                            </Col>
                        </Row>
                        <Row md={12} style={{ margin: '20px 0' }}>
                            <Col md={3}>
                                <Link to="/furnitureAndLighting/DiningTables" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img src={img3} alt="" width='250px' fluid />
                                    <h5 style={{
                                        fontSize: '20px',
                                        margin: '10px'
                                    }}>Extendable Tables</h5>
                                </Link>

                            </Col>
                            <Col md={3}>
                                <Link to="/furnitureAndLighting/diningTables" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img src={img4} alt="" width='250px' fluid />
                                    <h5 style={{
                                        fontSize: '20px',
                                        margin: '10px'
                                    }}>Round Dining Tables</h5>
                                </Link>

                            </Col>
                            <Col md={3}>
                                <Link to="/furnitureAndLighting/diningChairs" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img src={img5} alt="" width='250px' fluid />
                                    <h5 style={{
                                        fontSize: '20px',
                                        margin: '10px'
                                    }}>Wooden Dining Chairs</h5>
                                </Link>

                            </Col>
                            <Col md={3}>
                                <Link to="/furnitureAndLighting/diningBenches" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img src={img6} alt="" width='250px' fluid />
                                    <h5 style={{
                                        fontSize: '20px',
                                        margin: '10px'
                                    }}>Dining Benches</h5>
                                </Link>

                            </Col>
                        </Row>
                        <Row>
                            <Col md={6} xs={12}>
                                <Link to="/homeAndGarden/tablewareAndcutlery" style={{ color: '#000', margin: '20px 0', textDecoration: 'none' }}>
                                    <img src={img7} alt="" className='img-fluid' />
                                    <div style={{ margin: '10px 0' }}>
                                        <h3>A perfect setting</h3>
                                        <h5>

                                            Complete your dinner set with a new cutlery collection
                                        </h5>
                                        <h4><Link to="/homeAndGarden/tablewareAndcutlery" style={{ color: '#000' }}>Shop Tableware & Cutlery</Link></h4>
                                    </div>
                                </Link>
                            </Col>
                            <Col md={6} xs={12}>
                                <Link to="/furnitureAndLighting/cabinetsSideboards" style={{ color: '#000', margin: '20px 0', textDecoration: 'none' }}>
                                    <img src={img8} alt="" className='img-fluid' />
                                    <div style={{ margin: '10px 0' }}>
                                        <h3> Entertaining</h3>
                                        <h5>

                                            Keep your favourite refreshments close to hand with a stylish drinks trolley, or neat sideboard
                                        </h5>
                                        <h4><Link to="/furnitureAndLighting/cabinetsSideboards" style={{ color: '#000' }}>Shop Cabinets & Sideboards</Link></h4>
                                    </div>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </>
    )
}

export default ShopDiningRoom