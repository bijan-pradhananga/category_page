import React from 'react'

const ProductCardSizes = () => {
    return (
        <div className='availableSizes w-full mt-1 '>
            <div className="categoryProductPrice font-bold text-gray-800 text-sm">Available Sizes</div>
            <div className='w-full mt-1 flex flex-wrap gap-2 justify-center'>
                <div className="shadow appearance-none border rounded p-1 text-black leading-tight focus:outline-none focus:shadow-outline">32</div>
                <div className="shadow appearance-none border rounded p-1 text-black leading-tight focus:outline-none focus:shadow-outline">34</div>
                <div className="shadow appearance-none border rounded p-1 text-black leading-tight focus:outline-none focus:shadow-outline">36</div>
                <div className="shadow appearance-none border rounded p-1 text-black leading-tight focus:outline-none focus:shadow-outline">38</div>
            </div>
        </div>
    )
}

export default ProductCardSizes
