
import { useState } from "react";
import { useEffect } from "react";
import { getGifs } from "../helpers/gifGrid";
import { GifItem } from "./GifItem";




export const GifGrid = ( {category}) => {

    const [images, setImages] = useState([]);

    useEffect( () => {getImages(category)} , [])   // useEffect recibe 2 argunmetos, el primero es las funcion que solo se ejecuta una vez.
    
    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages( newImages );
    }


    
    return (
    <>
        <h3>{category}</h3>
        <div className="card-grid"> 
            { images.map( img => 
                            <GifItem
                                key={img.id}
                                title={img.title}
                                url={img.url}
                            /> 
                        )
            }
        </div>
    </>
  )
}










