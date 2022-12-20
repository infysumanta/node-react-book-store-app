import React from "react";
import { Container, Row, Card } from "react-bootstrap";
import ProductGrid from "../../../components/ProductGrid";

let products = [
  {
    name: "Product 1",
    category: "Category",
    price: "₹250.00",
  },
  {
    name: "Product 2",
    category: "Category",
    price: "₹250.00",
  },
  {
    name: "Product 3",
    category: "Category",
    price: "₹250.00",
  },
  {
    name: "Product 4",
    category: "Category",
    price: "₹250.00",
  },
];
const TrendingProduct = () => {
  return (
    <Container className="my-4">
      <Card className="shadow">
        <Card.Body>
          <h2 className="font-bold">🎉Trending Products</h2>
        </Card.Body>
      </Card>
      <Row>
        {products.map((product, index) => {
          return <ProductGrid product={product} key={index} />;
        })}
      </Row>
    </Container>
  );
};

export default TrendingProduct;
