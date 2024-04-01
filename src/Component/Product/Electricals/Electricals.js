import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import Newsletter from '../../Newsletter/Newsletter'
import PromoUnit from '../../PromoUnit/PromoUnit'

import img1 from '../../../img/Electricals/1.webp'
import img2 from '../../../img/Electricals/2.webp'
import img3 from '../../../img/Electricals/3.webp'
import img4 from '../../../img/Electricals/4.webp'
import img5 from '../../../img/Electricals/5.webp'
import img6 from '../../../img/Electricals/6.webp'
import img7 from '../../../img/Electricals/7.webp'
import img8 from '../../../img/Electricals/8.webp'
import img9 from '../../../img/Electricals/9.webp'

const Electricals = () => {
    return (
        <>
            <Helmet>
                <title>Electricals</title>
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
                    }}>Electricals</h3>
                    <hr />
                    <Col md={2} xs={12}>
                        <div className='mainRoute' style={{
                            textAlign: 'start',
                            padding: '10px 0'
                        }} >
                            <Link to="/home"> Homepage </Link> /
                            <Link to="/Electricals"> Electricals </Link>
                            <hr />
                        </div>
                        <h6 style={{ textAlign: 'start' }}>Television & Audio</h6>
                        <div className="filterItem">
                            <Link to="/electricals/Television">Television</Link><br />
                            <Link to="/electricals/SoundbarsHomeCinema">Soundbars & Home Cinema</Link><br />
                            <Link to="/electricals/TVStandsWallMounts">TV Stands & Wall Mounts</Link><br />
                            <Link to="/electricals/TVStreamingDevices">TV Streaming Devices</Link><br />
                            <Link to="/electricals/SpeakersSoundSystems">Speakers & Sound Systems</Link><br />
                            <Link to="/electricals/Headphones">Headphones</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Computing & Gaming</h6>
                        <div className="filterItem">
                            <Link to="/electricals/IpadsTablets">Ipads & Tablets</Link><br />
                            <Link to="/electricals/LaptopsMacBooks">Laptops & MacBooks </Link><br />
                            <Link to="/electricals/PCsDesktopComputers">PCs & Desktop Computers</Link><br />
                            <Link to="/electricals/MonitorsProjectors">Monitors & Projectors</Link><br />
                            <Link to="/electricals/PrintersAccessories">Printers & Accessories</Link><br />
                            <Link to="/electricals/Gaming">Gaming</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Home Appliances</h6>
                        <div className="filterItem">
                            <Link to="/electricals/WashingMachines">Washing Machines</Link><br />
                            <Link to="/electricals/FridgeFreezers">Fridge Freezers</Link><br />
                            <Link to="/electricals/Dishwashers">Dishwashers</Link><br />
                            <Link to="/electricals/CookersOvens">Cookers & Ovens</Link><br />
                            <Link to="/electricals/Microwaves">Microwaves</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Kitchen Appliances & Vacuums</h6>
                        <div className="filterItem">
                            <Link to="/electricals/CoffeeMachines">Coffee Machines</Link><br />
                            <Link to="/electricals/Kettles">Kettles</Link><br />
                            <Link to="/electricals/Toasters">Toasters</Link><br />
                            <Link to="/electricals/VacuumCleaners">Vacuum Cleaners</Link><br />
                            <Link to="/electricals/FansCoolingPurifiers">Fans, Cooling & Purifiers</Link><br />
                            <Link to="/electricals/Ironing">Ironing</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Mobile, Cameras & Smart Tech</h6>
                        <div className="filterItem">
                            <Link to="/electricals/MobilePhonesAccessories">Mobile Phones & Accessories</Link><br />
                            <Link to="/electricals/CamerasCamcorders">Cameras & Camcorders</Link><br />
                            <Link to="/electricals/SmartFitnessWatches">Smart & Fitness Watches</Link><br />
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
                                <Link to="/electricals/Television" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img style={{
                                        borderRadius: '50%',
                                        margin: '10px '
                                    }} src={img1} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}>TELEVISIONS</h5>
                                </Link>

                            </Col>
                            <Col md={2}>
                                <Link to="/electricals/LaptopsMacBooks" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img style={{
                                        borderRadius: '50%',
                                        margin: '10px '
                                    }} src={img2} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}>LAPTOPS & MACBOOKS</h5>
                                </Link>

                            </Col>
                            <Col md={2}>
                                <Link to="/electricals/IpadsTablets" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img style={{
                                        borderRadius: '50%',
                                        margin: '10px '
                                    }} src={img3} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}>IPADS & TABLETS</h5>
                                </Link>

                            </Col>
                            <Col md={2}>
                                <Link to="/electricals/WashingMachines" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img style={{
                                        borderRadius: '50%',
                                        margin: '10px '
                                    }} src={img4} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}>WASHING MACHINES</h5>
                                </Link>

                            </Col>
                            <Col md={2}>

                                <Link to="/electricals/FridgeFreezers" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img style={{
                                        borderRadius: '50%',
                                        margin: '10px '
                                    }} src={img5} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}>FRIDGE FREEZERS</h5>
                                </Link>
                            </Col>
                            <Col md={2}>
                                <Link to="/electricals/MobilePhonesAccessories" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img style={{
                                        borderRadius: '50%',
                                        margin: '10px '
                                    }} src={img6} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}>MOBILE PHONES</h5>
                                </Link>

                            </Col>
                            <img src={img7} alt="" style={{ margin: ' 50px 0' }} />
                        </Row>
                        <Row>
                            <Col md={6} xs={12}>
                                <img src={img8} alt="" className='img-fluid' />
                            </Col>
                            <Col md={6} xs={12}>
                                <img src={img9} alt="" className='img-fluid' />
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

export default Electricals