import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllFavProduct = ({ product, handleAddToCart }) => {
    const { _id, title, img, price } = product;
    return (
        <>

            <Col className="productCard">
                <Card>
                    <Card.Img className='img-fluid' variant="top" style={{ height: '270px' }} src={img} height="300px" />
                    <Card.Body>
                        <Link to={`/details/${_id}`} style={{
                            textDecoration: 'none',
                            color: '#303030'
                        }}>
                            <Card.Title>{title}</Card.Title>
                        </Link>
                        <Card.Title>
                            $ {price}
                        </Card.Title>
                        <div className='groupButton'>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-evenly',
                                alignItems: 'center',
                            }}>
                                <Button onClick={() => handleAddToCart(product)} type='button' style={{
                                    width: '100px',
                                    background: '#0091c0',
                                    border: '1px solid #0091c0'
                                }} >Buy</Button>
                                <Link to={`/details/${_id}`}>
                                    <Button variant="outline-primary" style={{
                                        width: '100px',
                                        background: '#fff',
                                        border: '1px solid #0091c0',
                                        color: '#0091c0'
                                    }}>View</Button>
                                </Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default AllFavProduct;
