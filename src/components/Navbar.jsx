import './Navbar.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext.jsx'
import { UserContext } from '../context/UserContext.jsx'

const Navbar = () => {
  const { montoTotal } = useContext(CartContext)
  // const token = false
  const { token, logout } = useContext(UserContext)

  return (
    <nav className='navbar'>
      <div className='navbar-brand'>Pizzeria Mamma Mia</div>
      <ul className='navbar-menu'>
        <li className='navbar-item'>
          <Link to='/'>
            <button>Home</button>
          </Link>
        </li>
        {token ?(
          <>
            <li className='navbar-item'>
              <Link to='/profile'>
                <button>Profile</button>
              </Link>
            </li>
            <li className='navbar-item'>
              <button onClick={logout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li className='navbar-item'>
              <Link to='/login'>
                <button>Login</button>
              </Link>
            </li>
            <li className='navbar-item'>
              <Link to='/register'>
                <button>Register</button>
              </Link>
            </li>
          </>
        )}
        <li className='navbar-item'>
          <Link to='/cart'>
            <button>Total: ${ montoTotal ? montoTotal.toLocaleString() : 0 }</button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
