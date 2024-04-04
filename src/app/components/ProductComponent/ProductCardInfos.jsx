import React from 'react'

const ProductCardInfos = ({product}) => {
    return (
        <div className='md:flex md:items-center md:justify-between'>
            <div className="font-bold mb-1 overflow-hidden  whitespace-nowrap md:w-3/4 md:mb-0">{product.title}</div>
            <div className="font-bold text-gray-600 text-sm">Rs. {product.price}</div>
        </div>
    )
}

export default ProductCardInfos
