// import { getGifs } from "../helpers/getGifs"
// import { useEffect, useState } from "react"
import { GifGridItem } from "./GifGridItem"
import { useFetchGifs } from "../hooks/useFetchGifs"

export const GiftGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category )
  return (
    <>
        <h3> { category }</h3>
        {
            isLoading && ( <h2>Cargando....</h2>)
        }
        <div className="card-grid">
            { images.map ( image => (
                <GifGridItem 
                    key={ image.id }
                    // title= {image.title }
                    // url = { image.url }
                    {...image }
                />
            ))}
        </div>
    </>
  )
}
