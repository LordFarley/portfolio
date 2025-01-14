import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from './Assests/logo.png';
import foot1icon from './Assests/nav-icon1.png';
import foot2icon from './Assests/nav-icon2.png';
import foot3icon from './Assests/nav-icon3.png';


export const Footer = () =>{
    return(
        <footer className="footer">
            <Row className="align-items-center">
                <Col size={12} sm={6}>
                    <img src={logo} alt="logo" />
                </Col>
                <Col size={12} sm={6} className='text-center text-sm-end'>
                    <div className='social-icon'>
                        <a href='#'><img src={foot1icon} alt="icon" /></a>
                        <a href='#'><img src={foot2icon} alt="icon" /></a>
                        <a href='#'><img src={foot3icon} alt="icon" /></a>
                    </div>
                    <p>Copyright 2024. All Rights Reserved</p>
                </Col>
            </Row>
        </footer>
    );
};