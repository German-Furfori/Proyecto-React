import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Home from './components/Home';
import RickAndMortyApp from './components/RickAndMortyApp';
import Profile from './components/account/Profile';
import CardInfo from './components/CardInfo';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return ( // https://youtu.be/ZXiJdEWVcqY VIDEO DE RUTAS PRIVADAS
    <>
      <Provider store={store}>
        <BrowserRouter>
          <ResponsiveAppBar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/characters" element={<RickAndMortyApp />} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/character/:id" element={<CardInfo/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;

/* 

<Provider store={store} >
        <AuthContextProvider>
          <BrowserRouter>
            <ResponsiveAppBar/>
            <Routes>
              <Route path="/" element={<PublicRoute />}>
                <Route path="/home" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
              </Route>
              <Route path="/app" element={<PrivateRoute/>}>
                <Route path="/characters" element={<RickAndMortyApp/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/logout" element={<Logout/>} />
                <Route path="/character/:id" element={<CardInfo/>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthContextProvider>
      </Provider>

*/
