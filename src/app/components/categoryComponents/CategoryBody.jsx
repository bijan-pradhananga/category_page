
import ProductCard from '../ProductComponent/ProductCard'
import ProductCardLoader from '../ProductComponent/ProductCardLoader/ProductCardLoader'

const CategoryBody = ({products}) => {

    
    return (
        <>
            <div className="w-full mt-1 px-3 py-2 md:w-3/4 md:mx-auto">
                <h1 className='font-bold text-2xl md:text-3xl'>Products</h1>
            </div>
            <div className="w-full mt-1 px-3 py-2 grid grid-cols-2 gap-2 md:w-3/4 md:mx-auto md:grid-cols-4 md:gap-4 ">
            {products.length === 0 ? (
                <ProductCardLoader count={4}/>
            ) : (
                products.map((product, index) => (
                    <ProductCard key={index} product={product}/>
                ))
            )}

               
            </div>
        </>

    )
}

export default CategoryBody