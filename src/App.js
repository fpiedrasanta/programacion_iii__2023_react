import './App.css';
import NavBar from './components/NavBar/navBar';
import { Home } from './components/Home/home';
import { Bibliografias } from './components/Bibliografias/bibliografias';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/bibliografias" element={<Bibliografias />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
