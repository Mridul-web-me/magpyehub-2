import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import img1 from '../../img/payment1.jpg'
import img2 from '../../img/payment2.jpg'

const PaymentOption = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md={6} xs={12}>
                        <Link to='/payment-option'>
                            <img src={img1} alt="" className="img-fluid" />
                        </Link>
                    </Col>
                    <Col md={6} xs={12}>
                        <Link to='/payment-option'>
                            <img src={img2} alt="" className="img-fluid" />
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PaymentOption