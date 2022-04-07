import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

import "../../styles/design.css";

export const DesignTemplate = ({ img }) => {
    return (
        <Col xs lg={5} >
            <Card className="bg-dark text-white">
                <Col>
                    <Card.Img src={`${img}.jpg`} alt={img} id="designImg" />
                </Col>
            </Card>
        </Col>

    )
}