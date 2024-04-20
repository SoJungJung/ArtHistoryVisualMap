import React, { useEffect, useState } from 'react';

const IntroVideo = ({ onVideoEnd }) => {
    const [showVideo, setShowVideo] = useState(true);

    useEffect(() => {
        // Optionally, hide the video after a certain time if needed
        // setTimeout(() => setShowVideo(false), 10000); // 10 seconds
    }, []);

    return showVideo ? (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1000 }}>
            <video
                style={{ width: '100%', height: '100%' }}
                src="/VisualMapOpening.mp4" // Update this path
                autoPlay
                onEnded={() => {
                    setShowVideo(false);
                    if (onVideoEnd) onVideoEnd();
                }}
                muted
            ></video>
        </div>
    ) : null;
};

export default IntroVideo;
