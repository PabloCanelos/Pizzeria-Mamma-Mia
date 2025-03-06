import React, { useState, useContext } from 'react'
import '../assets/style.css'
import { UserContext } from '../context/UserContext'

const Register = () => {
  const { register } = useContext(UserContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const handleEmailChange = (e) => setEmail(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres')
    } else if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden')
    } else {
      setError('')
      try {
        await register(email, password)
        const token = localStorage.getItem('token')
        console.log('Token:', token)
        alert('Registro exitoso')
      } catch (error) {
        setError('Error al registrarse, por favor intenta nuevamente.')
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={handleEmailChange}
        required
      />
      <input
        type='password'
        placeholder='Contraseña'
        value={password}
        onChange={handlePasswordChange}
        required
      />
      <input
        type='password'
        placeholder='Confirmar Contraseña'
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        required
      />
      {error && <div className='login-error'>{error}</div>}
      <button type='submit'>Register</button>
    </form>
  )
}

export default Register
