import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import Newsletter from '../../Newsletter/Newsletter'
import PromoUnit from '../../PromoUnit/PromoUnit'
import img1 from '../../../img/Women/1.webp'
import img2 from '../../../img/Women/2.webp'
import img3 from '../../../img/Women/3.webp'
import img4 from '../../../img/Women/4.webp'
import img5 from '../../../img/Women/5.webp'
import img6 from '../../../img/Women/6.webp'
import img7 from '../../../img/Women/7.webp'
import img8 from '../../../img/Women/8.webp'
import img9 from '../../../img/Women/9.jpg'
import img10 from '../../../img/Women/10.webp'
const Women = () => {
    return (
        <>
            <Helmet>
                <title>Women</title>
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
                    }}>Women</h3>
                    <hr />
                    <Col md={2} xs={12}>
                        <div className='mainRoute' style={{
                            textAlign: 'start',
                            padding: '10px 0'
                        }} >
                            <Link to="/home"> Homepage </Link> /
                            <Link to="/women"> Women </Link>
                            <hr />
                        </div>
                        <h6 style={{ textAlign: 'start' }}>Clothing</h6>
                        <div className="filterItem">
                            <Link to="/women/dresses">Dresses</Link> <br />
                            <Link to="/women/jeans">Jeans</Link> <br />
                            <Link to="/women/shirtsTops">Shirts & Tops</Link> <br />
                            <Link to="/women/shorts">Shorts</Link> <br />
                            <Link to="/women/skirts">Skirts</Link> <br />
                            <Link to="/women/sportsClothes ">Sports & Clothes  </Link> <br />
                            <Link to="/women/swimwearBeachwear ">Swimwear Beachwear  </Link> <br />
                            <Link to="/women/womenTrousers">Trousers</Link> <br />
                            <Link to="/women/leggings">Leggings</Link> <br />
                            <Link to="/women/plusSize">Plus Size</Link> <br />
                            <Link to="/women/maternityClothes ">Maternity Clothes</Link> <br />
                            <Link to="/women/cashmere">Cashmere</Link> <br />
                            <Link to="/women/coatsJackets ">Coats & Jackets</Link> <br />
                            <Link to="/women/jumpersKnitwear ">Jumpers & Knitwear</Link> <br />
                            <Link to="/women/jumpsuits ">Jumpsuits</Link> <br />
                            <Link to="/women/linen">Linen</Link> <br />
                            <Link to="/women/loungewear ">Loungewear</Link> <br />
                            <Link to="/women/petite ">Petite</Link> <br />
                            <Link to="/women/occasionwear ">Occasionwear</Link> <br />
                            <Link to="/women/weddingBoutique ">Wedding Boutique</Link> <br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Footwear</h6>
                        <div className="filterItem">
                            <Link to="/women/womenShoes">Shoes</Link><br />
                            <Link to="/women/womenSandals">Sandals</Link><br />
                            <Link to="/women/womenSlippers">Slippers</Link><br />
                            <Link to="/women/womenTrainersAndPlimsoles">Trainers & Plimsoles</Link><br />
                            <Link to="/women/womenCourtShoes">Court Shoes</Link><br />
                            <Link to="/women/womenBoots">Boots</Link><br />
                            <Link to="/women/womenPumps">Court Pumps</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Lingerie, Nightwear & Hosiery</h6>
                        <div className="filterItem">
                            <Link to="/women/brasSportsBras">Bras & Sports Bras</Link><br />
                            <Link to="/women/Nightwear">Nightwear</Link><br />
                            <Link to="/women/socks">Socks</Link><br />
                            <Link to="/women/Knickers">Knickers</Link><br />
                            <Link to="/women/tights">Tights</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Accessories</h6>
                        <div className="filterItem">
                            <Link to="/women/womenHandbags">Handbags</Link> <br />
                            <Link to="/women/womenPurses">Purses</Link> <br />
                            <Link to="/women/womenBelts">Belts</Link> <br />
                            <Link to="/women/womenSunglasses">Sunglasses</Link> <br />
                            <Link to="/women/womenJewellery">Jewellery</Link> <br />
                            <Link to="/women/womenHats">Hats</Link> <br />
                            <Link to="/women/womenWatches">Watches</Link> <br />
                            <Link to="/women/womenHairAccessories">Hair Accessories</Link> <br />
                            <Link to="/women/womenOccasionHatsFascinators">Occasion Hats & Fascinators</Link> <br />
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
                                <Link to="/women/dresses" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img style={{
                                        borderRadius: '50%',
                                        margin: '10px '
                                    }} src={img1} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}> DRESSES</h5>
                                </Link>

                            </Col>
                            <Col md={2}>
                                <Link to="/women/shirtsTops" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img style={{
                                        borderRadius: '50%',
                                        margin: '10px '
                                    }} src={img2} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}> TOPS</h5>
                                </Link>

                            </Col>
                            <Col md={2}>
                                <Link to="/women/womenHatsGlovesScarves" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img style={{
                                        borderRadius: '50%',
                                        margin: '10px '
                                    }} src={img3} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}> NEW IN</h5>
                                </Link>

                            </Col>
                            <Col md={2}>
                                <Link to="/women/coatsJackets" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img style={{
                                        borderRadius: '50%',
                                        margin: '10px '
                                    }} src={img4} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}> COATS</h5>
                                </Link>

                            </Col>
                            <Col md={2}>

                                <Link to="/women/Nightwear" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img style={{
                                        borderRadius: '50%',
                                        margin: '10px '
                                    }} src={img5} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}> NIGHTWEAR</h5>
                                </Link>
                            </Col>
                            <Col md={2}>
                                <Link to="/women/womenHandbags" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img style={{
                                        borderRadius: '50%',
                                        margin: '10px '
                                    }} src={img6} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}>HANDBAGS</h5>
                                </Link>

                            </Col>

                        </Row>
                        <Row>
                            <hr />
                            <br />
                            <h4>GETAWAYS & HOLIDAYS</h4>
                            <br />
                            <Col md={3} xs={12}>
                                <Link to="/women/swimwearBeachwear" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img src={img7} alt="" className='img-fluid' />
                                    <h5>Shop Swimwear</h5>
                                </Link>
                            </Col>
                            <Col md={3} xs={12}>
                                <Link to="/women/shorts" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img src={img8} alt="" className='img-fluid' />
                                    <h5>Shop Summer Dresses</h5>
                                </Link>
                            </Col>
                            <Col md={3} xs={12}>
                                <Link to="/women/womenSandals" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img src={img9} alt="" className='img-fluid' />
                                    <h5>Shop Sandals</h5>
                                </Link>
                            </Col>
                            <Col md={3} xs={12}>
                                <Link to="/women/womenSuitcases" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img src={img10} alt="" className='img-fluid' />
                                    <h5>Shop Suitcases</h5>
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

export default Women