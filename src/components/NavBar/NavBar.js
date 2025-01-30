import React, {useState} from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import '../../App.css';
import icemlogo from "../../assets/images/Committee/ICEM-Logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function NavBar() {
    const [open, setOpen] = useState(false);
    const [activeKey, setActiveKey] = useState('/');
    const location = useLocation();

    const isAboutPage = location.pathname === '/about';

    return (
        <Navbar bg="light" expand="lg" style={{ zIndex: 9999, position: 'sticky', top: 0 }} className="">
            <Container>
                <Navbar.Brand href="#">
                    <img src="https://universitykart.b-cdn.net/Content/upload/admin/syqpr3up.m32.jpg" width="150" height="90" className="d-inline-block align-top float-start" alt="React Bootstrap logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-center w-100 fw-bold" activeKey={activeKey} onSelect={setActiveKey}>
                        <Nav.Link as={RouterLink} to="/" className="mx-3 custom-nav-link">Home</Nav.Link>
                        <NavDropdown title="About" id="basic-nav-dropdown" className="mx-3 custom-nav-link text-center dropdown-center" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} show={open} >
                            <NavDropdown.Item as={isAboutPage ? ScrollLink : RouterLink} to={isAboutPage ? "key-note-speaker" : "/about#key-note-speaker"} smooth={true} duration={1000} className="dropdown-item">
                                Guests
                            </NavDropdown.Item>
                            <NavDropdown.Item as={isAboutPage ? ScrollLink : RouterLink} to={isAboutPage ? "CONFERENCE_TRACKS" : "/about#CONFERENCE_TRACKS"} smooth={true} duration={1000} className="dropdown-item">
                                Conference Tracks
                            </NavDropdown.Item>
                            <NavDropdown.Item as={isAboutPage ? ScrollLink : RouterLink} to={isAboutPage ? "ImportantDates" : "/about#ImportantDates"} smooth={true} duration={1000} className="dropdown-item">
                                Important Dates
                            </NavDropdown.Item>
                            <NavDropdown.Item as={isAboutPage ? ScrollLink : RouterLink} to={isAboutPage ? "committee" : "/about#committee"} smooth={true} duration={1000} className="dropdown-item">
                            NTAI Committee
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={RouterLink} to="/CONFERENCE_TRACKS" className="mx-3 custom-nav-link">
                         Conference Tracks
                        </Nav.Link>
                        <Nav.Link as={RouterLink} to="/Objective" className="mx-3 custom-nav-link">
                        Objective
                        </Nav.Link>
                        <Nav.Link as={RouterLink} to="/registration" className="mx-3 custom-nav-link">
                            Registration
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
