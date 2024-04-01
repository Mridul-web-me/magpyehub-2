import React from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "./Brand.css";

import brand1 from '../../../img/Logo PNG/1.png'
import brand2 from '../../../img/Logo PNG/2.png'
import brand3 from '../../../img/Logo PNG/3.png'
import brand4 from '../../../img/Logo PNG/4.png'
import brand5 from '../../../img/Logo PNG/5.png'
import brand6 from '../../../img/Logo PNG/6.png'
import brand7 from '../../../img/Logo PNG/7.png'
import brand8 from '../../../img/Logo PNG/8.png'
// import brand9 from '../../../img/Logo PNG/9.png'
// import brand10 from '../../../img/Logo PNG/10.png'
// import brand11 from '../../../img/Logo PNG/11.png'


// import Swiper core and required modules
import SwiperCore, {
    Autoplay
} from 'swiper';
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

// install Swiper modules
SwiperCore.use([Autoplay]);



const Brand = () => {

    return (
        <>
            <Container fluid style={{ background: '#fff' }}>
                {/* <Swiper style={{
                    height: '30%',
                    margin: '40px 0'
                }} slidesPerView={1} spaceBetween={10}
                    autoplay={{
                        "delay": 1500,
                        "disableOnInteraction": false
                    }}
                    breakpoints={{
                        "640": {
                            "slidesPerView": 4,
                            "spaceBetween": 20
                        },
                        "768": {
                            "slidesPerView": 6,
                            "spaceBetween": 40
                        },
                        "1024": {
                            "slidesPerView": 8,
                            "spaceBetween": 50
                        }
                    }} className="mySwiper">
                    <SwiperSlide className="brandSlider">
                        <Link to="/brand/maxi-cosi">
                            <img src={brand1} alt="" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="brandSlider">
                        <Link to="/brand/britax">
                            <img src={brand2} alt="" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="brandSlider">
                        <Link to="/brand/levis">
                            <img src={brand3} alt="" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="brandSlider">
                        <Link to="/brand/aptamil">
                            <img src={brand4} alt="" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="brandSlider">
                        <Link to="/brand/baby-club">
                            <img src={brand5} alt="" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="brandSlider">
                        <Link to="/brand/phase-eight">
                            <img src={brand6} alt="" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="brandSlider">
                        <Link to="/brand/jole">
                            <img src={brand7} alt="" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="brandSlider">
                        <Link to="/brand/fitflop">
                            <img src={brand8} alt="" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="brandSlider">
                        <Link to="/brand/hipp">
                            <img src={brand9} alt="" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="brandSlider">
                        <Link to="/brand/gucci">
                            <img src={brand10} alt="" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="brandSlider">
                        <Link to="/brand/ted-baker">
                            <img src={brand11} alt="" />
                        </Link>
                    </SwiperSlide>
                </Swiper> */}
                <Row xs={1} sm={2} md={4} className="g-4" style={{ margin: '10px 0' }}>
                    <Col>
                        <Card>
                            <Link to="/brand/maxiCosi">
                                <Card.Img variant="top" src={brand1} className="brandImage" />
                            </Link>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Link to="/brand/britax">
                                <Card.Img variant="top" src={brand2} className="brandImage" />
                            </Link>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Link to="/brand/levis">
                                <Card.Img variant="top" src={brand3} className="brandImage" />
                            </Link>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Link to="/brand/aptamil">
                                <Card.Img variant="top" src={brand4} className="brandImage" />
                            </Link>
                        </Card>
                    </Col>
                </Row>
                <Row xs={1} sm={2} md={4} className="g-4" style={{ margin: '10px 0' }}>
                    <Col>
                        <Card>
                            <Link to="/brand/babyClub">
                                <Card.Img variant="top" src={brand5} className="brandImage" />
                            </Link>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Link to="/brand/phaseEight">
                                <Card.Img variant="top" src={brand6} className="brandImage" />
                            </Link>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Link to="/brand/jole">
                                <Card.Img variant="top" src={brand7} className="brandImage" />
                            </Link>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Link to="/brand/fitflop">
                                <Card.Img variant="top" src={brand8} className="brandImage" />
                            </Link>
                        </Card>
                    </Col>
                </Row>
                <hr />
            </Container>
            <hr />
        </>
    )
}

export default Brand
