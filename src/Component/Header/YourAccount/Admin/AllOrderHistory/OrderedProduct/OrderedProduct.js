import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const OrderedProduct = ({ product, orders }) => {
    return (
        <div>
            <Row style={{
                borderBottom: '1px solid rgb(159 159 159)',
                margin: '10px 0'
            }}>

                <Col md={6} xs={12}>
                    <Row>
                        <Col sm={6} xs={12} md={4}>
                            {/* <img src={`data:image/jpg;base64,${img}`} alt="" width="100px" height="100px" /> */}
                            <img src={product.img} alt="" width="100px" height="100px" />
                        </Col>
                        <Col sm={6} xs={12} md={8} style={{
                            textAlign: 'start'
                        }}>
                            <Link style={{
                                color: '#303030', fontSize: '16px',
                                textDecoration: 'none'
                            }} to={`/details/${product._id}`}>
                                <h5 style={{ fontSize: '16px' }}>{product.title}</h5>
                            </Link>
                            <p style={{ fontSize: '12px' }}>Product Code: {product._id}</p>
                        </Col>
                    </Row>
                </Col>

                <Col md={6}>
                    <Row>
                        <Col sm={12} xs={12} md={4}>
                            <div className='orderedQuantity'>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <h5 className='quantityTag'>Ordered Quantity: </h5>
                                    <input style={{ width: '50px', padding: ' 0 15px' }} type="text" value={product.quantity} />
                                    {/* <p>{quantity}</p> */}
                                    <div style={{
                                        display: 'flex', flexDirection: 'column', fontSize: '26px',
                                        border: '#f3f3f3',
                                    }}>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} xs={12} md={4} className="orderPrice">
                            <h5 className='priceTag'> Price: </h5>
                            <p> ${product.price}</p>
                        </Col>
                        <Col sm={12} xs={12} md={4} className="orderStatus">
                            <h5 className='statusTag'> Status: </h5>
                            <p>
                                {orders.status}
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default OrderedProduct