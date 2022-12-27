import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';


export const Contact = () => {
  const [status, setStatus] = useState({});
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_bwoy6ji', 'template_7kp2yp8', form.current, 'bZecszY8dSh_BNg9b')
      .then((result) => {
          console.log(result.text);
          setStatus({ succes: true, message: 'Message sent successfully'});
      }, (error) => {
          console.log(error.text);
          setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
      });
      e.target.reset()
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="firstName"  placeholder="First Name"  />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="lastName"  placeholder="Last Name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="email"  placeholder="Email Address" required  />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="phone" placeholder="Phone No." />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="message"  placeholder="Message" required ></textarea>
                      <button type="submit"><span>Send</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"} style ={{color: "white"}}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
