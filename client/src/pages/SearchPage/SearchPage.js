import React from "react";
import { Card, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import ProductGridSearch from "../../components/ProductGridSearch";

const SearchPage = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col lg={3} md={4} sm={6} xs={12}>
          <Card className="shadow mb-3">
            <Card.Body>
              <Card.Title>Filters</Card.Title>
              <div className="">Clear Filter</div>
            </Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>Price</strong>
                <ul className="list-unstyled">
                  <li>
                    <Form.Check type="radio" name="price" label="< ₹99.00" />
                  </li>
                  <li>
                    <Form.Check
                      type="radio"
                      name="price"
                      label="₹100.00 - ₹199.00"
                    />
                  </li>
                  <li>
                    <Form.Check
                      type="radio"
                      name="price"
                      label="₹200.00 - ₹599.00"
                    />
                  </li>
                  <li>
                    <Form.Check
                      type="radio"
                      name="price"
                      label="₹599.00 - ₹999.00"
                    />
                  </li>
                  <li>
                    <Form.Check type="radio" name="price" label="> ₹999.00" />
                  </li>
                </ul>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Discount</strong>
                <ul className="list-unstyled">
                  <li>
                    <Form.Check
                      type="radio"
                      name="discount"
                      label="50% or more"
                    />
                  </li>
                  <li>
                    <Form.Check
                      type="radio"
                      name="discount"
                      label="40% or more"
                    />
                  </li>
                  <li>
                    <Form.Check
                      type="radio"
                      name="discount"
                      label="30% or more"
                    />
                  </li>
                  <li>
                    <Form.Check
                      type="radio"
                      name="discount"
                      label="20% or more"
                    />
                  </li>
                  <li>
                    <Form.Check
                      type="radio"
                      name="discount"
                      label="10% or more"
                    />
                  </li>
                </ul>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Ratings</strong>
                <ul className="list-unstyled">
                  <li>
                    <Form.Check
                      type="radio"
                      name="rating"
                      label="4 ⭐ & above"
                    />
                  </li>
                  <li>
                    <Form.Check
                      type="radio"
                      name="rating"
                      label="3 ⭐ & above"
                    />
                  </li>
                  <li>
                    <Form.Check
                      type="radio"
                      name="rating"
                      label="2 ⭐ & above"
                    />
                  </li>
                </ul>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col>
          <Row>
            {[0, 0, 0, 0, 0, 0, 0, 0, 0].map((v, i) => (
              <ProductGridSearch />
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchPage;
