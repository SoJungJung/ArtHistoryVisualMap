import React from 'react';
import './CSS/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Mimar from './Mimar';
import JunHyung from './JunHyung';
import Rivera from './Rivera';
import Doesberg from './Doesberg';
import Pugin from './Pugin';
import Rohde from './Rohde';
import Hokusai from './Hokusai';
import IntroVideo from './IntroVideo';
import Huston from './Huston';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<IntroVideo />} />
                    <Route path="/main" element={<Main />} />
                    <Route path="/junhyung" element={<JunHyung />} />
                    <Route path="/mimar" element={<Mimar />} />
                    <Route path="/rivera" element={<Rivera />} />
                    <Route path="/doesberg" element={<Doesberg />} />
                    <Route path="/pugin" element={<Pugin />} />
                    <Route path="/rohde" element={<Rohde />} />
                    <Route path="/hokusai" element={<Hokusai />} />
                    <Route path="/huston" element={<Huston />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

// function App() {
//     const [videoEnded, setVideoEnded] = useState(false);

//     return (
//         <div className="App">
//             {!videoEnded && <IntroVideo onVideoEnd={() => setVideoEnded(true)} />}
//             {videoEnded && (
//                 <Router>
//                     <Routes>
//                         <Route path="/" element={<Main />} />
//                         <Route path="/mimar" element={<Mimar />} />
//                     </Routes>
//                 </Router>
//             )}
//         </div>
//     );
// }

// export default App;
