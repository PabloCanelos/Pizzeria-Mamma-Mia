import React, { createContext, useState } from 'react' 

export const CartContext = createContext() 

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (pizza) => {
    setCarrito(prevCarrito => {
      const pizzaExistente = prevCarrito.find(p => p.id === pizza.id)
      if (pizzaExistente) {
        return prevCarrito.map(p =>
          p.id === pizza.id ? { ...p, count: p.count + 1 } : p
        )
      }
      return [...prevCarrito, { ...pizza, count: 1 }]
    })
  }

  const eliminarDelCarrito = (pizzaId) => {
    setCarrito(prevCarrito => prevCarrito.filter(p => p.id !== pizzaId))
  }

  const actualizarCantidad = (pizzaId, count) => {
    setCarrito(prevCarrito =>
      prevCarrito.map(p =>
        p.id === pizzaId ? { ...p, count } : p
      )
    )
  }

  const montoTotal = carrito.reduce((total, pizza) => total + pizza.price * pizza.count, 0)

  return ( 
    <CartContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, actualizarCantidad, montoTotal }}> 
      {children} 
    </CartContext.Provider> 
  ) 
}
