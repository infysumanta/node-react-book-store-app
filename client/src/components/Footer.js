import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <Container className="text-center b">
        <span>
          {new Date().getFullYear()}&copy; All Right Reserved, Ecom Store
        </span>
      </Container>
    </footer>
  );
};

export default Footer;
