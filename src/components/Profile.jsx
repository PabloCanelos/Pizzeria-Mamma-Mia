import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'

const Profile = () => {
  const { user, getUserProfile, logout } = useContext(UserContext)
  const [userEmail, setUserEmail] = useState(user.email)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile = await getUserProfile()
        setUserEmail(profile.email)
      } catch (error) {
        console.error('Error al obtener perfil:', error)
      }
    }

    fetchProfile()
  }, [getUserProfile])

  const handleLogout = () => {
    logout()
    alert('Sesión cerrada')
  }

  return (
    <div>
      <h1>Perfil</h1>
      <p>Email: {userEmail}</p>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  )
}
export default Profile
