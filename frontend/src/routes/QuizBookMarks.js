import Header from "../component/Header";
import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import {getQuizExplain} from "../services/QuizApi";
import Card from "../component/Card";
import bm2 from "../assets/bm2.png";

export default function QuizBookMarks() {

    const [bookmarks, setBookMark] = useState([]);



    useEffect(() => {
        // 컴포넌트가 마운트되었을 때 스크롤 숨김
        document.body.style.overflow = "hidden";

        const memberId = localStorage.getItem("userId");
        getQuizExplain("kbreport@gmail.com")
            .then((data)=>
                setBookMark(data)
            ).catch((error)=>console.log(error))

        // 컴포넌트가 언마운트되었을 때 스크롤 복원
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    console.log(bookmarks)
    return (
        <>
            <Header/>
            <div style={{backgroundColor: '#f4eedd', height: window.innerHeight}}>
                <div style={{height: `50px`}}/>
                <Row style={{textAlign: `left`, margin: `0 0 0 10%`, color: `#3b3b3b`, fontSize: `30px`}}
                     className="kb-font-color d-flex flex-row justify-content-between">
                    <Col>
                        MY BOOKMARK
                    </Col>
                    <Col style={{textAlign: `right`, marginRight: `10%`, fontSize: `20px`}}>
                        {/*<button onClick={() => {*/}
                        {/*    console.log("쓸모가 없을까나..?")*/}
                        {/*}}>*/}
                        {/*    Just.. Button*/}
                        {/*</button>*/}
                        <img src={bm2} style={{width: `55px`}}/>
                    </Col>
                </Row>
                <div style={{height: `15px`}}/>
                <Col className="d-flex flex-column align-items-center justify-content-between">
                    {
                        bookmarks.map((a, i)=> {
                            return (
                                <Card bookmark={bookmarks[i]} i={i}/>
                            )
                        })
                    }
                </Col>
            </div>
        </>
    )
}