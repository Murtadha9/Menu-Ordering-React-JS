import React from 'react'
import Home from './pages/Home/Home'
import {  Routes, Route} from 'react-router-dom';
import Done from './pages/Done/Done';
import Cancel from './pages/Cancel/Cancel';
import Payment from './components/Payment/Payment';

const App = () => {
  return (
    <div>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/payment"  element={<Payment/>}/>
      <Route path="/done" element={<Done/>}/>
      <Route path="/cancel"  element={<Cancel/>}/>
    </Routes>
      
    </div>
  )
}

export default App
