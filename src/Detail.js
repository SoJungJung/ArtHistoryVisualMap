// import React, { useEffect, useRef } from 'react';
// import { useParams } from 'react-router-dom';

// // Assuming this data might be expanded or fetched from an API in the future
// const artistDetails = {
//     'mimar-sinan': {
//         name: 'Mimar Sinan',
//         description:
//             'The Sinan’s work does not have deep connections with mine, because Sinan focused on architecture, while I focus on the combination of art and technology. In terms of influence of various culture, however, I have some connections with his work, because I try to combine diverse cultures in my work.',
//     },
//     'katsushika-hokusai': {
//         name: 'Katshshika Hoskusai',
//         description:
//             'My art practice is different from what Hokusai did. I have never tried printing or ukiyo-e art before. I, however, am really interested in how to make my art pieces as a meme that survives through centuries.',
//     },
//     'awm-pugin': {
//         name: 'Augustus Welby Northmore Pugin',
//         description:
//             "Pugin's dedication resonates with my work in art and technology, inspiring me to infuse my creations with both innovation and a deeper, moral significance, akin to Pugin's integration of ethical considerations into his architectural masterpieces.",
//     },
//     'gilbert-rohde': {
//         name: 'Gilbert Rohde',
//         description:
//             'Rhodes and I have in common that I make art in a modernistic way. As I work on programming, my design and outlook are influenced by Modernism because it looks simply, which means the design does not interrupt the embedded software.',
//     },
//     'theo-van-doesberg': {
//         name: 'Theo Van Doesberg',
//         description:
//             "Theo van Doesberg's work can be related to my artworks in terms of choices of geometrical shapes. The difference is that van Doesberg chose rectangular shapes, but I often chose geometrical shapes for my art practice.",
//     },
//     'diego-rivera': {
//         name: 'Diego Rivera',
//         description:
//             'Rivera’s desire to make art accessible to everyday people resonates with my goal in art: to bring joy through the playful interactivity of my robots and websites, bridging the gap between the viewer and the artwork in innovative ways.',
//     },
//     // Other artists...
// };

// function Detail() {
//     let { artistName } = useParams();
//     const detail = artistDetails[artistName] || {};

//     return (
//         <div>
//             <h2>Details for {detail.name || artistName}</h2>
//             <p>{detail.description}</p>
//         </div>
//     );
// }

// function AutoPlayAudio({ src }) {
//     const audioRef = useRef(null);

//     useEffect(() => {
//         if (audioRef.current) {
//             audioRef.current.play().catch((error) => console.error('Audio autoplay failed', error));
//         }
//     }, [src]);

//     return (
//         <audio ref={audioRef} controls muted>
//             <source src={src} type="audio/mp3" />
//             Your browser does not support the audio element.
//         </audio>
//     );
// }

// // If you need to export both, you can't use export default for both.
// export { Detail, AutoPlayAudio };
