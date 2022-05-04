
import './App.css';
import Nav from './components/nav/nav';
import AboutShapers from './components/about/AboutShapers'
import Home from './components/home/home'
import Projects from './components/projects/project'
import Contact from './components/contact/Contact.jsx'
import BecomeShaper from './components/joinUs/Shaper'
import Impacts from './components/projects/impact/Impacts'
import Details from './components/projects/details/ProjectDetails'
import AboutUs from './components/about/AboutUs'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="App">
      <Router>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about-shapers" element={<AboutShapers/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/become-a-shaper" element={<BecomeShaper/>}/>
          <Route path="/project-impacts" element={<Impacts/>}/>
          <Route path="/project-details" element={<Details/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
