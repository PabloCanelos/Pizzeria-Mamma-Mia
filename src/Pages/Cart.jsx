import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { UserContext } from '../context/UserContext'
import '../components/Cart.css'

const Cart = () => {
  const { carrito, actualizarCantidad, eliminarDelCarrito, montoTotal } = useContext(CartContext)
  const { token } = useContext(UserContext)

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
      <button className='btnPagar' disabled={!token} >Pagar</button>
    </div>
  )
}

export default Cart
