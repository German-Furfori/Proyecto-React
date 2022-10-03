import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Home from './components/Home';
import RickAndMortyApp from './components/RickAndMortyApp';
import About from './components/account/About';
import CardInfo from './components/CardInfo';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <ResponsiveAppBar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/characters" element={<RickAndMortyApp />} />
            <Route path="/about" element={<About/>} />
            <Route path="/character/:id" element={<CardInfo/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;