import React from 'react'
import CategoryPopupSizes from './CategoryPopupSizes'


// array to store sizes 
const sizes = [32, 34, 36, 38, 40, 42];

const CategoryPopupBody = () => {
    return (

        <div className="relative flex-auto">
            <div className="bg-white rounded px-6 pt-4 pb-3">
                {/* form to input min and max price to filter */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" >
                        Price
                    </label>
                    <div className="flex gap-2">
                        <input className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight transition duration-300 ease focus:border-gray-300 focus:shadow-outline" type="text" placeholder="Min" />
                        <input className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight transition duration-300 ease focus:border-gray-300 focus:shadow-outline " type="text" placeholder="Max" />
                    </div>
                </div>
                {/* form to input min and max price to filter */}
                {/* form to input sizes to filter */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-bold mb-2" >
                        Size
                    </label>
                    <div className="w-full flex flex-wrap justify-center gap-3">

                        <>
                            {sizes.map((size, index) => (
                                <CategoryPopupSizes key={index} size={size} />
                            ))}
                        </>


                    </div>
                </div>
                {/* form to input min and max price to filter */}
            </div>
        </div>

    )
}

export default CategoryPopupBody