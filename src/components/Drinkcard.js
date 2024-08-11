import React from 'react'
import '../styles/Drinkcard.css'

const Drinkcard = (props) => {

  return (
    <div className='cardBody'>
        <img src={props.drink.strDrinkThumb} alt='drink' className='cardImage'/>
        <div className='cardText'>
            <p>{props.drink.strDrink}</p>
        </div>
    </div>
  )
}

export default Drinkcard
