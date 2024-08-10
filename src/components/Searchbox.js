import React from 'react'
import '../styles/Searchbox.css'
import { useState } from 'react'

const Searchbox = () => {
    const [mode, setMode] = useState('name')
    const [alcohol, setAlcohol] = useState(true)
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
                Ingredient
            </div>}
            {mode === 'category' && <div className='categoryArea'>
                Category
            </div>}
    </div>
  )
}

export default Searchbox
