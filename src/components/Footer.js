import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/ds-vr-logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { Newsletter } from "../components/Newsletter";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Newsletter />
          <Col size={12} sm={6} md={4}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} md={4} className="link-list">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Home</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.skct.edu.in/#/dassault">About</a>
              </li>
              <li className="list-unstyled">
                <a href="/category">Experiments</a>
              </li>
              <li className="list-unstyled">
                <a href="#skills">Gallery</a>
              </li>
            </ul>
          </Col>

          <Col size={12} sm={6} md={4} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
