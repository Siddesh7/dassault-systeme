import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { MDBCol, MDBIcon } from "mdbreact";
import logo from "../assets/img/ds-vr-logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
        document.getElementsByClassName("logo-img img").style.backgroundcolor =
          "#fdfdfd00";
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container >
        <Navbar.Brand href="/" className="logo-img">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto flex items-center">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="https://www.skct.edu.in/#/dassault"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="/category"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Experiments
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Gallery
            </Nav.Link>{" "}
          </Nav>
          {/* <span className="navbar-text">
            <MDBCol md="6">
              <form className="form-inline mt-4 mb-4">
                <MDBIcon icon="search" />
                <input
                  className="form-control form-control-sm ml-3 w-70"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </MDBCol>
          </span>
           */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
