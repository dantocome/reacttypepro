import React from 'react'
import About from '../about/About'
import Home from '../Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '../navbar/Navbar'

function RouterApp() {
  return (
    <Router>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}></Route>
        </Routes>
    </Router>
  )
}

export default RouterApp
