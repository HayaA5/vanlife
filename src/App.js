import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
