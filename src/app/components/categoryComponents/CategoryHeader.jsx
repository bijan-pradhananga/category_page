
import React, { useState } from 'react'
import { FaSort,FaSortUp,FaSortDown, FaFilter } from "react-icons/fa";
import CategoryPopup from './categoryPopup';
const CategoryHeader = ({products,setProducts}) => {
    const [showModal, setShowModal] = useState(false);
    const [descending,setDescending] = useState(false)
    const [sorted,setSorted] = useState(false)
    //function to sort the products by price
    const sortByPrice = () =>{
        setSorted(true)
        const sortedProducts = products.slice().sort((a, b) => {
            return descending ? a.price - b.price : b.price - a.price;
        });
        setProducts(sortedProducts);
        setDescending(!descending);
    }
    return (
        <>
        {/* contains the sorting and filtering btns  */}
        <div className="flex items-center justify-between mt-2 px-3 h-14 md:w-3/4 md:mx-auto md:justify-end">
            <div onClick={()=>{sortByPrice()}} className="flex w-5/12 bg-gray-200 hover:bg-gray-300 transition-colors duration-300 ease-in  px-2 py-1 justify-between items-center cursor-pointer rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:w-auto md:mr-4">
                <span className='md:mr-2'>Sort By Price</span>
                {/* show the fasort icon at first if someone clicks it sort it and change icon  */}
                {sorted === false ? <FaSort /> : 
                    descending ? <FaSortDown className=' text-red-600' /> : <FaSortUp className='text-green-500' />
                }
            </div>
            <div onClick={() => {setShowModal(true)}} className="flex w-5/12 bg-gray-200  hover:bg-gray-300 transition-colors duration-300 ease-in px-2 py-1 justify-between items-center cursor-pointer rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:w-auto">
                <span className='md:mr-2'>Filter </span>
                <FaFilter />
            </div>
        </div>
        {/* contains the popup modal  */}
        {showModal && <CategoryPopup setShowModal={setShowModal} />}
        </>
        
    )
}

export default CategoryHeader