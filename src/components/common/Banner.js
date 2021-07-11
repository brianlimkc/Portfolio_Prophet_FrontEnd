import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import banner from "../../assets/banner.png";

function Banner() {
    return (
        <Container fluid className="px-0">
            <Row className="no-gutters">
                <Col className="col-12">
                    <div className="main-banner d-flex justify-content-center">
                        <div className="banner-image">
                            <Image src={banner} alt="join portfolio prophet!" fluid />
                        </div>
                        <div className="banner-content col-11">
                            <h2>Looking for ways to invest better?</h2>
                            <h3>Join Portfolio Prophet Now!</h3>
                            <div className="btn btn-primary">Register Now</div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Banner;