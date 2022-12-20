import React from "react";
import { Card, Col } from "react-bootstrap";
import shopping from "./shopping.webp";

const ProductGridSearch = ({
  product = {
    name: "Product",
    category: "Category",
    price: "₹250.00",
  },
}) => {
  return (
    <Col lg={4} md={4} sm={6} xs={12}>
      <Card style={{ width: "100%" }} className="my-2 p-3 shadow">
        <Card.Img
          className="border rounded"
          style={{ height: "250px" }}
          variant="top"
          src={shopping}
        />
        <Card.Body className="text-center">
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle>{product.category}</Card.Subtitle>
          <Card.Text className="font-bold">{product.price}</Card.Text>
          <Card.Link href="#" className="btn btn-primary btn-sm w-40">
            Card Link
          </Card.Link>
          <Card.Link href="#" className="btn btn-primary btn-sm w-40">
            Another Link
          </Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductGridSearch;
