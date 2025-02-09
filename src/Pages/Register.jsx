import React, { useState } from 'react'
import '../assets/style.css'// Asegúrate de que la ruta sea correcta

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleEmailChange = (e) => setEmail(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres')
    } else if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden')
    } else {
      alert('Registro exitoso')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='email' placeholder='Email' value={email} onChange={handleEmailChange} required />
      <input type='password' placeholder='Contraseña' value={password} onChange={handlePasswordChange} required />
      <input type='password' placeholder='Confirmar Contraseña' value={confirmPassword} onChange={handleConfirmPasswordChange} required />
      <button type='submit'>Register</button>
    </form>
  )
}

export default Register
