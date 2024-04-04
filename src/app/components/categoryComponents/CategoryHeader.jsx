"use client"
import React, { useState } from 'react'
import { FaSort, FaFilter } from "react-icons/fa";
import CategoryPopup from './categoryPopup';
const CategoryHeader = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
        <div className="flex items-center justify-between mt-2 px-3 h-14 md:w-3/4 md:mx-auto md:justify-end">
            <div className="flex w-5/12 bg-gray-200 hover:bg-gray-300 transition-colors duration-300 ease-in  px-2 py-1 justify-between items-center cursor-pointer rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:w-auto md:mr-4">
                <span className='md:mr-2'>Sort By </span>
                <FaSort />
            </div>
            <div onClick={() => {setShowModal(true)}} className="flex w-5/12 bg-gray-200  hover:bg-gray-300 transition-colors duration-300 ease-in px-2 py-1 justify-between items-center cursor-pointer rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:w-auto">
                <span className='md:mr-2'>Filter </span>
                <FaFilter />
            </div>
        </div>
        {showModal && <CategoryPopup setShowModal={setShowModal} />}
        </>
        
    )
}

export default CategoryHeader