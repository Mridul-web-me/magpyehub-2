import React from 'react'
import './About.css'
import logo from '../../img/logo.jpg'

const About = () => {
    return (
        <div className='about'>
            <div className="container-fluid" >
                <div className="row">
                    <div className="col-md-6" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <img src={logo} alt="" className='img-fluid' width="500px" />
                    </div>
                    <div className="col-md-6" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <div>
                            <h2>Welcome to Magpyehub Online</h2>
                            <p style={{
                                textAlign: 'justify'
                            }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellat accusamus tempora facere ea aliquid dolor adipisci commodi nihil itaque culpa quas saepe fuga, atque ipsam qui, non placeat ex! Delectus numquam architecto ut repellat, obcaecati expedita perspiciatis tempora. Fugit ullam, non tenetur corrupti doloremque excepturi tempora dignissimos voluptatem temporibus?</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About
