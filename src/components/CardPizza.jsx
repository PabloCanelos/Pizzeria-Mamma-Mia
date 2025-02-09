import PropTypes from 'prop-types'
import './CardPizza.css'

const CardPizza = ({ name, ingredients, price, image }) => {
  return (
    <div className='card-pizza'>
      <img src={image} alt={name} className='card-pizza-image' />
      <h2 className='card-pizza-name'>{name}</h2>
      <ul className='card-pizza-ingredients'>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p className='card-pizza-price'> Precio: $ {price.toLocaleString()}</p>
      <button className='card-pizza-button'>Agregar al Carrito</button>
      <button className='card-pizza-button'>Ver Más</button>
    </div>
  )
}

CardPizza.propTypes = {
  name: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
}

export default CardPizza
