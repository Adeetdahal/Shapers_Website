
import './App.css';
import Nav from './components/nav/nav';
import About from './components/about/about'
import Home from './components/home/home'
import Projects from './components/projects/project'
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
          {/* <Route path="*" element={<ErrorPage/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
