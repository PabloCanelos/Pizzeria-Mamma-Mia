import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const total = 25000
  const token = false

  return (
    <nav className='navbar'>
      <div className='navbar-brand'>Pizzeria Mamma Mia</div>
      <ul className='navbar-menu'>
        <li className='navbar-item'>
          <Link to='/'>
            <button>Home</button>
          </Link>
        </li>
        {token ? ( 
          // ? abreviacion ternaria if/else, si el token es falso se renderiza despues de los dos :
          <>
            <li className='navbar-item'>
              <Link to='/profile'>
                <button>Profile</button>
              </Link>
            </li>
            <li className='navbar-item'><button>Logout</button></li>
          </>
        ) : (
          // este contenido se renderizara si el token es false
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
            <button>Total: ${total.toLocaleString()}</button> 
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
