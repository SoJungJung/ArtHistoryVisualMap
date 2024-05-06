import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css'; // Ensure your CSS file path is correct
import JHImg from './assets/images/jh.png';

import Hokusai from './assets/images/Hokusai.png';
import Mimar from './assets/images/Mimar.png';
import Rivera from './assets/images/Rivera.png';
import Rohde from './assets/images/Rohde.png';
import Van from './assets/images/Van.png';
import Huston from './assets/images/Huston.jpeg';
import Pugin from './assets/images/Pugin.png';

const imageArray = [Hokusai, Mimar, Rivera, Rohde, Van, Huston, Pugin];

const artists = [
    { name: 'Katsushika Hokusai', route: '/hokusai' },
    { name: 'Mimar Sinan', route: '/mimar' },
    { name: 'Diego Rivera', route: '/rivera' },
    { name: 'Gilbert Rohde', route: '/rohde' },
    { name: 'Theo Van Doesburg', route: '/doesberg' },
    { name: 'John Huston', route: '/huston' },
    { name: 'Augustus Welby Northmore Pugin', route: '/pugin' },
];

const Main = () => {
    const navigate = useNavigate();

    const [hoverIndex, setHoverIndex] = useState(null);

    const handleJHClick = () => {
        navigate('/junhyung');
    };

    return (
        <div className="main-container">
            <h1 id="title" className="title">
                Jun Hyung Rhee Visual Map
            </h1>
            <img src={JHImg} alt="JHImg" className="sun" onClick={handleJHClick} />
            {/* <div className="orbits-container">
        {artists.map((artist, index) => (
          <div key={index} className={`orbit orbit-${index + 1}`}>
            <button onClick={() => redirectToArtist(artist.route)}>{artist.name}</button>
          </div>
        ))}
      </div> */}
            <div className="solor-system">
                {imageArray.map((image, index) => (
                    <>
                        <div
                            key={index}
                            className="orbit"
                            style={{ '--i': index }}
                            onMouseEnter={() => setHoverIndex(index)}
                            onMouseLeave={() => setHoverIndex(null)}
                            onClick={() => navigate(artists[index].route)}
                        >
                            <img src={image} alt={artists[index].name} className="planet" />
                        </div>
                        <div className="hoverIndex">
                            {' '}
                            {hoverIndex === index && <div className="tooltip">{artists[index].name}</div>}
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default Main;
