import React from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './Banner.css'
import cover1 from '../../../img/slider/Cover1.jpeg'
import cover2 from '../../../img/slider/Cover2.jpeg'
import cover3 from '../../../img/slider/Cover3.jpeg'
import { Container } from 'react-bootstrap';

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,

    };
    return (
        <div className='banner'>
            <Container fluid>
                <Slider {...settings} style={{
                    bottom: '20px',
                }} >
                    <div>
                        <Link to='/'>
                            <img src={cover1} alt="" className='img-fluid' />
                        </Link>
                    </div>
                    <div>
                        <Link to='/'>
                            <img src={cover2} alt="" className='img-fluid' />
                        </Link>
                    </div>
                    <div>
                        <Link to='/'>
                            <img src={cover3} alt="" className='img-fluid' />
                        </Link>
                    </div>
                </Slider>
            </Container>
        </div>
    )
}

export default Banner
