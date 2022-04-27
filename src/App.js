
import './App.css';
import Nav from './components/nav/nav';
import About from './components/about/about'
import Home from './components/home/home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
