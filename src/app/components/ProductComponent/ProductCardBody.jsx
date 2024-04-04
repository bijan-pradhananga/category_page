import React from 'react'
import ProductCardInfos from './ProductCardInfos'
import ProductCardSizes from './ProductCardSizes'

const ProductCardBody = () => {
  return (
    <div>       
        <div className="categoryProductInfo w-full mt-2 mb-2">
          <ProductCardInfos/>
          <ProductCardSizes/>
      </div>
    </div>
  )
}

export default ProductCardBody
