import './App.css';
import Characters from './Components/Characters';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import CardInfo from './Components/CardInfo';

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/characters" element={<Characters/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/character/:id" element={<CardInfo/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
