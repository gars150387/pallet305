import React from 'react'
import { DesignTemplate } from '../component/DesignTemplate';
import { DesignData } from '../component/DesignData';

import { Container, Row, Col } from 'react-bootstrap';

export const Design = () => {
    
    const id = Math.floor(Math.random() * 900 + 1)

    return (
        <div>
            <Container>
                <Row>
                    <Col>

                        {DesignData.map((item) => {

                            console.log(item)
                            return (
                                <DesignTemplate key={ id } img={item.img} />
                            )
                        })}
                    </Col>
                </Row>
            </Container>

        </div>
    )
}