import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import '../../App.css';
import icemlogo from "../../assets/images/Committee/ICEM-Logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const [activeKey, setActiveKey] = useState('/');
    const [expanded, setExpanded] = useState(false);  // Add a state to control Navbar expand/collapse
    const location = useLocation();

    const isAboutPage = location.pathname === '/about';

    // Handle link click to close navbar
    const handleLinkClick = () => {
        setExpanded(false); // Close navbar on link click
    };

    return (
        <Navbar 
            bg="light" 
            expand="lg" 
            style={{ zIndex: 9999, position: 'sticky', top: 0 }} 
            className="shadow-sm"
            expanded={expanded}  // Pass the expanded state to Navbar
        >
            <Container>
                <Navbar.Brand href="#">
                    <img 
                        src={icemlogo} 
                        width="280" 
                        height="200" 
                        className="d-inline-block align-top" 
                        alt="ICEM Logo"
                        style={{ maxWidth: '100%', height: 'auto', background: 'none' }}  // No background
                    />
                </Navbar.Brand>
                <Navbar.Toggle 
                    aria-controls="basic-navbar-nav" 
                    onClick={() => setExpanded(!expanded)}  // Toggle expand/collapse
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto justify-content-center w-100 fw-bold" activeKey={activeKey} onSelect={setActiveKey}>
                        <Nav.Link 
                            as={RouterLink} 
                            to="/" 
                            className="mx-3 custom-nav-link" 
                            onClick={handleLinkClick}  // Close navbar on link click
                        >
                            Home
                        </Nav.Link>
                        <NavDropdown 
                            title="About" 
                            id="basic-nav-dropdown" 
                            className="mx-3 custom-nav-link text-center dropdown-center"
                            onMouseEnter={() => setOpen(true)} 
                            onMouseLeave={() => setOpen(false)} 
                            show={open}
                        >
                            <NavDropdown.Item 
                                as={isAboutPage ? ScrollLink : RouterLink} 
                                to={isAboutPage ? "key-note-speaker" : "/about#key-note-speaker"} 
                                smooth={true} duration={1000} 
                                className="dropdown-item"
                                onClick={handleLinkClick}  // Close navbar on link click
                            >
                                Guests
                            </NavDropdown.Item>
                            <NavDropdown.Item 
                                as={isAboutPage ? ScrollLink : RouterLink} 
                                to={isAboutPage ? "CONFERENCE_TRACKS" : "/about#CONFERENCE_TRACKS"} 
                                smooth={true} duration={1000} 
                                className="dropdown-item"
                                onClick={handleLinkClick}  // Close navbar on link click
                            >
                                Conference Tracks
                            </NavDropdown.Item>
                            <NavDropdown.Item 
                                as={isAboutPage ? ScrollLink : RouterLink} 
                                to={isAboutPage ? "ImportantDates" : "/about#ImportantDates"} 
                                smooth={true} duration={1000} 
                                className="dropdown-item"
                                onClick={handleLinkClick}  // Close navbar on link click
                            >
                                Important Dates
                            </NavDropdown.Item>
                            <NavDropdown.Item 
                                as={isAboutPage ? ScrollLink : RouterLink} 
                                to={isAboutPage ? "committee" : "/about#committee"} 
                                smooth={true} duration={1000} 
                                className="dropdown-item"
                                onClick={handleLinkClick}  // Close navbar on link click
                            >
                                NTAI Committee
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link 
                            as={RouterLink} 
                            to="/CONFERENCE_TRACKS" 
                            className="mx-3 custom-nav-link" 
                            onClick={handleLinkClick}  // Close navbar on link click
                        >
                            Conference Tracks
                        </Nav.Link>
                        <Nav.Link 
                            as={RouterLink} 
                            to="/Objective" 
                            className="mx-3 custom-nav-link" 
                            onClick={handleLinkClick}  // Close navbar on link click
                        >
                            Objective
                        </Nav.Link>
                        <Nav.Link 
                            as={RouterLink} 
                            to="/registration" 
                            className="mx-3 custom-nav-link" 
                            onClick={handleLinkClick}  // Close navbar on link click
                        >
                            Registration
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
