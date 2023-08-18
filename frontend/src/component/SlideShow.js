// SlideShow.js
import React, { useState, useEffect } from 'react';
import Slide from './Slide'; // 슬라이드 쇼 스타일을 정의한 CSS 파일
import h1 from '../assets/h1.jpg';
import h2 from '../assets/h2.jpg';
import h3 from '../assets/h3.jpg';

const images = [
    h1,
    h2,
    h3,
    // ... 추가 이미지 경로들
];

const SlideShow = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    // const goToSlide = (index) => {
    //     setCurrentSlideIndex(index);
    // };

    return (
        <div className="slide-show">
            <Slide image={images[currentSlideIndex]} />
        </div>
    );
};
export default SlideShow;
