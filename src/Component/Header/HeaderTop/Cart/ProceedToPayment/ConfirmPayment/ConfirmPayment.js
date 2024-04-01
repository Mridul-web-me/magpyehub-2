import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Payment from '../Payment/Payment';
import { Container } from 'react-bootstrap';
import useProduct from '../../../../../../hooks/Product/useProduct';
import Header from '../../../../Header';
import PromoUnit from '../../../../../PromoUnit/PromoUnit';
import Newsletter from '../../../../../Newsletter/Newsletter';
import Footer from '../../../../../Footer/Footer';


const stripePromise = loadStripe('pk_test_51KUuQEJYFu4RGWvKjw2LK5rIC9EAnyTQHbmzGNgGnb0XcOvh36utplRWpUtsK2EJAJEw0YExvwQxLNSv7hY3qdPh00BNUN9m3S');
const ConfirmPayment = () => {
    const { total, } = useProduct({});

    return (
        <div>
            <Header></Header>
            <PromoUnit></PromoUnit>
            <Container>
                <div >
                    {total && <Elements stripe={stripePromise}>
                        <Payment />
                    </Elements>}
                </div>
            </Container>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    )
}

export default ConfirmPayment