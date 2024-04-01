import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'


const Footer = () => {
    let mridul = 'https://mridul-web.netlify.app'
    return (
        <div className='footer'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 col-sm-4">
                        <h5 style={{ fontSize: '17px' }}>HELP & SUPPORT</h5>
                        <div style={{ fontSize: '14px' }}>
                            <li><Link style={{ color: '#606060', fontFamily: 'lato, sans-serif' }} to="/">Request Appointment</Link></li>
                            <li><Link style={{ color: '#606060', fontFamily: 'lato, sans-serif' }} to="/">Get In Touch</Link></li>
                            <li><Link style={{ color: '#606060', fontFamily: 'lato, sans-serif' }} to="/">Request a Callback</Link></li>
                            <li><Link style={{ color: '#606060', fontFamily: 'lato, sans-serif' }} to="/">Help Centre</Link></li>
                            <li><Link style={{ color: '#606060', fontFamily: 'lato, sans-serif' }} to="/">Site Map</Link></li>
                            <li><Link style={{ color: '#606060', fontFamily: 'lato, sans-serif' }} to="/">Covid-19 Update</Link></li>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4">
                        <h5 style={{ fontSize: '17px' }}>PRODUCTS</h5>
                        <div style={{ fontSize: '14px' }}>
                            <li><Link style={{ color: '#606060', fontFamily: 'lato, sans-serif' }} to="">Store & Warehouse Locator</Link></li>
                            <li><Link style={{ color: '#606060', fontFamily: 'lato, sans-serif' }} to="">Delivery & Collect-In-Warehouse</Link></li>
                            <li><Link style={{ color: '#606060', fontFamily: 'lato, sans-serif' }} to="">Returns & Refunds</Link></li>
                            <li><Link style={{ color: '#606060', fontFamily: 'lato, sans-serif' }} to="">Buyer Guides</Link></li>
                            <li><Link style={{ color: '#606060', fontFamily: 'lato, sans-serif' }} to="">Ask For A Quote</Link></li>
                            <li><Link style={{ color: '#606060', fontFamily: 'lato, sans-serif' }} to="">Redeem Your Quote</Link></li>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-4">
                        <h5 style={{ fontSize: '17px' }}>SERVICES</h5>
                        <div style={{ fontSize: '14px' }}>
                            <li><Link style={{ color: '#606060', fontFamily: 'lato, sans-serif' }} to="">Price Match</Link></li>
                            <li><Link style={{ color: '#606060', fontFamily: 'lato, sans-serif' }} to="">Payment Options</Link></li>
                            <li><Link style={{ color: '#606060', fontFamily: 'lato, sans-serif' }} to="">Track Your Order</Link></li>
                            <li><Link style={{ color: '#606060', fontFamily: 'lato, sans-serif' }} to="">Customer Reviews</Link></li>
                            <li><Link style={{ color: '#606060', fontFamily: 'lato, sans-serif' }} to="">Personal Consultation</Link></li>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <h5 style={{ fontSize: '17px' }}>ABOUT</h5>
                        <div style={{ fontSize: '14px' }}>
                            <li><Link style={{ color: '#606060', fontFamily: 'lato, sans-serif' }} to="">About Us</Link></li>
                            <li><Link style={{ color: '#606060', fontFamily: 'lato, sans-serif' }} to="">Terms & Conditions</Link></li>
                            <li><Link style={{ color: '#606060', fontFamily: 'lato, sans-serif' }} to="">Cookie Policy</Link></li>
                            <li><Link style={{ color: '#606060', fontFamily: 'lato, sans-serif' }} to="">Privacy Policy</Link></li>
                            <li><Link style={{ color: '#606060', fontFamily: 'lato, sans-serif' }} to="">BabyBaby Society</Link></li>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h5 style={{ fontSize: '17px' }}>CONTACT US</h5>
                        <div style={{ fontSize: '14px' }}>
                            <li><Link style={{ color: '#606060', fontFamily: 'lato, sans-serif' }} to="">Mon - Sat: 9am - 5pm</Link></li>
                            <li><Link style={{ color: '#606060', fontFamily: 'lato, sans-serif' }} to="">Sun: Closed</Link></li>
                            <li><Link style={{ color: '#606060', fontFamily: 'lato, sans-serif' }} to="">E: info@magpyehub.com</Link></li>
                            <li><Link style={{ color: '#606060', fontFamily: 'lato, sans-serif' }} to="">T: 0800 1 223 023</Link></li>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom" >
                    <p style={{ color: '#606060', fontFamily: 'lato, sans-serif' }}> <i className="far fa-copyright"></i>2022 magpyehub.com All Rights Reserved.</p>
                    <p style={{ color: '#606060', fontFamily: 'lato, sans-serif' }}>Created By <a href={mridul} target="_blank">Mridul</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer
