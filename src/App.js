import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './pages/Index';
import About from './pages/About';
import Contacto from './pages/Contacto';
import Geovisor from './pages/Geovisor';
import Navbar from './components/Navbar';
import Aside from './components/Aside';
import Cover from './components/Cover';
import Header from './components/Header';



function App() {
  return (
    <BrowserRouter>
      <header>
        <Aside></Aside>
        <main>
          <Cover></Cover>
          <Navbar></Navbar>
          <Routes>
              <Route exact path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/geovisor" element={<Geovisor />} />
          </Routes>
        </main>
      </header>
    </BrowserRouter>
  );
}

export default App;
