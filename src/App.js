/*eslint-disable*/

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Navibar from "./components/Navibar.js";
import Login from "./components/Login.js";
import SignUp from "./components/SignUp.js";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <div>
    <Navibar/>
    메인페이지
    </div>
    <div>
    <Routes>
        
{/*}
        <Route path="/menu1" element={Link}/>
        <Route path="/menu2" element={Link}/>
        <Route path="/menu3" element={Link}/>
        <Route path="/menu4" element={Link}/>
        <Route path="/menu5" element={Link}/>
        <Route path="/menu6" element={Link}/> */}

        <Route path="/Login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
    </Routes>
    </div>

    </>
  );
}

export default App;
