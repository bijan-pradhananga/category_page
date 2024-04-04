import React from 'react'

const ProductCardSizes = () => {
    return (
        <div className='w-full mt-1 '>
            {/* header for sizes  */}
            <div className="font-bold text-gray-800 text-sm">Available Sizes</div> 
            {/* sizes container  */}
            <div className='w-full mt-1 flex flex-wrap gap-2 justify-center md:justify-start'>
                <div className="shadow appearance-none border rounded p-1 text-black leading-tight focus:outline-none focus:shadow-outline">32</div>
                <div className="shadow appearance-none border rounded p-1 text-black leading-tight focus:outline-none focus:shadow-outline">34</div>
                <div className="shadow appearance-none border rounded p-1 text-black leading-tight focus:outline-none focus:shadow-outline">36</div>
                <div className="shadow appearance-none border rounded p-1 text-black leading-tight focus:outline-none focus:shadow-outline">38</div>
            </div>
        </div>
    )
}

export default ProductCardSizes
