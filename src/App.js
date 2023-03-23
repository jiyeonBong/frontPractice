/*eslint-disable*/

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import VirtualInvesting from './components/VirtualInvesting.js';
import AutoTrading from './components/AutoTrading.js';
import BackTesting from './components/BackTesting.js';
import CoinNews from './components/CoinNews.js';
import CreateModel from './components/CreateModel.js';
import Login from './components/Login.js';
import SignUp from './components/SignUp.js';
import Navibar from './components/Navibar.js';
import Notice from './components/Notice.js';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <div>
    <Navibar/>

    </div>
    <div>
    <Routes>

        <Route path="/createmodel" element={<CreateModel/>}/>
        <Route path="/backtesting" element={<BackTesting/>}/>
        <Route path="/virtualinvest" element={<VirtualInvesting/>}/>
        <Route path="/autotrading" element={<AutoTrading/>}/>
        <Route path="/coinnews" element={<CoinNews/>}/>
        <Route path="/notice" element={<Notice/>}/>

        <Route path="/Login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
    </Routes>
    </div>

    </>
  );
}

export default App;
