import React, { useRef, useState } from 'react';
import RohdeIMG from './assets/images/Rohde.png';
import RohdeExample from './assets/images/RohdeExample.png';
import './CSS/Mimar.css'; // Make sure the path matches where your CSS file is located
import Backbutton from './BackButton';

const Rohde = () => {
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

    return (
        <div className="container">
            <Backbutton />
            {!pageVisible && (
                <img
                    id="intro-image"
                    src={RohdeIMG}
                    alt="rohde-intro-1"
                    onClick={handleImageClick}
                    className="intro-image"
                />
            )}
            {pageVisible && (
                <>
                    <h2>Gilbert Rohde</h2>
                    <img src={RohdeIMG} alt="rohde-intro-2" className="intro-image image-rotate image-scale" />
                    <p className="bio">
                        Rohde and I have in common that I make art in a modernistic way. As I work on programming, my
                        Modernism influences design and outlook because it look simple, which means the design does not
                        interrupt the embedded software.
                    </p>
                    <img src={RohdeExample} alt="rohde-intro-3" className="example-img" />
                    <h3 className="btitle">Example of Work: Sketches of a Pencil Case (2022)</h3>
                    <h2 className="stitle">Related to Mine</h2>
                    <p className="exm">
                        I once tried designing a modernist mechanical pencil case. Although I didn't make a the real
                        version, I tried to implant a sense of modernism in the design.
                    </p>
                    <p className="rlt"></p>
                    <audio ref={audioRef} controls onLoadStart={(e) => (e.target.volume = 0.25)} preload="auto">
                        <source src="./Gilbert.mp3" type="audio/mpeg" />
                        Your browser does not support the audio elements.
                    </audio>
                </>
            )}
        </div>
    );
};

export default Rohde; // Named exports
