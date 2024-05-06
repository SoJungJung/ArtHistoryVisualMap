import React, { useRef, useEffect, useState } from 'react';
import './junhyung.css'; // Make sure the path matches where your CSS file is located
import Backbutton from './BackButton';
import JHImg from './assets/images/jh.png';

const JunHyung = () => {
    const audioRef = useRef();
    const [pageVisible, setPageVisible] = useState(false);
    const [audioPlaying, setAudioPlaying] = useState(false);

    const handleImageClick = () => {
        setPageVisible(true);

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
            {pageVisible && (
                <>
                    <img src={JHImg} alt="Example-Image" className="wnsgud" />
                    <h2 className="jhtitle">One Page Explanation</h2>
                    <p className="biograph">
                        I have designed an orbital system with various artists conceptualized as planets revolving
                        around a central sun—myself. This system metaphorically captures the dynamic influences between
                        these seven artists and me. Each planet, distinct in portraits and names, symbolizes my personal
                        connection with each artist, reflecting inspiration and interpretation. I am positioned at the
                        center of this orbital system, embodying the core from which all artistic interactions emanate.
                        This central placement, inspired by my mother’s affirmation that I am the protagonist of my own
                        life, signifies the personal perspective from which I view and engage with the art world. Each
                        artist represents a planet orbiting the central sun. These planets are at the same distance from
                        the sun, emphasizing my view of their equal importance in shaping my artistic view. The size of
                        each planet is also the same to equally mention each artist’s context to me. Upon entering the
                        orbit of each planet (Clicking the planets), visitors can listen to the background music that I
                        associate with each artist. This element provides an auditory experience, enhancing and
                        deepening the connection to each artist's thematic or emotional influence. Each planet hosts
                        galleries of famous works by the represented artist alongside my own artworks. This
                        juxtaposition highlights the dialogue between their creations and mine, illustrating direct
                        influences or thematic parallels. While the map does not explicitly emphasize geographical
                        connections, its arrangement on a common orbital plane metaphorically places each artist within
                        the same universal 'artistic space' I navigate, regardless of their historical or cultural
                        origins. This visual map is an interactive modeled website that captures the sense of artistic
                        influence as a living, evolving dialogue. Each element of the map, from the consistent distances
                        to the music, has been crafted to offer insights into the complex interplay of inspirations to
                        shape my journey as an artist. Through this orbital system, I invite viewers to explore the
                        gravitational pull of artistic influences that orbit the central sun—my artistic identity.
                    </p>
                    <br />
                    <audio ref={audioRef} controls onLoadStart={(e) => (e.target.volume = 0.25)} preload="auto">
                        <source src="./OnePageEx.mp3" type="audio/mpeg" />
                        Your browser does not support the audio elements.
                    </audio>
                </>
            )}
        </div>
    );
};

export default JunHyung;
