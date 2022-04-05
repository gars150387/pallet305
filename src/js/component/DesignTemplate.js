import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

import "../../styles/design.css";

export const DesignTemplate = ({ img }) => {
    return (
        <Col sm >
            <Card className="bg-dark text-white">
                <Row className="row no-gutters">
                    <Col xs lg={8}>
                        <Card.Img src={`../../img/${img}.jpg`} alt={img} id="designImg" />
                    </Col>
                </Row>
            </Card>
        </Col>

    )
}