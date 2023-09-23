"use client";
// import Image from 'next/image'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Home/Homepage'
import Dashboard from './Pages/Dashboard'
import Link from 'next/link'

export default function Home() {
  
  return (
  
  // <Router>
  //    <Routes>
  //     <Route path={"/"} element={<Homepage />} />
  //     <Route path={"/Dashboard"} element={<Dashboard />} />
  //    </Routes>
  // </Router>
   
  // <Homepage />
  // <Dashboard />

  // <ul>
  //     <li>
  //       <Link href="/">
  //         <a><Homepage /></a>
  //       </Link>
  //     </li>
  //     <li>
  //       <Link href="/dashboard">{<Dashboard />}</Link>
  //     </li>
    
  //   </ul>
  // {/* <Homepage /> */}
  <ul>
    {/* <Link legacyBehavior href="/"  passHref={true}>
      <a><Homepage /></a>
    </Link> */}

    <Link legacyBehavior href="/Dashboard"  passHref={true}>
      <a><Dashboard /></a>
    </Link>
  </ul>
    
    
    
  )
}
