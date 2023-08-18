import {Col, Container, Row} from "react-bootstrap";
import {AiOutlineClose} from "react-icons/ai";
import * as styles from "../styles/Styles"
import React from "react";

export default function ModalContent({setModalIsOpen, textAlign, pageState}: PropsType) {
    function PictureArticle() {
        if (pageState === 1) {
            return (
                <>
                    <Row className="text-box article-box sliding-card">
                        <Col md={3} style={{backgroundImage: `url('https://t1.daumcdn.net/cfile/tistory/99B83F3B5B097F4E03')`, backgroundSize: `cover` , marginBottom: `15px`}}>
                        </Col>
                        <Col md={9} style={{paddingLeft: `4%`}}>
                            <Row>
                                <Col className="kb-font-color" style={{color: `rgb(100, 91, 76)`, fontSize: `30px`, textAlign: textAlign}}>
                                    Title
                                </Col>
                            </Row>
                            <Row style={{height: `20px`}}/>
                            <Row>
                                <p className="text-box" style={{textAlign: textAlign}}>
                                    갸갸ㅑ갸갸ㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑ갸
                                    갸갸갸갸갸ㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑ
                                    갸갸ㅑㄱ갸ㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑ
                                </p>
                            </Row>
                        </Col>
                    </Row>
                </>
            )
        } else {
            return (
                <div className="text-box article-box">
                    <Col>
                        <Row>
                            <Col className="kb-font-color" style={{color: `rgb(100, 91, 76)`, fontSize: `30px`, textAlign: textAlign}}>
                                Title
                            </Col>
                        </Row>
                        <Row style={{height: `20px`}}/>
                        <Row>
                            <p className="text-box" style={{textAlign: textAlign}}>
                                갸갸ㅑ갸갸ㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑ갸
                                갸갸갸갸갸ㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑ
                                갸갸ㅑㄱ갸ㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑ
                            </p>
                        </Row>
                    </Col>
                </div>
            )
        }
    }

    function TitleState () {
        if(pageState === 1){
            return(
                <Row style={{color: `#3b3b3b`, fontSize: `30px`}} className="kb-font-color sliding-title">Kind Bank Daily Report
                </Row>
            )
        }

        return (
            <Row style={{color: `#3b3b3b`, fontSize: `30px`}} className="kb-font-color">Kind Bank Daily Report
            </Row>
        )
    }

    return (
        <Col>
            <TitleState />
            <Row style={{height: `50px`}}/>
            <Row className="text-font-one">
                <PictureArticle />
                <div style={{height: `30px`}}></div>
                <PictureArticle />
                <div style={{height: `30px`}}></div>
            </Row>
        </Col>
    )
}