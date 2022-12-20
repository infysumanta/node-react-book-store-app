import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  InputGroup,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState("");
  const history = useHistory();
  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/search?q=${search}`);
  };
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

            <Form className="d-flex flex-grow-1" onSubmit={handleSearch}>
              <InputGroup>
                <Form.Control
                  placeholder="Search.."
                  aria-label="Search.."
                  name="q"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" type="submit">
                  Search
                </Button>
              </InputGroup>
            </Form>
            <Nav className="justify-content-end pe-3">
              <Nav.Link to="/wishlist" as={Link}>
                <Button variant="outline-success">Wishlist</Button>
              </Nav.Link>
              <Nav.Link to="/cart" as={Link}>
                <Button variant="outline-success">Cart</Button>
              </Nav.Link>
              <Nav.Link to="/login" as={Link}>
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
