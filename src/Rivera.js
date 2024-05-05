import React, { useRef, useEffect, useState } from 'react';
import RiveraIMG from './assets/images/Rivera.png';
import RiveraExample from './assets/images/RiveraExample.png';
import './Mimar.css'; // Make sure the path matches where your CSS file is located
import Backbutton from './BackButton';

const Rivera = () => {
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
                    src={RiveraIMG}
                    alt="Intro-Image"
                    onClick={handleImageClick}
                    className="intro-image"
                />
            )}
            {pageVisible && (
                <>
                    <h2>Diego Rivera</h2>
                    <img src={RiveraIMG} alt="Intro-Image" className="intro-image image-rotate image-scale" />
                    <p className="bio">
                        Rivera’s desire to make art accessible to everyday people resonates with my goal in art: to
                        bring joy through the playful interactivity of my robots and websites, bridging the gap between
                        the viewer and the artwork in innovative ways.
                    </p>
                    <img src={RiveraExample} alt="Example-Image" className="example-img" />
                    <h3>Example of Work: Mosaicsphere (2024)</h3>
                    <h2>Related to Mine</h2>
                    <p className="exm">
                        Mosaicsphere is a user-collaborating collage maker website. I focused on the interactivity on
                        This website is meant to bridge not only me and the users but also among the users.
                    </p>
                    <p className="rlt"></p>
                    <audio ref={audioRef} controls onLoadStart={(e) => (e.target.volume = 0.25)} preload="auto">
                        <source src="./Rivera.mp3" type="audio/mpeg" />
                        Your browser does not support the audio elements.
                    </audio>
                </>
            )}
        </div>
    );
};

export default Rivera; // Named exports
