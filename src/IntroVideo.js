import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 임포트
import introVideo from './assets/videos/VisualMapOpening.mp4';
import './IntroVideo.css';

const IntroVideo = ({ onVideoEnd }) => {
    const [showVideo, setShowVideo] = useState(true);
    const navigate = useNavigate();
    const [pageVisible, setPageVisible] = useState(false);
    const videoRef = useRef(null); //

    const handlePlayVideo = () => {
        setShowVideo(true);
        if (videoRef.current) {
            videoRef.current.play();
        }
    }; // useNavigate 훅 사용

    // 비디오 재생이 끝난 후 호출할 함수
    const handleVideoEnd = () => {
        if (onVideoEnd) {
            onVideoEnd(); // 부모 컴포넌트의 onVideoEnd 함수를 호출합니다 (있는 경우).
        }
        navigate('/main'); // 메인 페이지로 이동합니다.
    };

    return (
        <>
            {!pageVisible && !showVideo && (
                <div>
                    <button onClick={handlePlayVideo} className="PlayButton">
                        play video
                    </button>
                </div>
            )}
            {showVideo && (
                <div>
                    <video
                        autoPlay
                        loop={false} // 반복 재생하지 않도록 수정합니다.
                        style={{ width: '100%' }}
                        onEnded={handleVideoEnd} // 비디오 재생이 끝나면 handleVideoEnd 함수를 호출합니다.
                        controls // 비디오 컨트롤을 활성화합니다.
                        ref={videoRef}
                    >
                        <source src={introVideo} type="video/mp4" />
                    </video>
                </div>
            )}
        </>
    );
};

export default IntroVideo;
