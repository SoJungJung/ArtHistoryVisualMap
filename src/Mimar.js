import React, { useRef, useEffect, useState } from 'react';
import MimarImg from './assets/images/Mimar.png';
import MimarExample from './assets/images/MimarExample.png';
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
                    alt="mimar-intro-1"
                    onClick={handleImageClick}
                    className="intro-image"
                />
            )}
            {pageVisible && (
                <>
                    <h2>Mimar Sinan</h2>
                    <img src={MimarImg} alt="mimar-intro-2" className="intro-image image-rotate image-scale" />
                    <p className="bio">
                        Sinan’s work does not have deep connections with mine because Sinan focused on architecture,
                        while I focused on combining art and technology. In terms of the influence of various cultures,
                        however, I have some connections with his work because I try to combine diverse cultures.
                    </p>
                    <img src={MimarExample} alt="mimar-intro-3" className="example-img" />
                    <h3 className="btitle">
                        Example of Work: 망운지정(How a child away from home misses their parents) (2023){' '}
                    </h3>
                    <h2 className="stitle">Related to Mine</h2>
                    <p className="exm">
                        I tried to mix different cultures like Mimar Sinan by mixing the concept of "mangunjijeong," an
                        the archaic surname from my homeland, South Korea, with sculpture and technology. This piece is
                        a dedication to my father, who always works hard fro his family.
                    </p>
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
