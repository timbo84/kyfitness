"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const NavbarComponent = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const logoSize = windowWidth <= 992 ? 50 : 125;

  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container fluid="xl" className="d-flex justify-content-between">
        {/* Logo aligned to the left */}
        <div>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <Image
              src="/images/kyfitness.png"
              alt="Logo"
              width={logoSize}
              height={logoSize}
            />
          </Navbar.Brand>
        </div>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Centered Navbar Links */}
        <Navbar.Collapse id="navbar-nav" className="justify-content-center mx-auto">
          <Nav className="gap-4">
            <Nav.Link href="/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link href="/about" className="nav-link-custom">About Me</Nav.Link>
            <Nav.Link href="/programs" className="nav-link-custom">Programs</Nav.Link>
            <Nav.Link href="/calendly" className="nav-link-custom">Calendar</Nav.Link>
            <Nav.Link href="/contact" className="nav-link-custom">Contact</Nav.Link>
            <Nav.Link href="/pay" className="nav-link-custom">PAY</Nav.Link>
            <Nav.Link href="/calculate" className="nav-link-custom">MACRO Calculator</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
