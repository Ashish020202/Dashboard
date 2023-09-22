"use client";
import Image from 'next/image'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage'
import Dashboard from './Pages/Dashboard'

export default function Home() {
  return (
  <Router>
     <Routes>
      <Route path={"/"} element={<Homepage />} />
      <Route path={"/Dashboard"} element={<Dashboard />} />
     </Routes>
  </Router>
    
  )
}
