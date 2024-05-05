import React, { useRef, useEffect, useState } from 'react';
import VanIMG from './assets/images/Van.png';
import VanExample from './assets/images/VanExample.png';
import './Mimar.css'; // Make sure the path matches where your CSS file is located
import Backbutton from './BackButton';

const Doesberg = () => {
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
                    src={VanIMG}
                    alt="Intro-Image"
                    onClick={handleImageClick}
                    className="intro-image"
                />
            )}
            {pageVisible && (
                <>
                    <h2>Theo van Doesberg</h2>
                    <img src={VanIMG} alt="Intro-Image" className="intro-image image-rotate image-scale" />
                    <p className="bio">
                        Theo van Doesberg's work can be related to my artworks in terms of choices of geometrical
                        shapes. The difference is that van Doesberg chose rectangular shapes, but I often chose other
                        geometrical shapes rather than rectangular for my art practice.
                    </p>
                    <img src={VanExample} alt="Example-Image" />
                    <h3>Example of Work: Untitled (2023)</h3>
                    <h2>Related to Mine</h2>
                    <p className="exm">
                        just like van Doesberg's work, this piece has diagonal, and geometrical shapes and strong, bold
                        colors. The difference is that this piece has a FM radio transmitter inside.
                    </p>
                    <p className="rlt"></p>
                    <audio ref={audioRef} controls onLoadStart={(e) => (e.target.volume = 0.25)} preload="auto">
                        <source src="./Theo.mp3" type="audio/mpeg" />
                        Your browser does not support the audio elements.
                    </audio>
                </>
            )}
        </div>
    );
};

export default Doesberg; // Named exports
