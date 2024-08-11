import React from 'react'
import '../styles/Showcase.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Drinkcard from './Drinkcard'

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a='

const Showcase = ({ label }) => {
    const [drinks, setDrinks] = useState()
    const [selectedDrinks, setSelectedDrinks] = useState()

    useEffect (() => {
        axios.get(URL + label)
        .then(res => {
            let data = res.data.drinks
            setDrinks(data)
        })
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        if (drinks) {
            let selected = []
            while (selected.length < 5) {
                let random = Math.floor(Math.random() * drinks.length)
                if (!selected.includes(drinks[random])) {
                    selected.push(drinks[random])
                }
            }
            setSelectedDrinks(selected)
        }
    }, [drinks])

  return (
    <div>
      <h2>{label} Cocktails</h2>
        <div className='showcaseContainer'>
            {selectedDrinks && selectedDrinks.map(drink => {
                return (
                        <Drinkcard drink={drink}/>
                )
            })}
        </div>
    </div>
  )
}

export default Showcase
