import React, { useRef, useEffect } from 'react';
import './Artist.css'; // Make sure the path matches where your CSS file is located

// Assuming you have images in your public folder or hosted online
const artistPhotoUrl = '/path-to-artist-photo.jpg'; // Replace with actual path
const exampleOfWorkUrl = '/path-to-example-work.jpg'; // Replace with actual path

const Pugin = () => {
    return (
        <div className="container">
            <img src={artistPhotoUrl} alt="Artist Photo" className="photo" />
            <h2>Mimar Sinan</h2>
            <p className="bio">
                The Sinan’s work does not have deep connections with mine, because Sinan focused on architecture, while
                I focus on the combination of art and technology. In terms of influence of various culture, however, I
                have some connections with his work, because I try to combine diverse cultures in my work.
            </p>
            <h3>Example of Work</h3>
            <img src={exampleOfWorkUrl} alt="Example of Work" className="work-image" />
        </div>
    );
};

const AutoPlayAudio = ({ src }) => {
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play().catch((error) => console.error('Audio autoplay failed', error));
        }
    }, [src]);

    return (
        <audio ref={audioRef} controls muted>
            <source src={src} type="awake/mp3" />
            Your browser does not support the audio element.
        </audio>
    );
};

export { Pugin, AutoPlayAudio }; // Named exports
