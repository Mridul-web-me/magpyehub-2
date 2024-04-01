import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../../../../Footer/Footer'
import Header from '../../../../Header/Header'
import { Link } from 'react-router-dom'
import Newsletter from '../../../../Newsletter/Newsletter'
import PromoUnit from '../../../../PromoUnit/PromoUnit'
import { Helmet } from 'react-helmet'
import img1 from '../../../../../img/ShopBedding/1.webp'
import img2 from '../../../../../img/ShopBedding/2.webp'
import img3 from '../../../../../img/ShopBedding/3.webp'
import img4 from '../../../../../img/ShopBedding/4.webp'
import img5 from '../../../../../img/ShopBedding/5.webp'
import img6 from '../../../../../img/ShopBedding/6.webp'
import img7 from '../../../../../img/ShopBedding/7.webp'
import img8 from '../../../../../img/ShopBedding/8.webp'
const ShopBedding = () => {

    return (
        <>
            <Helmet>
                <title>Shop Bedding</title>
                <meta name="description" content="This is Magpyehub Online Shop" />
            </Helmet>
            <Header></Header>
            <PromoUnit></PromoUnit>
            <Container fluid >
                <Row>
                    <h3 style={{
                        textAlign: 'center',
                        color: '#303030', fontSize: '20px',
                        textTransform: 'uppercase',
                        marginBottom: '20px'
                    }}>Bedding</h3>
                    <hr />
                    <Col md={2} xs={12}>
                        <div className='mainRoute' style={{
                            textAlign: 'start',
                            padding: '10px 0'
                        }} >
                            <Link to="/home"> Homepage </Link> /
                            <Link to="/HomeAndGarden"> Bedding </Link>
                            <hr />
                        </div>
                        <h6 style={{ textAlign: 'start' }}>Bedding</h6>
                        <div className="filterItem">
                            <Link to="/homeAndGarden/duvetCovers">Duvet Covers</Link><br />
                            <Link to="/homeAndGarden/bedding">Bed Sheets</Link><br />
                            <Link to="/homeAndGarden/pillowCases">Pillow Cases</Link><br />
                            <Link to="/homeAndGarden/duvets">Duvets</Link><br />
                            <Link to="/homeAndGarden/pillows">Pillows</Link><br />
                            <Link to="/homeAndGarden/throwsBlanketsAndSpreads">Throws & Blankets</Link><br />
                            <Link to="/homeAndGarden/childrensBedding">Children's Bedding</Link><br />
                            <Link to="/homeAndGarden/shopBedding">Shop Bedding</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Cooking & Dining</h6>
                        <div className="filterItem">
                            <Link to="/homeAndGarden/cookwareBakeware">Cookware & Bakeware</Link><br />
                            <Link to="/homeAndGarden/cutlery">Tableware & Cutlery</Link><br />
                            <Link to="/homeAndGarden/glassesDrinkware">Glasses & Drinkware</Link><br />
                            <Link to="/homeAndGarden/potsPans">Pots & Pans</Link><br />
                            <Link to="/homeAndGarden/foodPreparation">Food Preparation</Link><br />
                            <Link to="/homeAndGarden/picnicware">Picnicware</Link><br />
                            <Link to="/homeAndGarden/kitchenUtensilsGadgets">Kitchen Utensils & Gadgets</Link><br />
                            <Link to="/homeAndGarden/kitchenBins">Kitchen Bins</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Home Décor & Accessories</h6>
                        <div className="filterItem">
                            <Link to="/homeAndGarden/homeAccessories">Home Accessories</Link><br />
                            <Link to="/homeAndGarden/cushions">Cushions & Bean Bags</Link><br />
                            <Link to="/homeAndGarden/candlesHomeFragrance">Candles & Home Fragrance</Link><br />
                            <Link to="/homeAndGarden/towels"> Towels</Link><br />
                            <Link to="/homeAndGarden/picturesArtFrames">Pictures, Art & Frames</Link><br />
                            <Link to="/homeAndGarden/mirrors"> Mirrors</Link><br />
                            <Link to="/homeAndGarden/rugs"> Rugs</Link><br />
                            <Link to="/homeAndGarden/storage"> Storage</Link><br />
                            <Link to="/homeAndGarden/wallpaperPaintDIY"> Wallpaper, Paint & DIY</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Curtains, Blinds & Floors</h6>
                        <div className="filterItem">
                            <Link to="/homeAndGarden/curtains">Curtains</Link><br />
                            <Link to="/homeAndGarden/madeToMeasureCurtains">Made to Measure Curtains</Link><br />
                            <Link to="/homeAndGarden/curtainPolesAccessories">Curtain Poles & Accessories</Link><br />
                            <Link to="/homeAndGarden/blinds"> Blinds</Link><br />
                            <Link to="/homeAndGarden/fabrics"> Fabrics</Link><br />
                            <Link to="/homeAndGarden/carpetsAndFlooring"> Carpets & Flooring</Link><br />
                        </div>
                        <hr />

                        <h6 style={{ textAlign: 'start' }}>Garden</h6>
                        <div className="filterItem">
                            <Link to="/homeAndGarden/gardenFurnitureSets">Garden Furniture Sets</Link><br />
                            <Link to="/homeAndGarden/gardenSeating">Garden Seating</Link><br />
                            <Link to="/homeAndGarden/gasBBQs">Gas BBQs</Link><br />
                            <Link to="/homeAndGarden/charcoalBBQs">Charcoal BBQs</Link><br />
                            <Link to="/homeAndGarden/pizzaOvens">Pizza Ovens</Link><br />
                            <Link to="/homeAndGarden/decorativeGardenAccessories"> Decorative Garden Accessories</Link><br />
                            <Link to="/homeAndGarden/outdoorlights"> Outdoor Lighting</Link><br />
                            <Link to="/homeAndGarden/parasolsAccessories"> Parasols & Accessories</Link><br />
                            <Link to="/homeAndGarden/shopGarden"> Shop Garden</Link><br />
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

                    <Col md={10} xs={12}>
                        <Row md={12}>
                            <Col md={2}>
                                <Link to="/homeAndGarden/duvetCovers" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img style={{
                                        borderRadius: '50%',
                                        margin: '10px '
                                    }} src={img1} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '20px'
                                    }}>Duvet Covers</h5>
                                </Link>

                            </Col>
                            <Col md={2}>
                                <Link to="/homeAndGarden/bedding" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img style={{
                                        borderRadius: '50%',
                                        margin: '10px '
                                    }} src={img2} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '20px'
                                    }}>
                                        Sheets</h5>
                                </Link>

                            </Col>
                            <Col md={2}>
                                <Link to="/homeAndGarden/duvets" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img style={{
                                        borderRadius: '50%',
                                        margin: '10px '
                                    }} src={img3} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '20px'
                                    }}>
                                        Duvets</h5>
                                </Link>

                            </Col>
                            <Col md={2}>
                                <Link to="/homeAndGarden/pillows" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img style={{
                                        borderRadius: '50%',
                                        margin: '10px '
                                    }} src={img4} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '20px'
                                    }}>
                                        Pillows</h5>
                                </Link>

                            </Col>
                            <Col md={2}>

                                <Link to="/furnitureAndLighting/mattresses" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img style={{
                                        borderRadius: '50%',
                                        margin: '10px '
                                    }} src={img5} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '20px'
                                    }}>Mattress</h5>
                                </Link>
                            </Col>
                            <Col md={2}>
                                <Link to="/homeAndGarden/childrensBedding" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img style={{
                                        borderRadius: '50%',
                                        margin: '10px '
                                    }} src={img6} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '20px'
                                    }}>
                                        Children's Bedding</h5>
                                </Link>

                            </Col>
                        </Row>
                        <Row>
                            <Col md={6} xs={12}>
                                <Link to="/homeAndGarden/duvets" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img src={img7} alt="" className='img-fluid' />
                                    <h3 style={{ fontWeight: 700, margin: '10px 0' }}>Don't forget your duvet</h3>
                                    <h5 style={{ margin: '20px' }}>

                                        Whether you find it hard to warm up at night, or you'd like to be a bit cooler, there's a tog rating and filling for you

                                    </h5>
                                    <h4><Link to="/homeAndGarden/duvets" style={{ color: 'black' }}>Shop Duvets</Link></h4>
                                </Link>
                            </Col>
                            <Col md={6} xs={12}>
                                <Link to="/homeAndGarden/bedding" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img src={img8} alt="" className='img-fluid' />
                                    <h3 style={{ fontWeight: 700, margin: '10px 0' }}>Treat yourself to hotel quality bed sheets</h3>
                                    <h5 style={{ margin: '20px' }}>

                                        Everyone loves that fresh sheet feeling, so why not make it even better with new super soft, high thread count linen

                                    </h5>
                                    <h4><Link to="/homeAndGarden/bedding" style={{ color: 'black' }}>Shop Bed Sheets</Link></h4>
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

export default ShopBedding