import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, SetInputValue] = useState('')

    const onInputChange = ({target}) =>{
        console.log(target.value)
        SetInputValue(target.value)
    }

    const onSubmitted = ( event ) => {
        // console.log( event )
        event.preventDefault()
        if (inputValue.trim().length  <= 1 ) return;
        // setcategories( categories => [ inputValue, ...categories])
        onNewCategory(inputValue.trim())
        SetInputValue('')
    }

    return (
        <form onSubmit={ onSubmitted }>

            <input
                type=" text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />

        </form>

  )
}
