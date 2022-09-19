
import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'



export const GifExpertApp = () => {

    const [categories, setCategories] = useState( [ ] )

    const onAddCategory = ( NewCategory) => {
        
        if ( categories.includes(NewCategory) ) return;
        
        setCategories([NewCategory, ...categories ])
    }


  return (
    <>
        {/* Titulo */}
        <h1>GiffExpertApp</h1>

        {/* Input */}
        <AddCategory onNewCategory = { NewCategory => onAddCategory(NewCategory) }/>

        {/* <button onClick={ () => onAddCategory() }>Agregar</button> */}


        {/* Listado de Gifs */}
        
            { categories.map( category => (
                       <GifGrid key={category} category={category}/>
                    )
                )
            }
       
            {/* Gif Item */}
    </>
  )
}


















