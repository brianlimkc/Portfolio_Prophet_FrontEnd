import React, {useEffect} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import DashTable from "./common/DashTable";
import {checkAuth} from "../../lib/checkAuth";

function Settings() {

    return (
        <>
            <h1>Settings</h1>
            <Row className="mb-4 no-gutters dash-card-block">
                <Col className="col-12 card">
                    <Form>
                        <Form.Group controlId="settingsUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>

                        <Form.Group controlId="settingsUsername">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" readOnly />
                        </Form.Group>

                        <Form.Group controlId="settingsPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"/>
                        </Form.Group>

                        <Form.Group controlId="settingsPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password"/>
                        </Form.Group>
                        <Button className="btn btn-primary" type="submit">
                            Update Details
                        </Button>
                    </Form>
                </Col>
            </Row>
        </>
    );
}

export default Settings;
