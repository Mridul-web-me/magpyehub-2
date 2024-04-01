import React from 'react'
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FilterProduct = (props) => {
    const { _id, title, img1, price } = props.product;
    return (
        <div>
            {title ? <Col className="productCard">
                <Card>
                    <Card.Img className='img-fluid' variant="top" src={img1} />

                    <Card.Body>
                        <Link to={`/details/${_id}`} style={{
                            textDecoration: 'none',
                            color: '#303030'
                        }}>
                            <Card.Title>{title}</Card.Title>
                        </Link>
                        <Card.Text>
                            $ {price}
                        </Card.Text>
                        <div className='groupButton'>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-evenly',
                                alignItems: 'center',
                            }}>
                                <Button onClick={() => props.handleAddToCart(props.product)} type='button' style={{
                                    width: '100px',
                                    background: '#0091c0',
                                    border: '1px solid #0091c0'
                                }}>Buy</Button>
                                <Link to={`/details/${_id}`}>
                                    <Button style={{
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
                :
                <h2 style={{ margin: '50px' }}>No Product Available</h2>
            }
        </div>
    )
}

export default FilterProduct