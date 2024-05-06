import React, { useRef, useEffect, useState } from 'react';
import HokusaiIMG from './assets/images/Hokusai.png';
import HokusaiExample from './assets/images/HokusaiExample.png';
import './Mimar.css'; // Make sure the path matches where your CSS file is located
import Backbutton from './BackButton';

const Hokusai = () => {
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
                    src={HokusaiIMG}
                    alt="hokusai-intro-1"
                    onClick={handleImageClick}
                    className="intro-image"
                />
            )}
            {pageVisible && (
                <>
                    <h2>Katsushika Hokusai</h2>
                    <img src={HokusaiIMG} alt="hokusai-intro-2" className="intro-image image-rotate image-scale" />
                    <p className="bio">
                        My art practice is different from what Hokusai did. I have never tried printing or ukiyo-e art
                        before. I, however, am interested in how to make my art pieces as a meme that survives through
                        centuries.
                    </p>
                    <img src={HokusaiExample} alt="hokusai-intro-3" className="example-img" />
                    <h3 className="btitle">Example of Work: The Island (2022) </h3>
                    <h2 className="stitle">Related to Mine</h2>
                    <p className="exm">
                        Although I seldom drew landscapes like Hokusai, I drew simulated island landscapes. This piece
                        was drawn after the pillows and a blanket on my bed. It is not colorful or energetic like
                        Hokusai's work, nor recognized as a masterpiece, but it is a piece that I can relate to, and my
                        mom likes mine more.^^
                    </p>
                    <p className="rlt"></p>
                    <audio ref={audioRef} controls onLoadStart={(e) => (e.target.volume = 0.25)} preload="auto">
                        <source src="./Hokusai.mp3" type="audio/mpeg" />
                        Your browser does not support the audio elements.
                    </audio>
                </>
            )}
        </div>
    );
};

export default Hokusai; // Named exports
