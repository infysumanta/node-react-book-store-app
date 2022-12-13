import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { authActions } from "../../redux/actions/authActions";
const LoginPage = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleLogin = () => {
    const user = { email, password };
    login(user, history);
  };

  return (
    <div style={{ marginTop: "100px", minHeight: "600px" }}>
      <Container>
        <Card style={{ width: "30rem", margin: "auto", padding: "10px" }}>
          <Card.Body>
            <Card.Title>Login!!</Card.Title>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="primary" onClick={handleLogin}>
                  Submit
                </Button>
              </div>
            </Form>
            <Card.Text className="mt-3">
              Dont Have Account?{" "}
              <Link to="/register">Create Account click Here</Link>
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

export default connect(null, mapActionToProps)(LoginPage);
