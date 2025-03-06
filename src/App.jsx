import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Profile from './components/Profile'
import Cart from './Pages/Cart'
import Pizza from './Pages/Pizza'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'
import { UserProvider } from './context/UserContext'

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/pizza/p001' element={<Pizza />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </UserProvider>
  )
}
export default App
