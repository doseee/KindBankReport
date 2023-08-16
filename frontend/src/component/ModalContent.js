import {Col, Container, Row} from "react-bootstrap";
import {AiOutlineClose} from "react-icons/ai";
import * as styles from "../style/Styles"

export default function ModalContent({setModalIsOpen}: PropsType) {

    return (
        <>
            <Col>
                {/*<Row className="space-btw">*/}
                {/*    <Col>*/}
                {/*        2023-08-16*/}
                {/*    </Col>*/}
                {/*    <Col/>*/}
                {/*    <Col className="right-align">*/}
                {/*        <styles.TransparentButton onClick={() => setModalIsOpen(false)}><AiOutlineClose/>*/}
                {/*        </styles.TransparentButton>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
                <Row style={{color: `black`, fontSize: `30px`}} className="kb-font-color" > Kind Bank Daily Report </Row>
                <Row style={{height: `50px`}}/>
                <Row>
                    <div className="text-box article-box">
                            <Col>
                            <Row>
                                <Col className="kb-font-color" style={{color: `rgb(100, 91, 76)`, fontSize: `30px`}}>
                                    Title
                                </Col>
                            </Row>
                            <Row style={{height: `20px`}}/>
                            <Row>
                                <p className="text-box">
                                    갸갸ㅑ갸갸ㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑ갸
                                    갸갸갸갸갸ㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑ
                                    갸갸ㅑㄱ갸ㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑ
                                </p>
                            </Row>
                        </Col>
                    </div>
                    <div style={{height: `30px`}}></div>
                    <div className="text-box article-box">
                        <Col>
                            <Row>
                                <Col className="kb-font-color" style={{color: `rgb(100, 91, 76)`, fontSize: `30px`}}>
                                    Title
                                </Col>
                            </Row>
                            <Row style={{height: `20px`}}/>
                            <Row>
                                <p className="text-box">
                                    갸갸ㅑ갸갸ㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑ갸
                                    갸갸갸갸갸ㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑ
                                    갸갸ㅑㄱ갸ㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑ
                                </p>
                            </Row>
                        </Col>
                    </div>
                </Row>
            </Col>
        </>
    )
}