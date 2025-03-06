import React, { useState, useContext } from 'react'
import '../assets/style.css'
import { UserContext } from '../context/UserContext'

const Login = () => {
  const { login } = useContext(UserContext)
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.email || !formData.password) {
      setError('Por favor, completa todos los campos.')
      return
    }

    setError('')
    try {
      await login(formData.email, formData.password)
    } catch (error) {
      setError('Error al iniciar sesión, por favor verifica tus credenciales.')
    }
  }

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit} className='login-form'>
        <h2 className='login-title'>Iniciar Sesión</h2>
        {error && <div className='login-error'>{error}</div>}
        <div className='login-field'>
          <label htmlFor='email' className='login-label'>Correo Electrónico</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='login-input'
            placeholder='Ingresa tu correo'
          />
        </div>
        <div className='login-field'>
          <label htmlFor='password' className='login-label'>Contraseña</label>
          <input
            type='password'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            className='login-input'
            placeholder='Ingresa tu contraseña'
          />
        </div>
        <button type='submit' className='login-button'>Iniciar Sesión</button>
      </form>
    </div>
  )
}

export default Login
