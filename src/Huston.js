import React, { useRef, useEffect, useState } from 'react';
import HustonIMG from './assets/images/Huston.jpeg';
import HustonExample from './assets/videos/Example.mp4';
import './Mimar.css'; // Make sure the path matches where your CSS file is located
import Backbutton from './BackButton';

const Huston = () => {
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
                    src={HustonIMG}
                    alt="Intro-Image"
                    onClick={handleImageClick}
                    className="intro-image"
                />
            )}
            {pageVisible && (
                <>
                    <h2>John Huston</h2>
                    <img src={HustonIMG} alt="Intro-Image" className="hst" />
                    <p className="bio">
                        I also tried to become a filmmaker, just like John Huston did. But the connection between him
                        and me lies in the fact that we have different editing styles. While John Huston makes
                        slow-paced, Noir, hard-boiled films with almost no background music, I prefer fast-paced and
                        dynamic background music.
                    </p>
                    <video src={HustonExample} controls alt="Example-Image" className="example-img" />
                    <h3>Example of Work: Rip it, Cut it, and Slice it (2023) </h3>
                    <h2>Related to Mine</h2>
                    <p className="exm">
                        Although the styles differ, I want to be a great artist like John Huston someday. This video was
                        an assignment for FVMNA class, and I tried to make a video that is similar to Youtube highlight
                        reels. It was a fun project, and I learned a lot from it.
                    </p>
                    <p className="rlt"></p>
                    <audio ref={audioRef} controls onLoadStart={(e) => (e.target.volume = 0.25)} preload="auto">
                        <source src="./Huston.mp3" type="audio/mpeg" />
                        Your browser does not support the audio elements.
                    </audio>
                </>
            )}
        </div>
    );
};

export default Huston; // Named exports
