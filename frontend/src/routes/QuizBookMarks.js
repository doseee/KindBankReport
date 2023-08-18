import Header from "../component/Header";
import React, {useEffect} from "react";
import {Col, Row} from "react-bootstrap";

export default function QuizBookMarks(){

    useEffect(() => {
        // 컴포넌트가 마운트되었을 때 스크롤 숨김
        document.body.style.overflow = "hidden";

        // 컴포넌트가 언마운트되었을 때 스크롤 복원
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    function Card(){
        return (
            <Row className="text-box article-box" style={{height: `130px`, width: `80%`, margin: `30px`}}>
                <Col style={{padding: `10px`}}>

                    <Row>
                        <p className="text-box" style={{textAlign: 'left'}}>
                            갸갸ㅑ갸갸ㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑ갸
                            갸갸갸갸갸ㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑ
                            갸갸ㅑㄱ갸ㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑ
                        </p>
                    </Row>
                </Col>
            </Row>
        )
    }

    return(
        <>
            <Header />
            <div style={{backgroundColor: '#f4eedd', height: window.innerHeight}}>
                <div style={{height: `50px`}}/>
                <Row style={{textAlign: `left`, margin: `0 0 0 10%`, color: `#3b3b3b`, fontSize: `30px`}} className="kb-font-color d-flex flex-row justify-content-between">
                    <Col>
                        MY BOOKMARK
                    </Col>
                    <Col style={{textAlign: `right`, marginRight: `10%`, fontSize: `20px`}}>
                        <button onClick={()=>{
                            console.log("쓸모가 없을까나..?")
                        }}>
                            Just.. Button
                        </button>
                    </Col>
                </Row>
                <div style={{height: `15px`}}/>
                <Col className="d-flex flex-column align-items-center justify-content-between">
                    <Card />
                    <Card />
                    <Card />
                </Col>
            </div>
        </>
    )
}