import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/icons8-github.svg';
import navIcon2 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/nav-icon2.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="footer" className="logo-footer" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://github.com/Amal-benhenia" target='blank'> <img src={navIcon1} alt="github amal" /></a>
                <a href="https://www.linkedin.com/in/amal-ben-henia/" target='blank'> <img src={navIcon2} alt="linkedin amal" /></a>
                <a href="https://www.facebook.com/amal.benhenia.39/" target='blank'><img src={navIcon3} alt=" facebook amal" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}