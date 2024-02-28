import React from 'react'
import Aboutus from '../About/Aboutus';
import Homepage from '../homep/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbr from '../Navbr/Navbr';




function Routers() {
  return (
    <Router>
      <Navbr/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/About' element={<Aboutus/>}></Route>
        
      </Routes>
    </Router>
  )
}

export default Routers
