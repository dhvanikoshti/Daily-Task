import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Home from './Props/home'
// import Contact from './contact.jsx'
import Navbar from './Navbar.jsx'
import Task1 from './Task1/Task1.jsx'
import Task2 from './Task2/Task2.jsx'
import Day2_Task2 from './Task2/Day2_Task2.jsx'
import ImageData from './Task3/ImageData.jsx'
import Navigate from './Task4-Navigation/Navigate.jsx'
import Home  from "./Task4-Navigation/Pages/Home"
import About from "./Task4-Navigation/Pages/About" 
import Contact from "./Task4-Navigation/Pages/Contact"
import Profile from "./Task4-Navigation/Pages/Profile"
import Mainpage from './Scrollbar-Navigation/Mainpage.jsx'

import { createContext } from 'react'
export const UserContext = createContext();


function App() {
  const str = "Dhvani Koshti"
  return (
    <>
      {/* <Router> */}
        {/* <Navbar /> */}
          {/* <UserContext.Provider value={{str}}>
        <Routes>
            <Route path="/" element={<ImageData />} /> */}
            {/* <Route path="/menu" element={<Menu />} />  */}
            {/* <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
        </Routes>
          </UserContext.Provider>
      </Router> */}
      {/* =============================Props============================ */}

      {/* <Home a="1.  " str="Dhvani :)" />  
      <Home a="2.  " str="Esha :)" />   */}

      {/* =============================Task1============================ */}

      {/* <Task1 /> */}

      {/* =============================Task2============================ */}

      {/* <Task2/> */}
      {/* <Day2_Task2 /> */}

      {/* =============================Task3============================ */}
      
      {/* <ImageData/> */}

      {/* =================Task4 (Navigation With Router)================ */}

      <Router> 
        <Navigate /> 
        <UserContext.Provider value={{str}}>
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/About" element={<About />} /> 
          <Route path="/Contact" element={<Contact />} /> 
          <Route path="/Profile" element={<Profile />} /> 
          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} /> 
        </Routes> 
      </UserContext.Provider>
      </Router>

      {/*============================ Scrollbar Navigation===================*/}
      {/* <Mainpage /> */}
        

    </>
  )
}

export { App }
