import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
import Home from './components/home/Home.jsx';
import Footer from './components/footer/Footer.jsx';
import Articles from './components/articles/Articles';
import Contactus from './components/contactus/contactus';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
