import React from 'react'
import ProductCardInfos from './ProductCardInfos'
import ProductCardSizes from './ProductCardSizes'

const ProductCardBody = ({product}) => {
  return (
    <div>       
        <div className="w-full mt-2 mb-2">
          <ProductCardInfos product={product}/>
          <ProductCardSizes/>
        </div>
    </div>
  )
}

export default ProductCardBody
