import React from 'react'
import '../styles/Searchbox.css'
import { useState } from 'react'

const Searchbox = () => {
    const [mode, setMode] = useState('name')
    const active = '#8D493A'
    const inactive = '#D0B8A8'

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
        <div className='modeArea'>
            {mode === 'name' && <div className='searchArea'>
                Name
            </div>}
            {mode === 'ingredient' && <div className='ingredientArea'>
                Ingredient
            </div>}
            {mode === 'category' && <div className='categoryArea'>
                Category
            </div>}
        </div>
    </div>
  )
}

export default Searchbox
