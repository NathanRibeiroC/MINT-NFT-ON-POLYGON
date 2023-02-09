import HomePage from './pages/Home/HomePage'
import React from "react";
import HomeNavbar from './components/HomeComponents/HomeNavbar/HomeNavbar'
import './App.scss'
import {Route, Routes} from "react-router-dom";
import TestPage from './pages/Home/TestPage';

function App() {

  return (
    <React.Fragment>
      <Routes>
        <Route path="" element={<TestPage/>}/>
        <Route path="/h" element={<HomePage/>}/>
      </Routes>
    </React.Fragment>
  )
}

export default App
