import React from 'react'

const ProductCardInfos = ({product}) => {
    return (
        <div className='md:flex md:items-center md:justify-between'>
            <div className="categoryProductTitle font-bold mb-1">{product.title}</div>
            <div className="categoryProductPrice font-bold text-gray-600 text-sm">Rs. {product.price}</div>
        </div>
    )
}

export default ProductCardInfos
