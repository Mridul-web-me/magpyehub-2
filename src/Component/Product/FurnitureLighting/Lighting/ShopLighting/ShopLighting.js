import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Footer from '../../../../Footer/Footer'
import Header from '../../../../Header/Header'
import Newsletter from '../../../../Newsletter/Newsletter'
import PromoUnit from '../../../../PromoUnit/PromoUnit'
import img1 from '../../../../../img/ShopLighting/1.webp'
import img2 from '../../../../../img/ShopLighting/2.webp'
import img3 from '../../../../../img/ShopLighting/3.webp'
import img4 from '../../../../../img/ShopLighting/4.webp'
import img5 from '../../../../../img/ShopLighting/5.webp'
import img6 from '../../../../../img/ShopLighting/6.webp'
import img7 from '../../../../../img/ShopLighting/7.webp'
const ShopLighting = () => {

    return (
        <div>
            <Helmet>
                <title>Shop Lighting</title>
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
                    }}>Shop Lighting</h3>
                    <hr />
                    <Col md={2} xs={12}>
                        <div className='mainRoute' style={{
                            textAlign: 'start',
                            padding: '10px 0'
                        }} >
                            <Link to="/home"> Homepage </Link> /
                            <Link to="/FurnitureAndLighting/ShopLighting"> Shop Lighting </Link>
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
                        <Row md={12} style={{ margin: '20px 0' }}>
                            <Col md={2}>
                                <Link to="/furnitureAndLighting/ceilingLights" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img style={{
                                        borderRadius: '50%',
                                        margin: '10px '
                                    }} src={img1} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '20px',
                                        margin: '10px'
                                    }}>Ceiling Lights</h5>
                                </Link>

                            </Col>
                            <Col md={2}>
                                <Link to="/furnitureAndLighting/gardenOutdoorlights" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img style={{
                                        borderRadius: '50%',
                                        margin: '10px '
                                    }} src={img2} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '20px',
                                        margin: '10px'
                                    }}>Outdoor lights</h5>
                                </Link>

                            </Col>
                            <Col md={2}>
                                <Link to="/furnitureAndLighting/floorLamps" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img style={{
                                        borderRadius: '50%',
                                        margin: '10px '
                                    }} src={img3} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '20px',
                                        margin: '10px'
                                    }}>Floor Lamps</h5>
                                </Link>

                            </Col>
                            <Col md={2}>
                                <Link to="/furnitureAndLighting/wallLighting" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img style={{
                                        borderRadius: '50%',
                                        margin: '10px '
                                    }} src={img4} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '20px',
                                        margin: '10px'
                                    }}>Wall Lighting</h5>
                                </Link>

                            </Col>
                            <Col md={2}>
                                <Link to="/furnitureAndLighting/deskTableLamps" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img style={{
                                        borderRadius: '50%',
                                        margin: '10px '
                                    }} src={img5} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '20px',
                                        margin: '10px'
                                    }}>Desk & Table lamps</h5>
                                </Link>

                            </Col>
                            <Col md={2}>
                                <Link to="/furnitureAndLighting/lampShades" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img style={{
                                        borderRadius: '50%',
                                        margin: '10px '
                                    }} src={img6} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '20px',
                                        margin: '10px'
                                    }}>Lamp Shades</h5>
                                </Link>
                            </Col>
                            <img style={{ margin: '20px 0' }} src={img7} alt="" className='img-fluid' />
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    )
}

export default ShopLighting