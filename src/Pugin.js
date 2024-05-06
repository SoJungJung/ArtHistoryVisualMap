import React, { useRef, useEffect, useState } from 'react';
import PuginIMG from './assets/images/Pugin.png';
import PuginExample from './assets/images/PuginExample.png';
import './Mimar.css'; // Make sure the path matches where your CSS file is located
import Backbutton from './BackButton';

const Pugin = () => {
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
                    src={PuginIMG}
                    alt="Intro-Image"
                    onClick={handleImageClick}
                    className="intro-image"
                />
            )}
            {pageVisible && (
                <>
                    <h2>AWM Pugin</h2>
                    <img src={PuginIMG} alt="Intro-Image" className="intro-image image-rotate image-scale" />
                    <p className="bio">
                        Pugin's dedication resonates with my work in art and technology, inspiring me to infuse my
                        creations with both innovation and a deeper moral significance, akin to Pugin's integration of
                        ethical considerations into his architectural masterpieces.
                    </p>
                    <img src={PuginExample} alt="Example-Image" className="example-img" />
                    <h3 className="btitle">Example of Work: P.A.U.L. (2024) </h3>
                    <h2 className="stitle">Related to Mine</h2>
                    <p className="exm">
                        P.A.U.L. used to be a 10$ toy RC car. After hacking and adjustment, the viewers (at least in my
                        class) I liked this piece and considered it cute. I never thought of moral or spritual
                        significance in this piece, but I think the viewers added some.
                    </p>
                    <p className="rlt"></p>
                    <audio ref={audioRef} controls onLoadStart={(e) => (e.target.volume = 0.25)} preload="auto">
                        <source src="./Pugin.mp3" type="audio/mpeg" />
                        Your browser does not support the audio elements.
                    </audio>
                </>
            )}
        </div>
    );
};

export default Pugin; // Named exports
