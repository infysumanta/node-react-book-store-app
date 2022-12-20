import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
const CartPage = () => {
  return (
    <Container className="my-5" style={{ minHeight: "600px" }}>
      <Card>
        <Card.Body>
          <Row>
            <Col md={8} className="cart">
              <Card.Title>
                <Row>
                  <Col>
                    <h4>
                      <b>Shopping Cart</b>
                    </h4>
                  </Col>
                  <Col className="align-self-center justify-content-end text-right text-muted">
                    3 items
                  </Col>
                </Row>
              </Card.Title>
              <Row className="border-top border-bottom">
                <Row className="main align-items-center">
                  <Col className="col-2">
                    <img
                      className="img-fluid"
                      src="https://i.imgur.com/1GrakTl.jpg"
                      alt=""
                    />
                  </Col>
                  <Col>
                    <Row className="text-muted">Shirt</Row>
                    <Row>Cotton T-shirt</Row>
                  </Col>
                  <Col>
                    <a href="/">-</a>
                    <a href="/" className="border">
                      1
                    </a>
                    <a href="/">+</a>
                  </Col>
                  <Col>
                    ₹ 44.00 <span className="close">&#10005;</span>
                  </Col>
                </Row>
              </Row>
              <Row>
                <Row className="main align-items-center">
                  <Col className="col-2">
                    <img
                      className="img-fluid"
                      src="https://i.imgur.com/ba3tvGm.jpg"
                      alt=""
                    />
                  </Col>
                  <Col>
                    <Row className="text-muted">Shirt</Row>
                    <Row>Cotton T-shirt</Row>
                  </Col>
                  <Col>
                    <a href="/">-</a>
                    <a href="/" className="border">
                      1
                    </a>
                    <a href="/">+</a>
                  </Col>
                  <Col>
                    &euro; 44.00 <span className="close">&#10005;</span>
                  </Col>
                </Row>
              </Row>
              <Row className="border-top border-bottom">
                <Row className="main align-items-center">
                  <Col className="col-2">
                    <img
                      className="img-fluid"
                      src="https://i.imgur.com/pHQ3xT3.jpg"
                      alt=""
                    />
                  </Col>
                  <Col>
                    <Row className="text-muted">Shirt</Row>
                    <Row>Cotton T-shirt</Row>
                  </Col>
                  <Col>
                    <a href="/">-</a>
                    <a href="/" className="border">
                      1
                    </a>
                    <a href="/">+</a>
                  </Col>
                  <Col>
                    ₹ 44.00 <span className="close">&#10005;</span>
                  </Col>
                </Row>
              </Row>
              <div className="back-to-shop">
                <a href="/"> </a>
                <span className="text-muted">Back to shop</span>
              </div>
            </Col>
            <Col md={4} className="summary">
              <div>
                <h5>
                  <b>Summary</b>
                </h5>
              </div>
              <hr />
              <Row>
                <Col style={{ paddingLeft: "0" }}>ITEMS 3</Col>
                <Col className="text-right">&euro; 132.00</Col>
              </Row>
              <form>
                <p>SHIPPING</p>
                <select>
                  <option className="text-muted">
                    Standard-Delivery- &euro;5.00
                  </option>
                </select>
                <p>GIVE CODE</p>
                <input id="code" placeholder="Enter your code" />
              </form>
              <Row
                style={{
                  borderTop: "1px solid rgba(0,0,0,.1)",
                  padding: " 2vh 0",
                }}
              >
                <Col>TOTAL PRICE</Col>
                <Col className="text-right">&euro; 137.00</Col>
              </Row>
              <Button className="btn-dark btn-block">CHECKOUT</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CartPage;
