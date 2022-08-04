import './App.css';
import Characters from './components/Characters';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import CardInfo from './components/CardInfo';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { RickAndMortyApp } from './components/RickAndMortyApp';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ResponsiveAppBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/characters" element={<Characters/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/character/:id" element={<CardInfo/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

/* 

*/
