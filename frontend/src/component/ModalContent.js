import {Col, Container, Row} from "react-bootstrap";
import {AiOutlineClose} from "react-icons/ai";
import * as styles from "../styles/Styles"
import React from "react";

export default function ModalContent({setModalIsOpen, textAlign, pageState, articles, height}: PropsType) {
    function PictureArticle(article, i) {

        if (pageState === 1) {
            return (
                <>
                    <Row className="text-box article-box sliding-card" >
                        <Col md={3} style={{
                            backgroundImage: `url('https://t1.daumcdn.net/cfile/tistory/99B83F3B5B097F4E03')`,
                            backgroundSize: `cover`,
                            marginBottom: `15px`
                        }}>
                        </Col>
                        <Col md={9} style={{paddingLeft: `4%`}}>
                            <Row>
                                <Col className="kb-font-color"
                                     style={{color: `rgb(100, 91, 76)`, fontSize: `30px`, textAlign: textAlign}}>
                                    {article.article.title}
                                </Col>
                            </Row>
                            <Row style={{height: `20px`}}/>
                            <Row>
                                <p className="text-box" style={{textAlign: textAlign}}>
                                    {article.article.summary}
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
                            <Col className="kb-font-color"
                                 style={{color: `rgb(100, 91, 76)`, fontSize: `25px`, textAlign: textAlign}}>
                                {article.article.title}
                            </Col>
                        </Row>
                        <Row style={{height: `20px`}}/>
                        <Row>
                            <p className="text-box" style={{textAlign: "justify"}}>
                                {article.article.summary}
                            </p>
                        </Row>
                    </Col>
                </div>
            )
        }
    }


    function TitleState() {
        if (pageState === 1) {
            return (
                <Row style={{color: `#3b3b3b`, fontSize: `30px`}} className="kb-font-color sliding-title">Kind Bank
                    Daily Report
                </Row>
            )
        }

        return (
            <Row style={{color: `#3b3b3b`, fontSize: `30px`}} className="kb-font-color">Kind Bank Daily Report
            </Row>
        )
    }

    function TitleSpaceContents() {
        if(pageState === 1){
            return <Row style={{height: `50px`}}/>
        } else {
            return<Row style={{height: `25px`}}/>
        }
    }

    return (
        <Col>
            <TitleState/>
            <TitleSpaceContents />
            <Row className="text-font-one">
                {
                    articles.map((a, i) => {
                        return (
                            <>
                                <PictureArticle article={articles[i]} i={i}/>
                                <div style={{height: `30px`}}></div>
                            </>
                        )
                    })
                }
            </Row>
        </Col>
    )
}