import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Newsletter from '../Newsletter/Newsletter'

const PaymentOptionDetails = () => {
    return (
        <div>
            <Header></Header>
            <Container fluid style={{ textAlign: 'start', margin: '20px' }}>
                <h2 style={{ color: '#303030', fontSize: '20px' }}>PAYMENT OPTIONS</h2>
                <p style={{ color: '#606060' }}>
                    We are always looking for ways to ensure that our customers’ experience is as hassle-free as possible! That is why, here at BabyBabyOnline, we offer a variety of different payment methods to suit your needs.
                    <br /><br />
                    <strong>Credit/Debit Card</strong> – We accept all major credit/debit cards.
                    <br /><br />
                    <strong>PayPal</strong> – Payment for your order can be made via your PayPal account.
                    <br /><br />
                    <strong>BAC’s Bank Transfer</strong> - Full payment for your order can be paid via BAC’s when the payment method ‘Cheque or BAC’s’ has been selected. Payment will need to be sent to our account using your order number as the payment reference.
                    <br /><br />
                    <strong>PayPal Pay in 3</strong> – Make one payment of 33% of your order value when placing your order, then pay the rest in two interest-free monthly payments. This option is available on orders from $45 to $2000. You can easily apply for this option and a decision is made instantly.
                    <br /><br />
                    <strong>Flexi-Pay</strong> – Recurring payments can be made to our account via BAC’s Bank Transfer, as and when you are able to. You can do this by placing your order as normal and selecting ‘Cheque or BAC’s as the payment method. We ask all of customers to pay a deposit of 20% of your total value, to secure your order.
                    <br /><br />
                    The minimum order value to qualify for Flexi-Pay is $350.00.
                    <br /><br />
                    Once the deposit has been paid, you can pay the remaining balance in flexible instalments via BAC’s Bank Transfer, PayPal or alternatively, we can accept Credit/Debit card payments in store. All subsequent payments must be greater than $50.00.
                    <br /><br />
                    Once the full balance has been paid, please contact us and a member of our Sales Team will be able to schedule a delivery date for you.
                    <br /><br />
                    Please note, this system excludes all sales items and cannot be used in conjunction with any promotional offers. It is also applied at the point of order, any reductions in price, sale or clearance discounts cannot be applied retrospectively
                    <br /><br />
                    Need help with anything?
                    <br /><br />
                    Should you have any further queries, please do not hesitate to contact our Sales Team. You can contact us on 0800 1223 023, Monday to Saturday, between 9am – 5pm. Alternatively, you can contact us via email at magpyehub@gmail.com
                </p>
            </Container>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    )
}

export default PaymentOptionDetails