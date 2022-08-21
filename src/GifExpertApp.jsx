import { useState } from "react"
import { AddCategory, GiftGrid } from "./components"

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch'])

    const onAddCategory = ( newCategory ) => {
        
        const categoriesUpper = categories.map(element => {
            return element.toUpperCase();
          });

        const newCategoryUpper = newCategory.toUpperCase()

        if (categoriesUpper.includes(newCategoryUpper)) return ; 
           
        setcategories([ newCategory ,...categories])
        // setcategories( cat => [...cat, 'Demon Slayer'])
    }

  return (
      <>
          <h1>GiftExpertApp</h1>
          <AddCategory
              // setcategories= { setcategories }
              onNewCategory={(event) => onAddCategory(event)}
          />
          {
              categories.map((category) => (
                  <GiftGrid
                      key={category}
                      category={category}
                  />

              ))}
          {/* gif Item */}
      </>
  )
}
