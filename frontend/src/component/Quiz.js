import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import Question from "../assets/question.png";

export default function Quiz() {
    let windowHeightHalfEight = window.innerHeight / 30;

    const [screenState, setscreenState] = useState(0); // 0: 퀴즈 표시 버튼, 1: 퀴즈 화면, 2: 해설 화면
    const [showPopup, setshowPopup] = useState(false);

    function QuizScreen() {
        if (screenState === 0) {
            return (
                <Row style={{padding: `20px`}}>
                    <button onClick={() => setscreenState(1)} className="quiz-btn">
                        <Col className="d-flex flex-column align-items-center" style={{height: `100%`}}>
                            <Row style={{width: `50%`}}>
                                <img src={Question} alt="question"/>
                            </Row>
                            <Row className="mt-3">
                                <span style={{textAlign: `center`, color: `#d3d3d3`}} className="text-font-one">퀴즈를 확인하고 싶다면 Click!</span>
                            </Row>
                        </Col>
                    </button>
                </Row>
            )
        } else if (screenState === 1) {
            return (
                <Row ms={5} style={{height: windowHeightHalfEight * 26, padding: `0 30px 0 20px`}}>
                    <Col md={1}/>
                    <Col md={10}>
                        <Row className="text-font-one" style={{textAlign: 'left'}}>
                            문제문제문제문제문제문제문제문제문제문제문제문제문제문제문제문제문제문제문제문제문제문제문제문제문제문제문제문제문제문제문제문제문제문제문제문제
                        </Row>
                        <Row style={{height: `50px`}}/>
                        <Row>
                            <button onClick={() => setscreenState(2)} className="quiz-btn">
                                정답1
                            </button>
                        </Row>
                        <Row style={{height: `25px`}}/>
                        <Row>
                            <button onClick={() => setscreenState(2)} className="quiz-btn">
                                정답2
                            </button>
                        </Row>
                    </Col>
                    <Col md={1}/>
                </Row>
            )
        } else {
            return (
                <Row ms={5} style={{height: windowHeightHalfEight * 26, padding: `0 30px 0 20px`}}>
                    <Col md={1}/>
                    <Col md={10} className="d-flex flex-column align-items-center justify-content-between" style={{ height: `260px`}}>
                        <Row style={{height: `10px`}}/>
                        <Row className="text-font-one" style={{ textAlign: 'left' }}>
                            문제 해설문제 해설문제 해설문제 해설문제 해설문제 해설문제 해설문제 해설문제 해설문제 해설문제 해설문제 해설문제 해설문제 해설문제 해설
                        </Row>
                        {/*<Row style={{height: `180px`}}/>*/}
                        <Row>
                            <button
                                onClick={() => {
                                    console.log("북마크 저장");
                                    setshowPopup(true);
                                    setTimeout(()=> {
                                        setshowPopup(false);
                                    }, 2000)
                                }}
                                className="quiz-btn text-font-two"
                                style={{ backgroundColor: `rgba(244, 238, 221, 1)`, width: `300px`}}>
                                해설 저장하기
                            </button>
                            <div className={`popup ${showPopup ? 'show' : ''}`}>
                                <p>✔️ 북마크가 완료되었습니다!</p>
                            </div>
                        </Row>
                    </Col>
                    <Col md={1}/>
                </Row>
            )
        }
    }

    return (
        <>
            <Col>
                <Row style={{height: windowHeightHalfEight}}/>
                <Row style={{height: windowHeightHalfEight * 2, padding: `10px`, textAlign: `center`}}>
                    <span className="text-font-two"
                          style={{fontColor: `white`, fontWeight: `700`, fontSize: `15px`, color: 'black'}}>퀴즈로 복습하는 오늘의 금융 상식</span>
                </Row>
                <QuizScreen/>
            </Col>
        </>
    )
}