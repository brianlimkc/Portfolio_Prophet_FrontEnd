import React from 'react';
import {Row, Col, Form, Button} from "react-bootstrap";

function Login() {
    return (
        <Row className="section justify-content-center no-gutters">
            <Col className="col-11">
                <Row className="no-gutters justify-content-center">
                    <Col className="col-5">
                        <div className="d-flex flex-column card-block pr-xl-3 pr-0">
                            <div className="list--title"><h2>Register</h2></div>
                            <div className="card">
                                <Form>
                                    <Form.Group controlId="registerUsername">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>

                                    <Form.Group controlId="registerEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="Email"/>
                                    </Form.Group>

                                    <Form.Group controlId="registerPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password"/>
                                    </Form.Group>

                                    <Form.Group controlId="registerPassword">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control type="password"/>
                                    </Form.Group>
                                    <Button className="btn btn-primary" type="submit">
                                        Register
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-5">
                        <div className="d-flex flex-column card-block pr-xl-3 pr-0">
                            <div className="list--title"><h2>Login</h2></div>
                            <div className="card">
                                <Form>
                                    <Form.Group controlId="loginUsername">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>

                                    <Form.Group controlId="loginPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password"/>
                                    </Form.Group>

                                    <Button className="btn btn-primary" type="submit">
                                        Login
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Login;