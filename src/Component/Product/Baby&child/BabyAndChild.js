import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import Newsletter from '../../Newsletter/Newsletter'
import PromoUnit from '../../PromoUnit/PromoUnit'
import img1 from '../../../img/BabyAndChild/1.webp'
import img2 from '../../../img/BabyAndChild/2.webp'
import img3 from '../../../img/BabyAndChild/3.webp'
import img4 from '../../../img/BabyAndChild/4.webp'
import img5 from '../../../img/BabyAndChild/5.webp'
import img6 from '../../../img/BabyAndChild/6.webp'
import img7 from '../../../img/BabyAndChild/7.webp'
import img8 from '../../../img/BabyAndChild/8.webp'
import img9 from '../../../img/BabyAndChild/9.webp'
import img10 from '../../../img/BabyAndChild/10.webp'

const BabyAndChild = () => {
    return (
        <>
            <Helmet>
                <title>Baby & Child</title>
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
                    }}>Baby & Child</h3>
                    <hr />
                    <Col md={2} xs={12}>
                        <div className='mainRoute' style={{
                            textAlign: 'start',
                            padding: '10px 0'
                        }} >
                            <Link to="/home"> Homepage </Link> /
                            <Link to="/BabyAndChild"> Baby & Child </Link>
                            <hr />
                        </div>
                        <h6 style={{ textAlign: 'start' }}>Baby Food & Milk</h6>
                        <div className="filterItem">
                            <Link to="/babyAndChild/BabyToddlerFood">Baby & Toddler Food</Link><br />
                            <Link to="/babyAndChild/BabyToddlerMilk">Baby & Toddler Milk</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Baby Home & Nursery</h6>
                        <div className="filterItem">
                            <Link to="/babyAndChild/sleeping">Sleeping</Link><br />
                            <Link to="/babyAndChild/bathingChanging">Bathing & Changing</Link><br />
                            <Link to="/babyAndChild/feedingWeaning">Feeding & Weaning</Link><br />
                            <Link to="/babyAndChild/nurseryFunitureFurnishings">Nursery Funiture & Furnishings</Link><br />
                            <Link to="/babyAndChild/safetyHealthcare">Safety & Healthcare</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Baby Clothes (0-4 years)</h6>
                        <div className="filterItem">
                            <Link to="/babyAndChild/babyToddlerclothes">Baby & Toddler clothes</Link><br />
                            <Link to="/babyAndChild/babyBoyClothes">Baby Boy Clothes</Link><br />
                            <Link to="/babyAndChild/babyGirlClothes">Baby Girl Clothes</Link><br />
                            <Link to="/babyAndChild/sleepsuitsBodysuits">Sleepsuits & Bodysuits</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Kids Clothing & Shoes</h6>
                        <div className="filterItem">
                            <li><Link to="/babyAndChild/AllGirlsclothes">All Girls clothes</Link></li>
                            <li><Link to="/babyAndChild/GirlsDresses">Girls Dresses</Link></li>
                            <li><Link to="/babyAndChild/GirlsShoes">Girls Shoes</Link></li>
                            <li><Link to="/babyAndChild/AllBoysClothes">All Boys Clothes</Link></li>
                            <li><Link to="/babyAndChild/BoysShorts ">Boys Shorts </Link></li>
                            <li><Link to="/babyAndChild/BoysShoes">Boys Shoes</Link></li>
                            <li><Link to="/babyAndChild/BoysTops">Boys Tops</Link></li>
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Kids Travel</h6>
                        <div className="filterItem">
                            <Link to="/babyAndChild/carSeats">Car Seats</Link><br />
                            <Link to="/babyAndChild/babyCarriers">Baby Carriers</Link><br />
                            <Link to="/babyAndChild/strollers">Strollers</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Kids Toys & Gifts</h6>
                        <div className="filterItem">
                            <Link to="/babyAndChild/Toys">Toys</Link><br />
                            <Link to="/babyAndChild/BabyPreschoolToys">Baby & preschool Toys</Link><br />
                            <Link to="/babyAndChild/KidsGamesPuzzles">Games & Puzzles</Link><br />
                            <Link to="/babyAndChild/LEGO">LEGO</Link><br />
                            <Link to="/babyAndChild/GiftsForBabiesKids">Gifts for Babies & Kids</Link><br />
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
                                <Link to="/babyAndChild/AllGirlsclothes" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img style={{
                                        borderRadius: '50%'
                                    }} src={img1} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}>GIRLS CLOTHES</h5>
                                </Link>

                            </Col>
                            <Col md={2}>
                                <Link to="/babyAndChild/AllBoysClothes" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img style={{
                                        borderRadius: '50%'
                                    }} src={img2} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}>BOYS CLOTHES</h5>
                                </Link>

                            </Col>
                            <Col md={2}>
                                <Link to="/babyAndChild/babyBoyClothes" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img style={{
                                        borderRadius: '50%'
                                    }} src={img3} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}>BABY CLOTHES</h5>
                                </Link>

                            </Col>
                            <Col md={2}>
                                <Link to="/babyAndChild/nurseryFunitureFurnishings" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img style={{
                                        borderRadius: '50%'
                                    }} src={img4} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}>NURSERY & TRAVEL</h5>
                                </Link>

                            </Col>
                            <Col md={2}>

                                <Link to="/babyAndChild/Toys" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img style={{
                                        borderRadius: '50%'
                                    }} src={img5} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}>TOYS</h5>
                                </Link>
                            </Col>
                            <Col md={2}>
                                <Link to="/babyAndChild/BabyToddlerFood" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img style={{
                                        borderRadius: '50%'
                                    }} src={img6} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}>BUYING GUIDES</h5>
                                </Link>

                            </Col>

                        </Row>
                        <Row style={{ margin: ' 50px 0' }}>
                            <Col md={6} xs={12}>
                                <img src={img7} alt="" className='img-fluid' />
                            </Col>
                            <Col md={6} xs={12}>
                                <img src={img8} alt="" className='img-fluid' />
                            </Col>
                            <Col md={6} xs={12}>
                                <img src={img9} alt="" className='img-fluid' />
                            </Col>
                            <Col md={6} xs={12}>
                                <img src={img10} alt="" className='img-fluid' />
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

export default BabyAndChild