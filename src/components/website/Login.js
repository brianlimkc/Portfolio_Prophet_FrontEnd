import {Redirect, useHistory} from "react-router-dom";
import React from 'react';
import {Row, Col, Form, Button} from "react-bootstrap";
import axios from "../../lib/Axios";

function Login() {
    const history = useHistory()
    async function registerUser(e){
        e.preventDefault()
        const userFormData = new FormData(e.target)
        let userFormDataObj = {}
        for (let pair of userFormData.entries()){
            userFormDataObj[pair[0]] = pair[1]
        }
        userFormDataObj['password1'] = userFormData.get('password')
        try{
            let res = await axios.post('accounts/register/', userFormDataObj)

            if (res.status === 201 || res.status === 200){
                let loginFormDataObj = {
                    "username": userFormDataObj['username'],
                    "password": userFormDataObj['password'],
                }
                let {data} = await axios.post('api/token/', loginFormDataObj)
                localStorage.setItem("access", data.access)
                localStorage.setItem("refresh", data.refresh)
                history.push("/dashboard")
            }

        }catch(e){
            console.log(e)
        }
    }

    async function loginUser(e){
        e.preventDefault()
        const loginFormData = new FormData(e.target)
        let loginFormDataObj = {}
        for (let pair of loginFormData.entries()){
            if (pair[0] !== "confirm_password")
                loginFormDataObj[pair[0]] = pair[1]
        }

        try{
            let {data} = await axios.post('api/token/', loginFormDataObj)
            localStorage.setItem("access", data.access)
            localStorage.setItem("refresh", data.refresh)
        }catch(e){
            console.log(e)
        }
    }

    return (
        <Row className="section justify-content-center no-gutters">
            <Col className="col-11">
                <Row className="no-gutters justify-content-center">
                    <Col className="col-5">
                        <div className="d-flex flex-column card-block pr-xl-3 pr-0">
                            <div className="list--title"><h2>Register</h2></div>
                            <div className="card">
                                <Form onSubmit={registerUser}>
                                    <Form.Group controlId="registerUsername">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control name={"username"} type="text" />
                                    </Form.Group>

                                    <Form.Group controlId="registerEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control name={"email"} type="Email"/>
                                    </Form.Group>

                                    <Form.Group controlId="registerPassword1">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control name={"password"} type="password"/>
                                    </Form.Group>

                                    <Form.Group controlId="registerPassword2">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control name={"password2"} type="password"/>
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
                                <Form onSubmit={loginUser}>
                                    <Form.Group controlId="loginUsername">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control name={"username"} type="text" />
                                    </Form.Group>

                                    <Form.Group controlId="loginPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control name={"password"} type="password"/>
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
