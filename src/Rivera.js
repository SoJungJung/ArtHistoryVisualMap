import React, { useRef, useEffect } from 'react';
import './Artist.css'; // Make sure the path matches where your CSS file is located

// Assuming you have images in your public folder or hosted online
const artistPhotoUrl = '/path-to-artist-photo.jpg'; // Replace with actual path
const exampleOfWorkUrl = '/path-to-example-work.jpg'; // Replace with actual path

const Rivera = () => {
    return (
        <div className="container">
            <img src={artistPhotoUrl} alt="Artist Photo" className="photo" />
            <h2>Diego Rivera</h2>
            <p className="bio">
                Rivera’s desire to make art accessible to everyday people resonates with my goal in art: to bring joy
                through the playful interactivity of my robots and websites, bridging the gap between the viewer and the
                artwork in innovative ways.
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

export { Rivera, AutoPlayAudio }; // Named exports
