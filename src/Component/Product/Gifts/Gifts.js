import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import Newsletter from '../../Newsletter/Newsletter'
import PromoUnit from '../../PromoUnit/PromoUnit'

import img1 from '../../../img/Gift/1.webp'
import img2 from '../../../img/Gift/2.webp'
import img3 from '../../../img/Gift/3.webp'
import img4 from '../../../img/Gift/4.webp'
import img5 from '../../../img/Gift/5.webp'
import img6 from '../../../img/Gift/6.webp'

const Gifts = () => {
    return (
        <>
            <Helmet>
                <title>Gifts</title>
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
                    }}>Gifts</h3>
                    <hr />
                    <Col md={2} xs={12}>
                        <div className='mainRoute' style={{
                            textAlign: 'start',
                            padding: '10px 0'
                        }} >
                            <Link to="/home"> Homepage </Link> /
                            <Link to="/Gifts"> Gifts </Link>
                            <hr />
                        </div>
                        <h6 style={{ textAlign: 'start' }}>Gifts By Recipient</h6>
                        <div className="filterItem">
                            <Link to="/gifts/GiftsForHer">Gifts for Her</Link><br />
                            <Link to="/gifts/GiftsForHim">Gifts for Him</Link><br />
                            <Link to="/gifts/GiftsForKids">Gifts for Kids</Link><br />
                            <Link to="/gifts/GiftsForCouples">Gifts for Couples</Link><br />
                            <Link to="/gifts/GiftsForBabies">Gifts for Babies</Link><br />
                            <Link to="/gifts/GiftsForTeenagers">Gifts for Teenagers</Link><br />
                            <Link to="/gifts/GiftsForPets">Gifts for Pets</Link><br />
                            <Link to="/gifts/GiftsForGrandparents">Gifts for Grandparents</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Gifts by Price</h6>
                        <div className="filterItem">
                            <Link to="/gifts/GiftsUnder20">Gifts under $20</Link><br />
                            <Link to="/gifts/GiftsUnder50">Gifts under $50</Link><br />
                            <Link to="/gifts/GiftsUnder100">Gifts under $100</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Shop by Occasion</h6>
                        <div className="filterItem">
                            <Link to="/gifts/Birthday">Birthday</Link><br />
                            <Link to="/gifts/Wedding">Wedding</Link><br />
                            <Link to="/gifts/NewHome">New Home</Link><br />
                            <Link to="/gifts/Anniversary">Anniversary</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Food & Drink Gifts</h6>
                        <div className="filterItem">
                            <Link to="/gifts/ViewAllGiftFoodDrink">View All Gift Food & Drink</Link><br />
                            <Link to="/gifts/GiftsForGinLovers">Gifts for Gin Lovers</Link><br />
                            <Link to="/gifts/CakesBiscuits">Cakes & Biscuits</Link><br />
                            <Link to="/gifts/SweetsFudge">Sweets & Fudge</Link><br />
                            <Link to="/gifts/Hampers">Hampers</Link><br />
                            <Link to="/gifts/Chocolate">Chocolate</Link><br />
                            <Link to="/gifts/Alcohol">Alcohol</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Popular Gifts</h6>
                        <div className="filterItem">
                            <Link to="/gifts/BeautyFragranceGifts">Beauty & Fragrance Gifts</Link><br />
                            <Link to="/gifts/GamesAndPuzzles">Games and Puzzles</Link><br />
                            <Link to="/gifts/CandlesHomeFragrance">Candles & Home Fragrance</Link><br />
                            <Link to="/gifts/CookingBaking">Cooking & Baking </Link><br />
                            <Link to="/gifts/Gardening">Gardening </Link><br />
                            <Link to="/gifts/GiftWrapPartyShop">Gift Wrap & Party Shop</Link><br />
                            <Link to="/sportAndLeisure/Stationery">Stationery</Link><br />
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
                        <Row>
                            <Col md={6}>

                                <Link to="/gifts/GiftsForHer" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img src={img5} alt="" className='img-fluid' />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}>Discover inspiring, thoughtful gifts for all occasions</h5>
                                    <p><u>Top Gifts for Her</u></p>
                                </Link>
                            </Col>
                            <Col md={6}>
                                <Link to="/gifts/GiftsForHim" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img src={img6} alt="" className='img-fluid' />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}>From fashion to tech, spoil him with the perfect present</h5>
                                    <p><u>Top Gifts for Him</u></p>
                                </Link>
                            </Col>

                        </Row>
                        <hr />
                        <Row md={12} style={{
                            margin: '50px',

                        }}>
                            <h2 style={{
                                marginBottom: '50px',
                                color: '#696969',
                                fontWeight: '700',
                                fontSize: '24px',
                                letterSpacing: '2px'
                            }}>GIVE THEM SOMETHING THEY’LL LOVE</h2>
                            <Col md={3}>
                                <Link to="/gifts/ViewAllGiftFoodDrink" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img src={img1} alt="" className="img-fluid" />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}>GIFT FOOD</h5>
                                </Link>

                            </Col>
                            <Col md={3}>
                                <Link to="/gifts/LuxuryGifts" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img src={img2} alt="" className="img-fluid" />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}>LUXURY GIFT</h5>
                                </Link>

                            </Col>
                            <Col md={3}>
                                <Link to="/gifts/Wedding" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img src={img3} alt="" className="img-fluid" />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}>WEDDING GIFT</h5>
                                </Link>

                            </Col>
                            <Col md={3}>
                                <Link to="/gifts/SweetsFudge" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img src={img4} alt="" className="img-fluid" />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}>
                                        PERSONALISED GIFTS</h5>
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

export default Gifts