import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {FaFacebookSquare, FaInstagram, FaLinkedin, FaMailBulk, FaMailchimp, FaPhone, FaVoicemail, FaYoutube} from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import homelogo from "../../assets/images/Committee/homelogo.png"
import '../../App.css';

export default function Footer() {
    return (
        <footer className="card-footer text-center text-lg-start bg-light">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div>
                    <div className="icon-footer">
                        <a href="https://www.facebook.com/ICEM.AVIRAT" className="me-4 text-reset">
                            <FaFacebookSquare />
                        </a>
                        <a href="https://www.instagram.com/icem_pune/#" className="me-4 text-reset">
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Findira-college-of-engineering-and-management-pune%2Fabout%2F" className="me-4 text-reset">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </section>
            <section>
                <Container className="text-center text-md-start mt-5">
                    <Row className="mt-4">
                        <Col className="d-flex justify-content-center me-5 mb-4" xs={12} md={4} lg={3}>
                            <center>
                                <Row>
                                    <a href="https://indiraicem.ac.in/home">
                                        <img src={homelogo} alt="icemLogo" className="img-fluid mx-auto mb-4"
                                             style={{ maxWidth: '400px' }} />
                                    </a>
                                </Row>
                               
                            </center>
                        </Col>
                        <Col className="mx-auto mb-4 justify-content-center" xs={12} md={4} lg={3}>
                            <div className="d-flex flex-column align-items-start">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <a href="https://www.facebook.com/ICEM.AVIRAT"
                                   className="me-4 text-reset mb-3">
                                    <FaFacebookSquare /> Facebook
                                </a>
                                <a href="research@indiraicem.ac.in"
                                   className="me-4 text-reset mb-3">
                                    <FaMailBulk />research@indiraicem.ac.in
                                </a>
                                <a href="https://indiraicem.ac.in/" className="me-4 text-reset mb-3">
                                    <TbWorld /> Indira College of Engineering and Management
                                </a>
                                <a href="https://indiraicem.ac.in/" className="me-4 text-reset mb-3">
                                    <TbWorld /> NTAI25
                                </a>
                            </div>
                        </Col>
                        <Col md={4} lg={3} xl={3} className="mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <div className="border rounded-3 p-3 mb-3 contact-box">
                                <p className="contact-title">Dr. Poorna Shakari</p>
                                <p className="contact-info">Indira College of Engineering and Management</p>
                                <p className="contact-info"><FaPhone/><i className="fas fa-phone me-3"></i>+91 8237816742</p>
                            </div>
                            <div className="border rounded-3 p-3 mb-3 contact-box">
                                <p className="contact-title">Dr. Soumitra Das</p>
                                <p className="contact-info">Indira College of Engineering and Management</p>
                                <p className="contact-info"><FaPhone/><i className="fas fa-phone me-3"></i> +91 92703 64627</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <div className="text-center p-4" style={{ backgroundColor: "#f8f9fa" }}>
                © 2025 Copyright  :
                <a className="text-reset fw-bold" href="https://indiraicem.ac.in/"> NTAI25</a>
            </div>
        </footer>
    );
}
