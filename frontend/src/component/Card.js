import {Col, Row} from "react-bootstrap";
import React from "react";

function Card(props) {

    return (
        <Row className="text-box article-box justify-content-center" style={{
            height: `130px`,
            width: `80%`,
            margin: `30px`,
        }}>
            <Col className="text-box" style={{textAlign: 'left'}}>
                {props.bookmark}
            </Col>
        </Row>
    )
}

export default Card;