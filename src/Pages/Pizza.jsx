import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Pizza = () => {
  const [pizza, setPizza] = useState(null)
  const [error, setError] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`)
        // const response = await fetch('http://localhost:5000/api/pizzas/p001')
        if (!response.ok) {
          throw new Error('Respuesta de red no fue correcta')
        }
        const data = await response.json()
        setPizza(data)
      } catch (error) {
        setError(error.message)
        console.error('Error al obtener la pizza:', error)
      }
    }

    fetchPizza()
  }, [id])

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!pizza) {
    return <div>Cargando...</div>
  }

  return (
    <>
      <h1>{pizza.name}</h1>
      <p>Precio: ${pizza.price}</p>
      <p>Ingredientes: {pizza.ingredients.join(', ')}</p>
      <img src={pizza.img} alt={pizza.name} />
      <p>{pizza.desc}</p>
      <button>Añadir al carrito</button>
    </>
  )
}

export default Pizza
