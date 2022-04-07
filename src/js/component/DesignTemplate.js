import React from 'react';
import { Card, Col } from 'react-bootstrap';

import "../../styles/design.css";

export const DesignTemplate = ({ img }) => {
    return (
        <Col xs lg={ 8 } className="m-2 justify-content-center" id="template">
            <Card className="bg-dark text-white" id="template">
                <Col></Col>
                <Col xs={6} className="m-1 justify-content-center" id="template">
                    <Card.Img className="justify-content-center" src={`${img}.jpg`} alt={img} id="designImg" />
                </Col>
                <Col></Col>
            </Card>
        </Col>
    )
}