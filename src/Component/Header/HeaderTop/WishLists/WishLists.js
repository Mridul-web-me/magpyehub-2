import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import useProduct from '../../../../hooks/Product/useProduct';
import Footer from '../../../Footer/Footer';
import Newsletter from '../../../Newsletter/Newsletter';
import FavouriteProduct from '../../../Product/FavouriteProduct/FavouriteProduct';
import PromoUnit from '../../../PromoUnit/PromoUnit';
import Header from '../../Header';
import WishList from './WishList';

const WishLists = () => {
    const { wishLists, loading } = useProduct({});
    return (
        <>
            <Helmet>
                <title>Wish List</title>
                <meta name="description" content="This is Magpyehub Online Shop" />
            </Helmet>
            <Header></Header>
            <PromoUnit></PromoUnit>
            <Container fluid>
                {loading ? <div>
                    <Spinner animation="grow" variant="info" />
                    <Spinner animation="grow" variant="info" />
                </div> : wishLists.length ?
                    <>
                        <div style={{
                            textAlign: 'end'
                        }}>
                        </div>
                        <div className='py-5 bg-light'>
                            <div>
                                <Row xs={12} md={3} className="g-2">
                                    {
                                        wishLists.map((wishList) => <WishList
                                            key={wishList._id}
                                            wishList={wishList}
                                        ></WishList>)
                                    }
                                </Row>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div style={{
                            height: '50vh',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <div>
                                <h4>You currently have nothing in your Wish List</h4>
                                <p>Why not have a look at some of our best offers we've selected for you below:</p>
                            </div>
                        </div>
                        <FavouriteProduct></FavouriteProduct>
                    </>
                }
            </Container>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </>
    )
}

export default WishLists