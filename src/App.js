import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import { Mimar } from "./Mimar"; // Ensure Mimar is correctly imported
import { Rivera } from "./Rivera";
import { Doesberg } from "./Doesburg";
import { Pugin } from "./Pugin";
import { Rohde } from "./Rohde";
import { Hokusai } from "./Hokusai";
import IntroVideo from "./IntroVideo";
import BaboQueen from "./BaboQueen";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mimar" element={<Mimar />} />
          <Route path="/rivera" element={<Rivera />} />
          <Route path="/doesberg" element={<Doesberg />} />
          <Route path="/pugin" element={<Pugin />} />
          <Route path="/rohde" element={<Rohde />} />
          <Route path="/hokusai" element={<Hokusai />} />
          <Route path="/introvideo" element={<IntroVideo />} />
          <Route path="/baboqueen" element={<BaboQueen />} />
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
