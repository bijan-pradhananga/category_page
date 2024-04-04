import React, { useState } from 'react'

const CategoryPopupSizes = ({size}) => {
    const [selected,setSelected] = useState(false);
    const toggleSelect = () => {
        setSelected(!selected);
    }

  return (
    <div onClick={toggleSelect} className={`${selected ? 'border-black' : ''} transition duration-300 ease-in cursor-pointer shadow appearance-none border rounded py-2 px-2 text-black leading-tight`}>{size}</div>       
  )
}

export default CategoryPopupSizes