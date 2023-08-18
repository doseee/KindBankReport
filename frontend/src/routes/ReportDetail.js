import ModalContent from "../component/ModalContent";
import {Col, Container, Row} from "react-bootstrap";
import Header from "../component/Header";
import {useEffect} from "react";
import EduVideo from "../component/EduVideo";
import Quiz from "../component/Quiz";
import {useLocation} from "react-router-dom";

export default function ReportDetail() {
    const windowHiehgt = window.innerHeight;

    const location = useLocation();

    const articles = location.state.articles;

    useEffect(() => {
        // 컴포넌트가 마운트되었을 때 스크롤 숨김
        document.body.style.overflow = "hidden";

        // 컴포넌트가 언마운트되었을 때 스크롤 복원
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div>
            <Header/>
            <Row style={{height: windowHiehgt}}>
                <Col style={{backgroundColor: '#f4eedd', paddingTop: '4%'}} md={8}>
                    <Row>
                        <Col md={1}/>
                        <ModalContent textAlign={"left"} pageState={1} articles={articles} />
                        <Col md={1}/>
                    </Row>
                </Col>
                <Col md={4} style={{backgroundColor: 'rgb(252, 175, 23)'}}>
                    <Row style={{height: windowHiehgt/2}}>
                        <Quiz articles={articles}/>
                    </Row>
                    <Row style={{height: windowHiehgt/2, backgroundColor: 'rgb(100, 91, 76)',}}>
                        <EduVideo />
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

