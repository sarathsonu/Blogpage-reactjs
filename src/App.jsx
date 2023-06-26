import { useState } from 'react'
import { BrowserRouter ,Routes,  Route } from "react-router-dom";
import Topbar from './components/topbar/topbar'
import Home from './pages/homepage/Home'
// import Sidebar from './components/sidebar/Sidebar'  
import Write from './pages/write/Write'
import Single from './pages/single/single'
import Settings from './pages/settings/settings'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import './App.css'


function App() {
 const user=true;
  return (
    <BrowserRouter>
      <Topbar/>
     <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/login" element={user ?<Home/>:<Login/>}/>
      <Route  path="/register" element={user ?<Home/>:<Register/>}/>
      <Route  path="/write" element={user ?<Write/>:<Register/>}/>
      <Route  path="/settings" element={user ?<Settings/>:<Register/>}/>
      <Route  path="/post/:postId" element={<Single/>}/>
      </Routes>
      
        
    </BrowserRouter> 
  )
}

export default App
