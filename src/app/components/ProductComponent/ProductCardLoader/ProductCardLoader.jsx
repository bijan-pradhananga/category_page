import React from 'react'

const ProductCardLoader = ({count}) => {
    return (
        <>
{Array.from({ length: count }, (_, index) => (
    <div key={index} role="status" className="animate-pulse bg-white rounded p-2 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
        {/* Container for the product card loader */}
        <div className="w-full aspect-square bg-gray-200 dark:bg-gray-700 rounded">
            {/* Loader header */}
        </div>
        <div>
            {/* Loader body */}
            <div className="w-full mt-2 mb-2">
                <div className='md:flex md:items-center md:justify-between'>
                    <div className="w-24 h-5 rounded bg-gray-200 dark:bg-gray-700 md:w-2/4 md:mb-0"></div>
                    <div className="w-16 h-4 mt-2 rounded bg-gray-200 dark:bg-gray-700 md:mt-0"></div>
                </div>
                <div className="w-24 h-4 rounded mt-3 bg-gray-200 dark:bg-gray-700 "></div> 
                <div className='w-full mt-2 flex flex-wrap gap-2 justify-center md:justify-start'>
                    <div className="p-3 bg-gray-200 dark:bg-gray-700 shadow appearance-none border rounded leading-tight focus:outline-none focus:shadow-outline"></div>
                    <div className="p-3 bg-gray-200 dark:bg-gray-700 shadow appearance-none border rounded leading-tight focus:outline-none focus:shadow-outline"></div>
                    <div className="p-3 bg-gray-200 dark:bg-gray-700 shadow appearance-none border rounded leading-tight focus:outline-none focus:shadow-outline"></div>
                    <div className="p-3 bg-gray-200 dark:bg-gray-700 shadow appearance-none border rounded leading-tight focus:outline-none focus:shadow-outline"></div>
                </div>
            </div>
            {/* Loader footer */}
            <div className='w-full mt-2 flex items-center '>
                <div className="w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-700 mr-2 md:w-11 md:h-11"></div>
                <div className="w-20 h-4 bg-gray-200 rounded dark:bg-gray-700"></div>
            </div>
            {/* Loader footer */}
        </div>
    </div>
))}

        
        </>
       
  
    )
}

export default ProductCardLoader