import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useProduct from '../../../../hooks/Product/useProduct';
import Header from '../../Header'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from '../../../Footer/Footer';
import './PlaceOrder.css'
import PromoUnit from '../../../PromoUnit/PromoUnit';
import Newsletter from '../../../Newsletter/Newsletter';
import "swiper/css/bundle";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom';
import { Carousel } from 'react-responsive-carousel';


const PlaceOrder = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                console.log(data.img)
            });
    }, [])

    const { handleAddToCart, handleAddToWishList } = useProduct()

    return (
        <div className='placeOrder'>
            <Header></Header>
            <PromoUnit></PromoUnit>
            <Container>
                <Row>
                    <Col md={6} xs={12} >

                        <Carousel showArrows={true}>
                            <div>
                                <div>
                                    <InnerImageZoom zoomScale={2}
                                        width={750}
                                        height={500}
                                        zoomType='hover'
                                        zoomPreload={true}
                                        fullscreenOnMobile={true}
                                        src={product.img}>
                                        <img src={product.img} alt="" />
                                    </InnerImageZoom>
                                </div>
                            </div>
                            <div>
                                <InnerImageZoom zoomScale={2}
                                    width={750}
                                    height={500}
                                    zoomType='hover'
                                    zoomPreload={true}
                                    fullscreenOnMobile={true}
                                    src={product.img1} />
                            </div>
                            <div>
                                <InnerImageZoom zoomScale={2}
                                    width={750}
                                    height={500}
                                    zoomType='hover'
                                    zoomPreload={true}
                                    fullscreenOnMobile={true}
                                    src={product.img2} />
                            </div>
                            <div>
                                <InnerImageZoom zoomScale={2}
                                    width={750}
                                    height={500}
                                    zoomType='hover'
                                    zoomPreload={true}
                                    fullscreenOnMobile={true}
                                    src={product.img3} />
                            </div>
                        </Carousel>
                    </Col>

                    <Col xs={12} md={6} style={{
                        textAlign: 'start',
                        alignItems: 'center',
                        // margin: '0 20px'
                    }}>

                        <h4 style={{ color: '#606060' }}>{product.title}</h4>
                        <h5 style={{ fontSize: '15px', color: '#606060' }}>Code: {product._id}</h5>
                        <h5 style={{ fontSize: '36px', color: '#0091c0' }}> ${product.price}</h5>
                        <Row>
                            <Col md={6} xs={12}>
                                <Button style={{ width: '100%', margin: '5px 0' }} className='addToCartButton' variant="light" type='button' onClick={() => handleAddToCart(product)}>Add To Basket</Button>
                            </Col>
                            <Col md={6} xs={12}>
                                {<Button style={{ width: '100%', margin: '5px 0' }} className='addToWishListButton' type='button' variant='light' onClick={() => handleAddToWishList(product)}> <span><i className="fas fa-heart"></i> </span> Add To Wish List</Button>}
                            </Col>
                        </Row>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            margin: '10px'
                        }}>
                            <div style={{ margin: '10px' }}>
                                <Link to="/">
                                    <i className="fas fa-quote-left" style={{
                                        fontSize: '25px',
                                        background: '#0091ac',
                                        padding: '15px',
                                        borderRadius: '50%', color: '#f2f2f2'
                                    }} ></i>
                                </Link>
                            </div>
                            <div className='askQuote'>
                                <Link to='/' style={{ color: '#606060', textDecoration: 'none' }} > <span style={{ color: '#303030' }}>WANT A QUOTE?</span> <br />
                                    Send Your Quote List For A Personalised Quotation</Link>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            margin: '10px'
                        }}>
                            <div style={{ margin: '10px' }}>
                                <Link to="/">
                                    <i className="fas fa-house-user" style={{
                                        fontSize: '25px',
                                        background: '#0091ac',
                                        padding: '15px',
                                        borderRadius: '50%', color: '#f2f2f2'
                                    }} ></i>

                                </Link>
                            </div>
                            <div className='askQuote'>
                                <Link to='/' style={{ color: '#606060', textDecoration: 'none' }} > <span style={{ color: '#303030' }}>COLLECT IN WAREHOUSE (BIRMINGHAM)</span> <br />
                                    Store Details & Further Information</Link>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            margin: '10px'
                        }}>
                            <div style={{ margin: '10px' }}>
                                <Link to="/">
                                    <i className="fas fa-phone" style={{
                                        fontSize: '25px',
                                        background: '#0091ac',
                                        padding: '15px',
                                        borderRadius: '50%', color: '#f2f2f2'
                                    }} ></i>
                                </Link>
                            </div>
                            <div className='askQuote'>
                                <Link to='/' style={{ color: '#606060', textDecoration: 'none' }} > <span style={{ color: '#303030' }}>NEED ADVICE OR URGENT ORDER?</span> <br />
                                    Call 0800 1 223 023 or Request A Callback</Link>
                            </div>
                        </div>
                        <Row>
                            <Col md={6} xs={12}>
                                <Button style={{ width: '100%', margin: '5px 0' }} className='askAQuestion' variant="light" type='button' >ASK A QUESTION</Button>
                            </Col>
                            <Col md={6} xs={12}>
                                <Button style={{ width: '100%', margin: '5px 0' }} className='emailFriend' type='button' variant='light'> EMAIL A FRIEND</Button>
                            </Col>
                        </Row>

                    </Col>
                </Row>
                <div className="placeOrderSocialItem">
                    <h4>SHARE</h4>
                    <div className='socialIcon'>
                        <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                        <Link to="/"><i className="fab fa-twitter"></i></Link>
                        <Link to="/"><i className="fab fa-instagram"></i></Link>
                        <Link to="/"><i className="fab fa-pinterest-p"></i></Link>
                        <Link to="/"><i className="fab fa-youtube"></i></Link>
                    </div>
                </div>
            </Container>
            {/* <div style={{ width: '500px' }}>
                <ReactImageMagnify {...{

                    smallImage: {
                        alt: "Wristwatch by Ted Baker London",
                        isFluidWidth: true,
                        src: `${product.img}wristwatch_1033.jpg`,
                        // srcSet: this.srcSet,
                        sizes:
                            "(min-width: 800px) 33.5vw, (min-width: 415px) 50vw, 100vw"
                    },
                    largeImage: {
                        alt: "",
                        src: `${product.img}wristwatch_1200.jpg`,
                        width: 1200,
                        height: 1800

                    },
                    isHintEnabled: true,
                    hintTextMouse: "Click to Enlarge",
                    hintTextTouch: "Tap to Enlarge",
                    shouldHideHintAfterFirstActivation: false
                }} />
                <ImageZoom src={product.img} alt="A image to apply the ImageZoom plugin" zoom="200" />
            </div> */}
            <Container fluid>
                <Col>
                    <Tabs
                        defaultActiveKey="productDetails"
                        transition={true}
                        style={{
                            justifyContent: 'space-between'
                        }}
                    >
                        <Tab style={{ color: '#606060', fontSize: '16px', margin: '30px' }} eventKey="productDetails" title="PRODUCT DETAILS">
                            <p style={{ textAlign: 'justify' }}> <strong>Product Code: {product._id}</strong> </p>
                            <p style={{ textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: product.description }}></p>

                        </Tab>
                        <Tab style={{ color: '#606060', fontSize: '16px', margin: '30px' }} eventKey="DeliveryReturns" title="DELIVERY RETURNS">
                            <p style={{ textAlign: 'justify' }}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis ratione quis sed eveniet, alias consectetur rem maiores unde fugit magni non, voluptatem cum incidunt eius. Aspernatur, deleniti ab quisquam nihil odio alias exercitationem quo repellendus esse sint facere dignissimos unde nulla magni, quam pariatur porro? Voluptatibus nisi voluptatum, beatae deleniti iusto dolores nostrum praesentium, unde similique molestias quia excepturi obcaecati sint enim ab accusantium ipsum consequuntur perferendis possimus itaque. Reiciendis maiores eos, alias earum soluta sunt rem distinctio obcaecati quaerat dolorem eum odio possimus eveniet voluptas? Reprehenderit dolores labore eaque repudiandae, perspiciatis officia esse, inventore porro incidunt dolore sit accusantium?
                            </p>
                        </Tab>
                        <Tab style={{ color: '#606060', fontSize: '16px', margin: '30px' }} eventKey="PaymentSecurity" title="PAYMENT & SECURITY">
                            <p style={{ textAlign: 'justify', color: '#606060' }}> <span style={{
                                textDecoration: 'underline'
                            }}>Payment</span> <br /> <br />
                                All prices are shown in pounds sterling ($) and are inclusive of 20% VAT (where applicable). All prices at their current rates are correct at the time of listing. However, if a product is advertised at an incorrect price due to (a) typographical error or (b) supplier error, we reserve the right to refuse or cancel the order. In this instance, we will update you on your order status and provide a full refund, if required. <br /> <br />
                                For the majority of our products which are dispatched directly from our warehouse, the delivery fee is included in the order total at the payment page. However, for significantly larger goods such as furniture, they will be delivered directly to you from the manufacturer/suppliers, which may incur an additional charge at any point between order confirmation and despatch. We will notify you as soon as possible on such occasions.  <br />
                                We accept online payment by Credit/Debit card (Visa, Mastercard & Maestro), PayPal or BACs. <br /> <br /> <span style={{
                                    textDecoration: 'underline'
                                }}>Privacy and Cookies</span> <br /> <br />
                                Our website is secured using a Secure Sockets Layer (SSL) certificate, which ensures that your payment and personal information is encrypted for maximum security, and we take all measures to update our servers to comply with privacy regulations and consumer legislation.
                                <br /> <br />
                                Please see our <Link to="/" style={{ color: '#000' }}>Privacy Policy</Link> & <Link to='/' style={{ color: '#000' }}>Cookies Policy</Link> for further information regarding how your personal information is collected and used.
                            </p>
                        </Tab>
                        <Tab style={{ color: '#606060', fontSize: '16px', margin: '30px' }} eventKey="BuyNowPayLater" title="BUY NOW PAY LATER">
                            <p style={{ textAlign: 'justify', }}>
                                Here at Magpiehub we offer Card Payments, Paypal, BAC's and we now offer 2 more Payment Options. <br /> <br /> <br />
                                <strong>Option 1 - FlexiPay</strong>
                                <br /> <br />
                                When paying for your order in your basket, please select the 'Cheque/BACs' options on Payment Methods on the checkout page. Once complete, we ask of all customers to pay a 20% deposit, which will secure your order if the goods are in stock, if not they will be ordered in for you. The minimum order value to qualify for FlexiPay is <strong>$350.00</strong>. Please confirm with a member of our sales team when you'd like to receive your order. <br /> <br />
                                Once the deposit has cleared, you can pay the remaining balance in flexible installments of your choice through Cheque/BACs or in-store, between the order confirmation and your due date. All subsequent payments must be greater than $50.00. Once the full balance has been paid, give us a call and we can schedule delivery for you. <br /> <br />
                                Please note, this system excludes all sales items and cannot be used in conjunction with any promotional offers. It is also applied at the point of order, any reductions in price, sale or clearance discounts cannot be applied retrospectively. We will store your full order in our warehouse, free of charge until required.
                                <br /> <br /> <br />
                                <strong>Option 2 - PayPal Pay in 3 </strong> <br />
                                Pay in 3 equal, interest-free payments, free of charge. Payments are automatically charged every 30 days. Perfect for spreading the cost over time without the hassle or the cost.  Please note the minimum basket value must be $35 or greater and the maximum basket size is less than $1200.
                                <br /> <br /> <br />
                                Please note these options will ONLY show at checkout if they are applicable to your order.
                            </p>
                        </Tab>
                    </Tabs>
                </Col>
            </Container>
            <Newsletter></Newsletter>
            <Footer></Footer>

            <p>

            </p>
        </div>

    )
}

export default PlaceOrder
