import homelogo from "../../assets/images/Committee/homelogo.png"
import headerImg from "../../assets/images/NavHeading.svg";
import abtBtm from "../../assets/images/NavBtm.svg"
import ShapeMY from "../../assets/images/abt1.png";
import Shape2 from "../../assets/images/shape2.png";
import Shape3 from "../../assets/images/shape4.png";
import Shape4 from "../../assets/images/shape3.png";
import mainguest from '../../assets/images/mainguest.jpg';
import chetan from "../../assets/images/Committee/chetan-sir.jpg";
import Pandit from "../../assets/images/Committee/Pandit.jpg";
import sahil from "../../assets/images/Committee/sahil.jpg";
import shaan from "../../assets/images/Committee/shaan.png";
import chairperson from "../../assets/images/Committee/ChairpersonsPhoto.jpg";
import Soumitra_Das from "../../assets/images/Committee/Soumitra_Das.jpg";
import Poorna_Shankar from "../../assets/images/Committee/Poorna_Shankar.jpg";
import drnileshuke from "../../assets/images/Committee/drnileshuke.jpg";
import ConferenceTracks from "../../assets/images/ConferenceTracks.png";
import ImportantDates from "../../assets/images/ImportantDates.png";


import './About.css';
import Committee from "./Committee";
import Footer from "../Footer/Footer";
import React from "react";
import {Card, Col, Container, Row} from 'react-bootstrap';

export default function About () {
    return (
        <div className="About bg-white overflow-hidden w-100">
            <Container fluid className="p-0">
                <div className="absolute overflow-hidden">
                    <div className="absolute inset-0 justify-center mt-5">
                        <div className="bg-shape1 bg-1 opacity-c bg-blur mx-3 mt-5"></div>
                        <div className="bg-shape2 bg-2 opacity-c bg-blur mt-5"></div>
                        <div className="bg-shape1 bg-3 opacity-c bg-blur mt-5"></div>
                    </div>
                </div>
            </Container>
            <div>
                <img src={headerImg} className="w-100"/>
            </div>
            <img className="shape1" style={{width: 300}} src={ShapeMY} alt="Shape1"/>
            <img className="shape2 w-25" src={Shape2} alt="Shape2"/>
            <img className="shape3 w-25" src={Shape4} alt="Shape3"/>
            <img className="shape4 w-25" src={Shape3} alt="Shape4"/>
            <img className="ConferenceTracks w-25" src={ConferenceTracks} alt="ConferenceTracksImg"/>
            

            <section id="ICLVE-2023">
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <img className="w-100 h-100 rounded-5 " src={homelogo} alt="NTAI Logo"/>
                    </div>
                    <div className="col"></div>
                </div>
                <h2 className="text-red text-3xl mb-4 mt-8 font-bold">About The Conference</h2>
                <div className="ICLVE">
                    <center className="position-relative ">
                        <div className="row w-75 text-center">
                          <p> Welcome to the "Next-Gen Technology and AI for a Sustainable Future" conference, hosted by Indira College of Engineering and Management, Pune. This premier event brings together leading experts, researchers, and innovators from around the globe to explore the latest advancements in technology and artificial intelligence, with a focus on creating a sustainable future.</p>
                        </div>
                        <br/>
                        <h2 className="text-red text-3xl mb-20 mt-12 font-bold">About The Host Institute</h2>
                        <br/>
                        <div className="row w-75 text-center mt-12">
                        Indira College of Engineering and Management (ICEM), established in 2007, is a premier autonomous institution under the Indira Group of Institutes, affiliated with Savitribai Phule Pune University and accredited by NAAC. ICEM offers a range of undergraduate and postgraduate programs in engineering and management, with a strong focus on innovation, research, and sustainable development. The college boasts state-of-the-art facilities, industry collaborations, and a commitment to shaping future leaders and innovators. Join us at ICEM for the "Next-Gen Technology and AI for a Sustainable Future" conference to explore cutting-edge advancements and sustainable solutions.
                        </div>
                        <br/>
                       
                    </center>
                </div>
            </section>

            <section id="CONFERENCE_TRACKS">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12 col-md-8 text-center">
                        <h3 className="text-uppercase mt-5">Conference Tracks</h3>
                        <div className="p-tracks  text-center">
                            <p className="p-text">Artificial Intelligence and Machine Learning</p>
                            <p className="p-text">Information Technology and Cybersecurity</p>
                            <p className="p-text">Advanced Computing and Emerging Technologies </p>
                            <p className="p-text">Management and Business Innovation</p>
                            <p className="p-text">Sustainable Engineering and Technology</p>
                            <p className="p-text">Interdisciplinary Tracks</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="ImportantDates">
                <div className="mt-5">
                    <h3 className="text-center text-uppercase mb-4">Important Dates</h3>
                    <center>
                        <div className="row date-box">
                            <div className="col">
                                <p >20th February 2025</p>
                            </div>
                            <div className="col">
                                <p>Deadline of the Submission</p>
                            </div>
                        </div>

                        <div className="row date-box">
                            <div className="col">
                                <p>28th February 2025</p>
                            </div>
                            <div className="col">
                                <p>Notification of Acceptance</p>
                            </div>
                        </div>

                        <div className="row date-box">
                            <div className="col">
                                <p>15th March 2025</p>
                            </div>
                            <div className="col">
                                <p>Camera-Ready Submission</p>
                            </div>
                        </div>


                        <div className="row date-box" style={{backgroundColor:'#e6d39d'}}>
                            <div className="col">
                                <p>12th and 13th April 2025 </p>
                            </div>
                            <div className="col">
                                <p>Conference dates</p>
                            </div>
                        </div>
                    </center>
                </div>
            </section>

            {/*key note speaker*/}
            <section id="key-note-speaker">
                <div className="container mt-5 text-center">
                    <h2 className=" mb-4 mt-4">Keynote Speaker</h2>
                    <div className="row justify-content-center">
                        <div
                            className="col-lg-4 col-md-6 mb-4 col-sm-6 m-3 border border-dark border-2 d-flex flex-column align-items-center text-center">
                            <img src={mainguest} className="w-100 rounded-5 my-3" alt="Keynote Speaker"/>
                            <h5>Prof. Dato Shamala Subramaniam</h5>
                        </div>
                        <p>Prof. Dato’ Dr Shamala Subramaniam is a Professor and Dean in the Faculty of Computer Science and Information Technology, Universiti Putra Malaysia. She specializes in the area of wireless networks and distributed systems. She has secured a wide-spectrum of research grants encompassing from fundamental to applied. Her research grants in the area of wireless network and distributed systems is approximately RM 4.1 Million. Prof Shamala’s research in integrating wireless and distributed into sports has resulted in the first Games Management System developed in partnership with the National Sports Council.
                        </p>
                        <p>The project known as iGames has evolved from being used domestically to cater one of the largest multi-sports Games (SUKMA 2018 and SUKMA 2022) to an international platform which was the South East Asia Games in Cambodia 2023. Subsequently, another research project known as the IoSRocks© has been copyrighted and has been harnessed to become commercially viable. She has founded the startup U Empower Sdn Bhd through the university program known as Innohub which is aimed at transcending research to the commercialization domain. Prof Shamala is a Council Member of the Academy Professors of Malaysia. Prof Shamala is very passionate about sports.
                        </p>
                        <p>These include the positions she held as the Vice President of the Olympic Council of Malaysia (OCM), Board Member of the Asian Hockey Federation, Deputy President of the Malaysian Hockey Confederation, Director of the National Olympic Academy, Board Member of the National Sports Institute, Director of the Women’s Division of the National Sports Council and was a coordinator of the International Olympic Academy Youth Session in Greece.  
                        </p>
                        <p>
                           
                        </p>
                    </div>
                </div>
            </section>

            {/*key note speaker*/}
            <section id="key-note-speaker" className="my-5">
                <div className="container text-center">
                    <h2 className="mb-4 mt-4">Chief Patron</h2>
                    <div className="row justify-content-center">
                      
                        <div className="col-md-6 mb-4">
                            <div className="card shadow h-100 p-3 m-2">
                                <img src={chairperson} className="card-img-top w-50 mx-auto border border-dark border-2"
                                     alt="Prof. Indralal De Silva"/>
                                <div className="card-body">
                                    <h5 className="card-title">Dr. TARITA SHANKAR</h5>
                                    <h5 className="card-title">CHAIRPERSON & CHIEF MENTOR</h5>
                                    <h5 className="card-title">INDIRA GROUP OF INSTITUTES, PUNE</h5>
                                    <p className="card-text">
                                    The name Indira Group of Institutes (IGI) is synonymous with its driving force- Chairperson & Chief Mentor, Dr Tarita Shankar, a dynamic, passionate and caring leader who has shaped IGI from scratch. Dr.Tarita Shankar holds a Degree in Arts and Law and is an alumnus of the prestigious Harvard Business School, USA having completed the ‘Owner/President Management’ program (OPM).
                                    </p>
                                    <p className="card-text">
                                    Realizing during the early 1990’s that Liberalization and Privatization of the Indian economy and consequently the education sector would open the door to innumerable opportunities, inspired by the wisdom of Chanakya, the legendary statesman, our iron-willed Prime Minister, late Mrs Indira Gandhi and backed by the encouragement and blessings of her parents and well-wishers, Dr Tarita Shankar sowed the seeds of the parent trust, Shree Chanakya Education Society, Pune. Unwavering vision, meticulous planning, over two decades of countless hours at work, unflinching support from her family and a well-groomed leadership team comprising of seasoned academicians has seen the IGI group blossom to over 16 Institutions delivering cutting edge learning, to more than 18000 students from KG to PG level.
                                    </p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="patrons" className="my-5">
  <div className="container text-center">
    <h2 className="mb-4 mt-4">Patrons</h2>
    <div className="row justify-content-center">
      
      <div className="col-md-6 mb-4">
        <div className="card shadow h-100 p-3 m-2">
          <img 
            src={chetan} 
            className="card-img-top w-50 mx-auto border border-dark border-2"
            alt="Prof. Chetan Wakalkar"
          />
          <div className="card-body">
            <h5 className="card-title">Prof. Chetan Wakalkar</h5>
          </div>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div className="card shadow h-100 p-3 m-2">
          <img 
            src={Pandit} 
            className="card-img-top w-50 mx-auto border border-dark border-2"
            alt="Dr. Pandit Mali"
          />
          <div className="card-body">
            <h5 className="card-title">Dr. Pandit Mali</h5>
          </div>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div className="card shadow h-100 p-3 m-2">
          {/* <img 
            src={MrRajivBansal} 
            className="card-img-top w-50 mx-auto border border-dark border-2"
            alt="Mr. Rajiv Bansal"
          /> */}
          <div className="card-body">
            <h5 className="card-title">Mr. Rajiv Bansal</h5>
          </div>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div className="card shadow h-100 p-3 m-2">
          <img 
            src={sahil} 
            className="card-img-top w-50 mx-auto border border-dark border-2"
            alt="Sahil Tarita Shankar Aditya Mehendale"
          />
          <div className="card-body">
            <h5 className="card-title">Sahil Tarita Shankar Aditya Mehendale</h5>
          </div>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div className="card shadow h-100 p-3 m-2">
          <img 
            src={shaan} 
            className="card-img-top w-50 mx-auto border border-dark border-2"
            alt="Shaan Tarita Shankar Aditya Mehendale"
          />
          <div className="card-body">
            <h5 className="card-title">Shaan Tarita Shankar Aditya Mehendale</h5>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
<section id="conference-roles" className="my-5">
  <div className="container text-center">
    <h2 className="mb-4 mt-4">Conference Chair</h2>
    <div className="row justify-content-center">

      <div className="col-md-6 mb-4">
        <div className="card shadow h-100 p-3 m-2">
          <img 
            src={drnileshuke} 
            className="card-img-top w-50 h-100 mx-auto border border-dark border-2"
            alt="Dr. Nilesh Uke"
          />
          <div className="card-body">
            <h5 className="card-title">Dr. Nilesh Uke</h5>
            <p className="card-text">Principal, ICEM</p>
            <p className="card-text">Dr. Nilesh Uke has more than 28 years of teaching experience. He received B.E. degree in Computer Science and Engineering from Amaravati University, in 1995; M.E. from Bharathi Vidyapeeth, Pune, Maharashtra, in 2005; and Ph.D. degree in Computer Science from SRTM University, Nanded, 2014.
            He is currently the Director of Indira College of Engineering and Management, Pune.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="conference-roles" className="my-5">
  <div className="container text-center">
    <h2 className="mb-4 mt-4">Convener & Co-Convener</h2>
    <div className="row justify-content-center">

      <div className="col-md-6 mb-4">
        <div className="card shadow h-100 p-3 m-2">
          <img 
            src={Poorna_Shankar} 
            className="card-img-top w-50 mx-auto border border-dark border-2"
            alt="Dr. Poorna Shankar"
          />
          <div className="card-body">
            <h5 className="card-title">Dr. Poorna Shankar</h5>
            <p className="card-text">Dean R&D, ICEM</p>
          </div>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div className="card shadow h-100 p-3 m-2">
          <img 
            src={Soumitra_Das} 
            className="card-img-top w-50 mx-auto border border-dark border-2"
            alt="Dr. Soumitra Das"
          />
          <div className="card-body">
            <h5 className="card-title">Dr. Soumitra Das</h5>
            <p className="card-text">Vice Principal, ICEM</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


            <section id="conference-venue">
                <Container className="venue-text-center mt-5">
                    <h2 className="mb-5">Conference Venue</h2>
                    
                        
                            <Card className="mb-4  d-flex flex-column">
                                <Card.Body className="flex-grow-1">
                                    <Card.Title><h2 className="y-text">Conference</h2></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted"><h3
                                        className="lead">12<sup>th</sup>April 2025</h3></Card.Subtitle>
                                    <Card.Text><p className="text-secondary">Indira College Of Engineering and Management, Parandwadi, Pune</p>
                                    </Card.Text>
                                </Card.Body>
                                <div className=" lg:flex justify-center items-center">
                                <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.045575992502!2d73.6582349!3d18.706777599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b1d71d126f9d%3A0xe21f7d1ed3c51505!2sIndira%20College%20of%20Engineering%20and%20Management!5e0!3m2!1sen!2sin!4v1735750044246!5m2!1sen!2sin"
            width="100%"
            height="400"
            className="rounded-lg shadow-lg"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
                                </div>
                            </Card>

    
            
                </Container>
            </section>


            <section id="committee">
                <div id="committee">
                    <Committee/>
                </div>
            </section>

            <div className="mt-5">
                <img src={abtBtm} className="w-100"/>
            </div>
            <Footer/>
        </div>
    );
}
