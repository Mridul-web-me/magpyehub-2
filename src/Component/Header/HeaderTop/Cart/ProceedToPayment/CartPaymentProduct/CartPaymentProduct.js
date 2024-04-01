import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const CartPaymentProduct = ({ cart }) => {
    // const { totalCartQuantity, total, carts, } = useProduct({});
    const { _id, img, title, price, quantity } = cart;


    return (
        <div>
            <Row style={{

                borderBottom: '1px solid rgb(159 159 159)',
                margin: '10px 0'
            }}>
                <Col xs={6} md={2}>
                    {/* <img src={`data:image/jpg;base64,${img}`} alt="" width="100px" height="100px" /> */}
                    <img src={img} alt="" width="100px" height="100px" />
                </Col>
                <Col xs={6} md={4} style={{
                    textAlign: 'start'
                }}>
                    <Link style={{
                        color: '#303030', fontSize: '16px',
                        textDecoration: 'none'
                    }} to={`/details/${_id}`}>
                        <h5 style={{ fontSize: '16px' }}>{title}</h5>
                    </Link>
                    <p style={{ fontSize: '12px' }}>Product Code: {_id}</p>
                </Col>
                <Col xs={6} md={2}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    </div>
                </Col>
                <Col xs={6} md={2}>
                    <p>${price}</p>
                </Col>
                <Col xs={6} md={2}>
                    <p> ${price * quantity}</p>
                </Col>
            </Row>
        </div>
    )
}

export default CartPaymentProduct