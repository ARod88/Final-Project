import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css/animate.css';

const ContactUs = () => {
  const [isMessageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    //  form submission request to the server)

   
    setMessageSent(true);

    // Reset the form (optional)
    e.target.reset();
  };

  return (
    <Container className="contact">
      <Row className="mb-5 mt-3">
        <Col lg={8}>
          <h1 className="contactme display-4 mb-4">
            Contact Me
          </h1>
        </Col>
      </Row>
      <Row className="sec_sp">
        <Col lg={5} className="mb-5">
          <h3 className="color_sec py-4">Order Now</h3>
          <address>
            <strong>Email: 6foot3@gmail.com</strong>
            <br/><br/>
            <p><strong>Phone: 123-456-8899</strong></p>
          </address>
          <p>
            <h3 className="color_sec py-2">Contact me for your custom rugs</h3>
          </p>
        </Col>
        <Col lg={7} className="d-flex align-items-right">
          <form className="contact___form w-20" onSubmit={handleSubmit}>
            <Row>
              <Col lg={12} className="form-group">
                <input className="form-control" id="name" name="name" placeholder="Name" type="text" required />
              </Col>
              <Col lg={12} className="form-group">
                <input className="form-control rounded-0" id="email" name="email" placeholder="Email" type="email" required />
              </Col>
            </Row>
            <textarea className="form-control rounded-0" id="message" name="message" placeholder="Message" rows='5' required></textarea>
            <br />
            <Row>
              <Col lg={12} className="form-group">
                {isMessageSent ? (
                  <div className="animate__animated animate__fadeIn animate__delay-2s text-success">
                    Message Sent!
                  </div>
                ) : (
                  <button className="ac_btn" type="submit">Send</button>
                )}
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;
