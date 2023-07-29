import React from 'react'
import IphoneProMax from './components/Home3/IphoneProMax'
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Home2 from './components/Home2/Home2'
import Mainpage from './components/Mainpage/Mainpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Mainpage/>} />
      <Route path="/home2" element={<Home2/>} />
      <Route path="/home3" element={<IphoneProMax/>} />
      <Route path="/login" element={<Login/>} />
        <Route path="/registration" element={<Registration/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
