import React, { useRef, useEffect, useState } from 'react';
import MimarImg from './assets/images/Mimar.png';
import './Mimar.css'; // Make sure the path matches where your CSS file is located
import Backbutton from './BackButton';

const Mimar = () => {
    const audioRef = useRef();
    const [pageVisible, setPageVisible] = useState(false);
    const [audioPlaying, setAudioPlaying] = useState(false);

    const handleImageClick = () => {
        setPageVisible(true);
        document.getElementById('intro-image').classList.add('fade-out');
        setTimeout(() => {
            if (audioRef.current && !audioPlaying) {
                audioRef.current.play();
                setAudioPlaying(true);
            }
        }, 1000);
    };
    useEffect(() => {
        setTimeout(() => {}, 2000);
        handleImageClick();
    }, []);
    return (
        <div className="container">
            <Backbutton />
            {!pageVisible && (
                <img
                    id="intro-image"
                    src={MimarImg}
                    alt="Intro-Image"
                    onClick={handleImageClick}
                    className="intro-image"
                />
            )}
            {pageVisible && (
                <>
                    <h2>Mimar Sinan</h2>
                    <img src={MimarImg} alt="Intro-Image" className="intro-image image-rotate image-scale" />
                    <p className="bio">
                        The Sinan’s work does not have deep connections with mine, because Sinan focused on
                        architecture, while I focus on the combination of art and technology. In terms of influence of
                        various culture, however, I have some connections with his work, because I try to combine
                        diverse cultures in my work.
                    </p>
                    <h3>Example of Work</h3>
                    <h2>Related to Mine</h2>
                    <p className="rlt"></p>
                    <audio ref={audioRef} controls onLoadStart={(e) => (e.target.volume = 0.25)} preload="auto">
                        <source src="./awake.mp3" type="audio/mpeg" />
                        Your browser does not support the audio elements.
                    </audio>
                </>
            )}
        </div>
    );
};

export default Mimar; // Named exports
