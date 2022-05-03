
import './App.css';
import Nav from './components/nav/nav';
import About from './components/about/about'
import Home from './components/home/home'
import Projects from './components/projects/project'
import Contact from './components/contact/Contact.jsx'
import BecomeShaper from './components/joinUs/Shaper'
import Impacts from './components/projects/impact/Impacts'
import Details from './components/projects/details/ProjectDetails'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/become-a-shaper" element={<BecomeShaper/>}/>
          <Route path="/project-impacts" element={<Impacts/>}/>
          <Route path="/project-details" element={<Details/>}/>
          {/* <Route path='*' element={<PageNotFound/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
