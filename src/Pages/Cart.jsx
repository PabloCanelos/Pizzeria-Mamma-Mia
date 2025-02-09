import { useState } from 'react' 
import { pizzaCart } from '../components/pizzas'
import '../components/Cart.css'

const Cart = () => {
  // Estado inicial del carrito utilizando useState
  const [cart, setCart] = useState(pizzaCart)

  // Función para aumentar la cantidad de una pizza
  const aumentarCantidad = (pizza) => {
    const nuevasPizzas = cart.map(p => {
      if (p.id === pizza.id) {
        return { ...p, count: p.count + 1 } // Incrementar la cantidad
      }
      return p
    })
    setCart(nuevasPizzas) // Actualizar el estado del carrito
  }

  // Función para disminuir la cantidad de una pizza
  const disminuirCantidad = (pizza) => {
    const nuevasPizzas = cart.map(p => {
      if (p.id === pizza.id && p.count > 1) {
        return { ...p, count: p.count - 1 } // Disminuir la cantidad
      }
      return p
    })
    setCart(nuevasPizzas)// Actualiza el estado del carrito
  }

  // Calcular el total de la compra
  const totalCompra = cart.reduce((total, pizza) => total + pizza.price * pizza.count, 0)

  return (
    <div className='cart'>
      <h2 className='titulo-carrito'>Detalles del pedido:</h2>
      <ul>
        {cart.map(pizza => (
          <li key={pizza.id}>
            <span>{pizza.name} - ${pizza.price} x {pizza.count}</span>
            <button className='btndisminuir' onClick={() => disminuirCantidad(pizza)}>-</button>
            <button className='btnaumentar' onClick={() => aumentarCantidad(pizza)}>+</button>  
          </li>
        ))}
      </ul>
      <h3 className='totalPagar'>Total: ${totalCompra}</h3>
      <button className='btnPagar'>Pagar</button>
    </div>
  )
}

export default Cart
