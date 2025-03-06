import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: '',
    token: ''
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token') || ''
      setUser((prevUser) => ({ ...prevUser, token }))
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (user.token) {
        localStorage.setItem('token', user.token)
      } else {
        localStorage.removeItem('token')
      }
    }
  }, [user.token])

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password })
      const data = response.data
      setUser({ email: data.email, token: data.token })
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', data.token)
      }
    } catch (error) {
      console.error('Error during login:', error)
      throw error
    }
  }

  const register = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', { email, password })
      const data = response.data
      setUser({ email: data.email, token: data.token })
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', data.token)
      }
    } catch (error) {
      console.error('Error during registration:', error)
      throw error
    }
  }

  const logout = () => {
    setUser({ email: '', token: '' })
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token')
    }
  }

  const getUserProfile = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/auth/me', {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      return response.data
    } catch (error) {
      console.error('Error fetching user profile:', error)
      throw error
    }
  }

  return (
    <UserContext.Provider value={{ user, login, register, logout, getUserProfile }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }
