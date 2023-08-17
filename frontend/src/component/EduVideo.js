import React, { useState, useEffect } from 'react';
import fetchYouTubeVideos from "../services/fetchYouTubeVideo";
import {Col, Row} from "react-bootstrap";
import Loading from "./Loading";

const EduVideo = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true);
        fetchYouTubeVideos()
            .then(items => {
                setVideos(items);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    let windowHeightHalfEight = window.innerHeight/30;

    return (
        <div>
            <Col>
                <Row style={{height: windowHeightHalfEight}} />
                <Row style={{height: windowHeightHalfEight*2, padding: `10px`, textAlign: `center`}}>
                    <span className="text-font-two" style={{fontColor: `white`, fontWeight: `700`, fontSize: `15px`, color: 'rgb(252, 175, 23)'}}>영상으로 알아보는 오늘의 금융 상식</span>
                </Row>
                <Row ms={5} style={{height: windowHeightHalfEight*26, padding: `0 30px 0 20px`}}>
                        {loading ? (
                            <Loading />
                        ) : (
                            <iframe width="360"
                                    height="200"
                                    src={`https://www.youtube.com/embed/${videos[0].id.videoId}`}
                                    title={videos[0].snippet.title}
                                    frameBorder="0"
                                    allowFullScreen
                            />
                        )}
                </Row>
            </Col>
        </div>
    )
}

export default EduVideo;