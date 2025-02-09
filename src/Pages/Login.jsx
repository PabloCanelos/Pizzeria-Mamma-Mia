import React, { useState } from 'react'
import '../assets/style.css' 

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e) => setEmail(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres')
    } else {
      alert('Inicio de sesión exitoso')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='email' placeholder='Email' value={email} onChange={handleEmailChange} required />
      <input type='password' placeholder='Contraseña' value={password} onChange={handlePasswordChange} required />
      <button type='submit'>Login</button>
    </form>
  )
}

export default Login
