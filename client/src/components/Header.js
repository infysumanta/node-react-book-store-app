import React from "react";
import {
  Button,
  Container,
  Form,
  InputGroup,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand>Ecom Store</Navbar.Brand>{" "}
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-start  pe-3">
              <NavDropdown title="Categories">
                <NavDropdown.Item href="#">Workshop</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Workshop</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Workshop</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Workshop</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Workshop</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Other Event</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <div className="d-flex flex-grow-1">
              <InputGroup>
                <Form.Control
                  placeholder="Search.."
                  aria-label="Search.."
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                  Button
                </Button>
              </InputGroup>
            </div>
            <Nav className="justify-content-end pe-3">
              <Nav.Link href="#action1">
                <Button variant="outline-success">Wishlist</Button>
              </Nav.Link>
              <Nav.Link href="#action1">
                <Button variant="outline-success">Cart</Button>
              </Nav.Link>
              <Nav.Link href="#action1">
                <Button variant="outline-success">Login</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
