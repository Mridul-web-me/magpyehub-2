import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useProduct from '../../../../../../hooks/Product/useProduct';
import useAuth from '../../../../../../hooks/useAuth';
import { clearTheCart } from '../../../../../../fakeDB';

const Payment = ({ address: clientAddress }) => {
  const { total, carts, totalCartQuantity } = useProduct({});
  // const handleClose = () => setShow(false);
  // const [show, setShow] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [success, setSuccess] = useState('');
  const [processing, setProcessing] = useState(false);
  const { user } = useAuth();
  const { reset } = useForm();
  const { displayName, email, zip, state, city, phone, address, address1 } = clientAddress;

  // console.log(carts)

  useEffect(() => {
    fetch('https://magpyehub-server.onrender.com/create-payment-intent', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ total })
    })
      .then(res => res.json())
      .then(data => setClientSecret(data.clientSecret));
  }, [total]);
  const handleSubmit = async data => {
    data.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    });

    if (error) {
      setError(error.message);
      setSuccess('');
    } else {
      setError('');
      console.log(paymentMethod);
    }

    // Payment intent
    const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: user.displayName,
          email: useAuth.email
        }
      }
    });

    if (intentError) {
      setError(intentError.message);
      setSuccess('');
      setProcessing(false);
    } else {
      setError('');
      console.log(paymentIntent);
      setSuccess('Your Payment Processed Successfully');
      setProcessing(false);
    }
    const blogInfo = {
      fullName: displayName,
      email: email,
      address: address,
      address1: address1,
      phone: phone,
      city: city,
      zip: zip,
      state: state,
      order: carts,
      amount: paymentIntent.amount,
      created: paymentIntent.created,
      transaction: paymentIntent.client_secret.slice('_secret')[0],
      ProductUpdate: data.ProductUpdate,
      author: data.author,
      publishDate: new Date().toLocaleDateString(),
      status: 'Pending',
      expense: data.expense
    };
    fetch('https://magpyehub-server.onrender.com/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(blogInfo)
    })
      .then(res => res.json())
      .then(data => {
        if (!clientSecret || intentError) {
          return;
        } else {
          alert('Order Processed Successfully');
          clearTheCart();
          reset();
        }
      });
  };
  return (
    <div>
      <div className="container">
        <div className="product">
          <h4>Your Order {totalCartQuantity}</h4>
          <div>
            {carts.map(product => (
              <div key={product._id}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItem: 'center'
                  }}
                >
                  <h6 style={{ margin: '0 20px' }}>{product.title} </h6>
                  <p>${product.price}</p>
                </div>
              </div>
            ))}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItem: 'center'
              }}
            >
              <h5>Total Purchases</h5>
              <h5>$ {total}</h5>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItem: 'center'
              }}
            >
              <h2>Total</h2>
              <h4>$ {total}</h4>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4'
                  }
                },
                invalid: {
                  color: '#9e2146'
                }
              }
            }}
          />
          {processing ? (
            <div>
              <Spinner animation="grow" variant="info" />
              <Spinner animation="grow" variant="info" />
            </div>
          ) : (
            <Button variant="outline-success" type="submit" disabled={!stripe || success}>
              Pay & Place Order ${total}
            </Button>
          )}
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && (
          <>
            <p style={{ color: 'green' }}>{success}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Payment;
