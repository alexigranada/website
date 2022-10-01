import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './pages/Index';
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Header from './components/Header';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar></Navbar>
      
          <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
          </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
