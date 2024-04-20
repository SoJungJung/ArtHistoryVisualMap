import React, { useRef, useEffect } from 'react';
import './Artist.css'; // Make sure the path matches where your CSS file is located

// Assuming you have images in your public folder or hosted online
const artistPhotoUrl = '/path-to-artist-photo.jpg'; // Replace with actual path
const exampleOfWorkUrl = '/path-to-example-work.jpg'; // Replace with actual path

const Hokusai = () => {
    return (
        <div className="container">
            <img src={artistPhotoUrl} alt="Artist Photo" className="photo" />
            <h2>Katshshika Hoskusai</h2>
            <p className="bio">
                My art practice is different from what Hokusai did. I have never tried printing or ukiyo-e art before.
                I, however, am really interested in how to make my art pieces as a meme that survives through centuries.
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

export { Hokusai, AutoPlayAudio }; // Named exports
