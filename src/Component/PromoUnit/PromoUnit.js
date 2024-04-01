import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './PromoUnit.css'

const PromoUnit = () => {
    return (
        <div className='promoUnit'>
            <Container fluid>
                <Row style={{ padding: '15px 0' }}>
                    <Col className='promoUnit1' md={12} xs={12} lg={3}>
                        <Link to="">
                            <i className="fas fa-truck"></i> Free Delivery Over $49.95* <span>With 1 Hour Time Slot</span>
                        </Link>
                    </Col>
                    <Col className='promoUnit2' md={3} xs={12}>
                        <Link to="">
                            <i className="fas fa-check" style={{ position: 'initial' }}></i> Lowest Prices <span>Checked Daily</span>
                        </Link>
                    </Col>
                    <Col className='promoUnit3' md={3} xs={12}>
                        <Link to="">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            4.8/5 Customer Rating
                        </Link>
                    </Col>
                    <Col className='promoUnit4' md={3} xs={12}>
                        <Link to="">
                            <i className="fas fa-shopping-cart"></i> FREE Collect In Warehouse (Birmingham)
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PromoUnit