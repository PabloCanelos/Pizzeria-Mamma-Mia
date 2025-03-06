import { useContext, useState } from 'react'
import axios from 'axios'
import { CartContext } from '../context/CartContext'
import { UserContext } from '../context/UserContext'
import '../components/Cart.css'

const Cart = () => {
  const { carrito, actualizarCantidad, eliminarDelCarrito, montoTotal } = useContext(CartContext)
  const { user } = useContext(UserContext)
  const [successMessage, setSuccessMessage] = useState('')

  const handleCheckout = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/checkouts', {
        cart: carrito
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        }
      })

      if (response.status === 200) {
        console.log('Compra exitosa:', response.data)
        setSuccessMessage('¡Compra completada con éxito!')
      } else {
        console.error('Error en la compra:', response.statusText)
      }
    } catch (error) {
      console.error('Error durante la compra:', error)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleCheckout()
  }

  return (
    <div className='cart'>
      <h2 className='titulo-carrito'>Detalles del pedido:</h2>
      <ul>
        {carrito.map(pizza => (
          <li key={pizza.id}>
            <span>{pizza.name} - ${pizza.price} x {pizza.count}</span>
            <button className='btndisminuir' onClick={() => actualizarCantidad(pizza.id, pizza.count - 1)}>-</button>
            <button className='btnaumentar' onClick={() => actualizarCantidad(pizza.id, pizza.count + 1)}>+</button>
            <button className='btneliminar' onClick={() => eliminarDelCarrito(pizza.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h3 className='totalPagar'>Total: ${montoTotal.toLocaleString()}</h3>
      <button className='btnPagar' onClick={handleSubmit} disabled={!user.token}>Pagar</button>
      {successMessage && <p>{successMessage}</p>}
    </div>
  )
}

export default Cart
