import React from 'react'
import '../styles/Searchbox.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

const I_URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
const C_URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

const Searchbox = () => {
    const [mode, setMode] = useState('name')
    const [alcohol, setAlcohol] = useState(true)
    const active = '#8D493A'
    const inactive = '#D0B8A8'
    const [ingredients, setIngredients] = useState()
    const [ingredient, setIngredient] = useState()
    const [categories, setCategories] = useState()
    const [category, setCategory] = useState()


    useEffect(() => {
        axios.get(I_URL)
        .then(res => {
            let data = res.data.drinks
            setIngredients(data)
            setIngredient(data[0].strIngredient1)
        })
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get(C_URL)
        .then(res => {
            let data = res.data.drinks
            setCategories(data)
            setCategory(data[0].strCategory)
        })
        .catch(err => console.log(err))
    }, [])


  return (
    <div className='container'>
        <div className='topBar'>
            <div className='barObject'
            onClick={() => setMode("name")}
            style={{
                backgroundColor: mode === 'name' ? active : inactive,
                cursor: 'pointer',
                color: mode === 'name' ? 'white' : 'black'
            }}>
                Name
            </div>
            <div className='barObject barObjectMiddle'
            onClick={() => setMode("ingredient")}
            style={{
                backgroundColor: mode === 'ingredient' ? active : inactive,
                cursor: 'pointer',
                color: mode === 'ingredient' ? 'white' : 'black'
            }}
            >
                Ingredient
            </div>
            <div className='barObject' 
            onClick={() => setMode("category")}
            style={{
                backgroundColor: mode === 'category' ? active : inactive,
                cursor: 'pointer',
                color: mode === 'category' ? 'white' : 'black'
            }}
            >
                Category
            </div>
        </div>
            {mode === 'name' && <div className='searchArea'>
                <div className='searchBar'>
                    <input type='text' placeholder='Search cocktails...' />
                    <button>Search</button>
                </div>
                <div className='selectBar'>
                    <div className='selectObject'
                    onClick={() => setAlcohol(true)}
                    style={{
                        backgroundColor: alcohol ? active : inactive,
                        cursor: 'pointer',
                        color: alcohol ? 'white' : 'black'
                    }}
                    >
                        Alcoholic
                    </div>
                    <div className='selectObject'
                    onClick={() => setAlcohol(false)}
                    style={{
                        backgroundColor: !alcohol ? active : inactive,
                        cursor: 'pointer',
                        color: !alcohol ? 'white' : 'black'
                    }}
                    >
                        Non-Alcoholic
                    </div>
                </div>
                <div className='randomBar'>
                    Get a random one!
                </div>

            </div>}
            {mode === 'ingredient' && <div className='ingredientArea'>
                <p>Search by ingredient</p>
                <select onChange={(e) => setIngredient(e.target.value)}>
                    {ingredients && ingredients.map((ingredient, index) => {
                        return <option key={index}>{ingredient.strIngredient1}</option>
                    })}
                </select>
                <div className='randomBar'>
                    Search
                </div>
            </div>}
            {mode === 'category' && <div className='ingredientArea'>
                <p>Search by category</p>
                <select onChange={(e) => setCategory(e.target.value)}>
                    {categories && categories.map((category, index) => {
                        return <option key={index}>{category.strCategory}</option>
                    })}
                </select>
                <div className='randomBar'>
                    Search
                </div>
            </div>}
    </div>
  )
}

export default Searchbox
