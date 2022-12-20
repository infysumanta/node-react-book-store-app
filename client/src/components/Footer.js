import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer mt-auto pt-3 bg-dark">
      <Container className="b text-white py-3">
        <Row>
          <Col lg={3} md={4} sm={6} xs={12}>
            <strong>About:</strong>
            <ul className="list-unstyled">
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Stories</li>
              <li>News</li>
              <li>Sitemap</li>
            </ul>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <strong>Help: </strong>
            <ul className="list-unstyled">
              <li>Payments</li>
              <li>Shipping</li>
              <li>Cancellation & Returns</li>
              <li>Terms</li>
              <li>FAQs</li>
            </ul>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <strong>Connect with Us:</strong>
            <ul className="list-unstyled">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Youtube</li>
              <li>Instagram</li>
              <li>Linkdin</li>
            </ul>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <strong>Office Address:</strong>
            <address>
              Ecom Store Pvt. Ltd.
              <br />
              65 Avenue, Bidhan Chandra Street
              <br />
              Near Shopping Complex
              <br />
              Bangalore, 654409
              <br />
              Karnataka, India
              <br />
              Phone: 011-123456
            </address>
          </Col>
        </Row>
        <hr />
        <div className="text-center ">
          {new Date().getFullYear()}&copy; All Right Reserved, Ecom Store
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
