import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import Newsletter from '../../Newsletter/Newsletter'
import PromoUnit from '../../PromoUnit/PromoUnit'

import img1 from '../../../img/Beauty/1.webp'
import img2 from '../../../img/Beauty/2.webp'
import img3 from '../../../img/Beauty/3.jpg'
import img4 from '../../../img/Beauty/4.jpg'
import img5 from '../../../img/Beauty/5.webp'
import img6 from '../../../img/Beauty/6.webp'
import img7 from '../../../img/Beauty/7.webp'
import img8 from '../../../img/Beauty/8.webp'
import img9 from '../../../img/Beauty/9.jpg'
import img10 from '../../../img/Beauty/10.webp'
import img11 from '../../../img/Beauty/11.webp'

const Beauty = () => {
    return (
        <>
            <Helmet>
                <title>Beauty</title>
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
                    }}>Beauty</h3>
                    <hr />
                    <Col md={2} xs={12}>
                        <div className='mainRoute' style={{
                            textAlign: 'start',
                            padding: '10px 0'
                        }} >
                            <Link to="/home"> Homepage </Link> /
                            <Link to="/beauty"> Beauty </Link>
                            <hr />
                        </div>
                        <h6 style={{ textAlign: 'start' }}>Top Brands</h6>
                        <div className="filterItem">
                            <Link to="/beauty/theOrdinary">The Ordinary</Link> <br />
                            <Link to="/beauty/CHANEL">CHANEL</Link> <br />
                            <Link to="/beauty/CharlotteTilbury">Charlotte Tilbury</Link> <br />
                            <Link to="/beauty/Clarins">Clarins</Link> <br />
                            <Link to="/beauty/Clinique">Clinique</Link> <br />
                            <Link to="/beauty/DIOR">DIOR</Link> <br />
                            <Link to="/beauty/JoMaloneLondon">Jo Malone London</Link> <br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Makeup</h6>
                        <div className="filterItem">
                            <Link to="/beauty/viewallMakeup">View all Makeup</Link><br />
                            <Link to="/beauty/foundations">Foundations</Link><br />
                            <Link to="/beauty/concealers">Concealers</Link><br />
                            <Link to="/beauty/eyeshadows">Eyeshadows</Link><br />
                            <Link to="/beauty/mascaras">Mascaras</Link><br />
                            <Link to="/beauty/lipsticks">Lipsticks</Link><br />
                            <Link to="/beauty/nailPolish">Nail Polish</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Fragrance</h6>
                        <div className="filterItem">
                            <Link to="/beauty/womensPerfume">Women's Perfume</Link><br />
                            <Link to="/beauty/perfumeGiftSets">Perfume Gift Sets</Link><br />
                            <Link to="/beauty/mensAftershave">Men's Aftershave</Link><br />
                            <Link to="/beauty/aftershaveGiftSets">Aftershave Gift Sets</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Skin & Body Care</h6>
                        <div className="filterItem">
                            <Link to="/beauty/cleansers">Cleansers</Link><br />
                            <Link to="/beauty/moisturisers">Moisturisers</Link><br />
                            <Link to="/beauty/bathsShower">Baths & Shower</Link><br />
                            <Link to="/beauty/bodyCare">Body Care</Link><br />
                            <Link to="/beauty/lipBalmCare">Lip Balm & Care</Link><br />
                            <Link to="/beauty/handFootCare">Hand & Foot Care</Link><br />
                            <Link to="/beauty/skinCareTreatments">Skin Care & Treatments</Link><br />
                            <Link to="/beauty/sunCreamAfterSun">Sun Cream & After Sun</Link><br />
                            <Link to="/beauty/menGrooming">Men's Grooming</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Hair Care & Styling</h6>
                        <div className="filterItem">
                            <Link to="/beauty/hairCare">Hair Care</Link><br />
                            <Link to="/beauty/shampoo">Shampoo</Link><br />
                            <Link to="/beauty/conditioner">Conditioner</Link><br />
                            <Link to="/beauty/hairTreatments">Hair Treatments</Link><br />
                            <Link to="/beauty/hairStylingProducts">Hair Styling Products</Link><br />
                            <Link to="/beauty/hairBrushes">Hair Brushes</Link><br />
                            <Link to="/beauty/electricalHairBeauty">Electrical Hair & Beauty</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Inspire Me</h6>
                        <div className="filterItem">
                            <Link to="/beauty/Offers">Offers</Link><br />
                            <Link to="/beauty/NewArrivals">New Arrivals</Link><br />
                            <Link to="/beauty/VeganBeauty">Vegan Beauty</Link><br />
                            <Link to="/beauty/Wellness">Wellness</Link><br />
                            <Link to="/beauty/GiftSets">Gift Sets</Link><br />
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
                                <Link to="/beauty/AToZBrands" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img style={{
                                        borderRadius: '50%'
                                    }} src={img1} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}>UOMA</h5>
                                </Link>

                            </Col>
                            <Col md={2}>
                                <Link to="/beauty/viewallMakeup" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img style={{
                                        borderRadius: '50%'
                                    }} src={img2} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}>MAKE UP</h5>
                                </Link>

                            </Col>
                            <Col md={2}>
                                <Link to="/beauty/skinCareTreatments" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img style={{
                                        borderRadius: '50%'
                                    }} src={img3} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}>SKINCARE</h5>
                                </Link>

                            </Col>
                            <Col md={2}>
                                <Link to="/beauty/womensPerfume" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img style={{
                                        borderRadius: '50%'
                                    }} src={img4} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}>WOMEN'S PERFUME</h5>
                                </Link>

                            </Col>
                            <Col md={2}>

                                <Link to="/beauty/mensAftershave" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img style={{
                                        borderRadius: '50%'
                                    }} src={img5} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}>MEN'S AFTERSHAVE</h5>
                                </Link>
                            </Col>
                            <Col md={2}>
                                <Link to="/beauty/NewAndExclusiveClarinsExtraordinaire" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img style={{
                                        borderRadius: '50%'
                                    }} src={img6} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}>NEW IN</h5>
                                </Link>

                            </Col>

                        </Row>
                        <Row style={{ margin: '50px 0' }}>
                            <Col md={6} xs={12}>
                                <img src={img7} alt="" className='img-fluid' style={{ margin: ' 50px 0' }} />

                                <h5> YVES SAINT LAURENT</h5>
                                <p>Let’s face it. Beauty looks different, and your skin is your signature. Step into the spotlight. Bare your truth proudly. Stay NU. Discover Bare Look Skin Tint</p>
                            </Col>
                            <Col md={6} xs={12}>
                                <img src={img8} alt="" className='img-fluid' style={{ margin: ' 50px 0' }} />
                                <h5>INTRODUCING UOMA BEAUTY</h5>
                                <p> Meet the rebellious, innovative & inclusive new beauty brand created for all. Beauty comes in every colour and all are welcome to the beautiful Uoma tribe</p>
                            </Col>
                            <hr />
                        </Row>

                        <Row>
                            <Col md={4} xs={12}>
                                <img src={img9} alt="" className='img-fluid' />

                            </Col>
                            <Col md={4} xs={12}>
                                <img src={img10} alt="" className='img-fluid' />

                            </Col>
                            <Col md={4} xs={12}>
                                <img src={img11} alt="" className='img-fluid' />

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

export default Beauty