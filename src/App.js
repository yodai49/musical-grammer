import {BrowserRouter, Route, Routes} from "react-router-dom";

import Introduction from './components/0. Introduction/Introduction';
import NaturalNote from './components/1. Note/NaturalNote';
import DerivedNote from './components/1. Note/DerivedNote';
import MajorScale from  './components/2. Scale/MajorScale';
import MinorScale from "./components/2. Scale/MinorScale";
import Interval1 from './components/4. Chord/Interval1';
import Interval2 from './components/4. Chord/Interval2';
import Chord from './components/4. Chord/Chord';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

import './css/custom.css';
import './css/footer.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Introduction />} />

            <Route path="/Introduction" element={<Introduction />} />
            <Route path="/NaturalNote" element={<NaturalNote />} />
            <Route path="/DerivedNote" element={<DerivedNote />} />

            <Route path="/MajorScale" element={<MajorScale />} />
            <Route path="/MinorScale" element={<MinorScale />} />

            <Route path="/Interval1" element={<Interval1 />} />
            <Route path="/Interval2" element={<Interval2 />} />
            <Route path="/Chord" element={<Chord />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
