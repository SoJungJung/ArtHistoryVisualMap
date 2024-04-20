import React, { useRef, useEffect } from 'react';
import './Artist.css'; // Make sure the path matches where your CSS file is located

// Assuming you have images in your public folder or hosted online
const artistPhotoUrl = '/path-to-artist-photo.jpg'; // Replace with actual path
const exampleOfWorkUrl = '/path-to-example-work.jpg'; // Replace with actual path

const Rohde = () => {
    return (
        <div className="container">
            <img src={artistPhotoUrl} alt="Artist Photo" className="photo" />
            <h2>Gilbert Rohde</h2>
            <p className="bio">
                Rhodes and I have in common that I make art in a modernistic way. As I work on programming, my design
                and outlook are influenced by Modernism because it looks simply, which means the design does not
                interrupt the embedded software.
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

export { Rohde, AutoPlayAudio }; // Named exports
