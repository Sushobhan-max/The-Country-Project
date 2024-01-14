import './App.css';
import Country from './components/Country';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About'
import Footer from './components/Footer';
import './Res.css'
import Contact from './components/Contact';
import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar';

function App() {

  const [progress, setprogress] = useState(0)

  return (
    <div className="">
      <Router>
        <LoadingBar
          height={2}
          color='#f11946'
          progress={progress}
        />

        <Navbar />

        <Routes>
          <Route path="/" element={<Country setprogress={setprogress} />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
