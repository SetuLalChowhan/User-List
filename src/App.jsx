import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import User from './pages/User'

function App() {


  return (
   <>
  <Router>
    <Header/>
    <Routes>
      <Route path='/' element ={<Home/>} />
      <Route path='/:id' element ={<User/>} />
    </Routes>
  </Router>
   
   </>
  )
}

export default App
