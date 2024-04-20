// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Main() {
//     const [num, setNum] = useState(0);
//     const [num2, setNum2] = useState(0);
//     const [name, setName] = useState('');
//     const [name2, setName2] = useState('');
//     const navigate = useNavigate();
//     const handleImageClick = () => {
//         navigate('/mimar');
//     };

//     // function increment() {
//     //     setNum(num + 1);
//     // }
//     function old() {
//         setNum2(num2 + 2);
//     }
//     function handleNameChanger(event) {
//         setName(event.target.value);
//     }
//     function handleName2Changer(event) {
//         setName2(event.target.value);
//     }
//     return (
//         <div>
//             <div>팩트체크</div>
//             <form>
//                 <label htmlFor="name">첫 번째 이름 :</label>
//                 <input id="name" type="text" value={name} onChange={handleNameChanger} />
//                 <br />
//                 <label htmlFor="name2">두 번째 이름 :</label>
//                 <input id="name2" type="text" value={name2} onChange={handleName2Changer} />
//             </form>
//             <div>{name}</div>
//             <div>{name2}</div>
//             <button
//                 onClick={() => {
//                     setNum(num + 1);
//                 }}
//             >
//                 click + 1
//             </button>
//             <button onClick={old}>클릭 + 1</button>
//             <p>
//                 신참 {name} 의 나이: {num}
//             </p>
//             <p>
//                 베테랑 {name2} 의 나이: {num2}
//             </p>
//             <img src="Diego.jpg" alt="DiegoRivera" style={{ cursor: 'pointer' }} onClick={handleImageClick} />
//         </div>
//     );
// }

// // export default Main;
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Main.css'; // Ensure your CSS file path is correct

// const artists = [
//     { name: 'Mimar Sinan', route: '/mimar' },
//     // Add the rest of your artists here with their names and routes
//     // { name: 'Artist Name', route: '/artist-route' },
// ];

// const Main = () => {
//     const navigate = useNavigate();

//     const redirectToArtist = (artistRoute) => {
//         navigate(artistRoute);
//     };

//     return (
//         <div className="main-container">
//             <div className="title-container">
//                 <h1 className="title">Jun Hyung Rhee Visual Map</h1>
//             </div>
//             <div className="map-container">
//                 {artists.map((artist, index) => (
//                     <button key={index} className="artist-button" onClick={() => redirectToArtist(artist.route)}>
//                         {artist.name}
//                     </button>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Main;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css'; // Ensure your CSS file path is correct

const artists = [
    { name: 'Mimar Sinan', route: '/Mimar' },
    { name: 'Katsushika Hokusai', route: '/Hokusai' },
    { name: 'Augustus Welby Northmore Pugin', route: '/Pugin' },
    { name: 'Gilbert Rohde', route: '/Rohde' },
    { name: 'Theo Van Doesburg', route: '/Doesburg' },
    { name: 'Diego Rivera', route: '/Rivera' },
];

const Main = () => {
    const navigate = useNavigate();

    const redirectToArtist = (artistRoute) => {
        navigate(artistRoute);
    };

    return (
        <div className="main-container">
            <h1 id="title">Jun Hyung Rhee Visual Map</h1>
            <div className="orbits-container">
                {artists.map((artist, index) => (
                    <div key={index} className={`orbit orbit-${index + 1}`}>
                        <button onClick={() => redirectToArtist(artist.route)}>{artist.name}</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Main;
