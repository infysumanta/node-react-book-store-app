import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { authActions } from "../../redux/actions/authActions";
const RegisterPage = ({ register }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleRegister = () => {
    const user = {
      name,
      email,
      password,
    };

    register(user, history);
  };

  return (
    <div style={{ marginTop: "100px", minHeight: "600px" }}>
      <Container>
        <Card style={{ width: "30rem", margin: "auto", padding: "10px" }}>
          <Card.Body>
            <Card.Title>Create Account.</Card.Title>

            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="primary" onClick={handleRegister}>
                  Submit
                </Button>
              </div>
            </Form>
            <Card.Text className="mt-3">
              Already Have Account? <Link to="/login">Login Now</Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};
const mapActionToProps = (dispatch) => {
  return {
    ...authActions(dispatch),
  };
};
export default connect(null, mapActionToProps)(RegisterPage);
