import React from 'react'
import { DesignTemplate } from '../component/DesignTemplate';
import { DesignData } from '../component/DesignData';

import { Container, Row, Col } from 'react-bootstrap';

export const Design = () => {
    const { img } = DesignData;
    console.log(img)
    return (
        <div>
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        {DesignData.map(({ img, index }) => {
                            return (
                                <DesignTemplate key={index} img={img} />
                            )
                        })}
                    </Col>
                </Row>
            </Container>

        </div>
    )
}