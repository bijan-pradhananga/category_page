import React from 'react'

const CategoryBody = () => {
    return (
        <>  
            <div className="categoryHeader w-full mt-1 px-3 py-2 md:w-11/12 md:mx-auto">
                <h1 className='font-bold text-2xl md:text-3xl'>Products</h1>
            </div>
            <div className="categoryBody w-full mt-1 px-3 py-2 grid grid-cols-2 gap-2 md:w-11/12 md:mx-auto md:grid-cols-4 md:gap-3 ">
                <div className="categoryProduct cursor-pointer bg-white rounded p-2 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                    <div className="categoryProductImg w-full aspect-square bg-gray-200 rounded">
                        <img src='/shoe.png' className="w-full h-full object-cover" ></img>
                    </div>
                    <div className="categoryProductInfo w-full mt-2 mb-2">
                        <div className="categoryProductTitle font-bold mb-1">Nike Air Jordon</div>
                        <div className="categoryProductPrice font-bold text-gray-600 text-sm">Rs.15000</div>
                    </div>
                </div>
                <div className="categoryProduct cursor-pointer bg-white rounded p-2 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                    <div className="categoryProductImg w-full aspect-square bg-gray-200 rounded">
                        <img src='/shoe.png' className="w-full h-full object-cover" ></img>
                    </div>
                    <div className="categoryProductInfo w-full mt-2">
                        <div className="categoryProductTitle font-bold">Nike Air Jordon</div>
                        <div className="categoryProductPrice font-bold text-gray-600 text-sm">Rs.15000</div>
                    </div>
                </div>
                <div className="categoryProduct cursor-pointer bg-white rounded p-2 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                    <div className="categoryProductImg w-full aspect-square bg-gray-200 rounded">
                        <img src='/shoe.png' className="w-full h-full object-cover" ></img>
                    </div>
                    <div className="categoryProductInfo w-full mt-2">
                        <div className="categoryProductTitle font-bold">Nike Air Jordon</div>
                        <div className="categoryProductPrice font-bold text-gray-600 text-sm">Rs.15000</div>
                    </div>
                </div>
                <div className="categoryProduct cursor-pointer bg-white rounded p-2 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                    <div className="categoryProductImg w-full aspect-square bg-gray-200 rounded">
                        <img src='/shoe.png' className="w-full h-full object-cover" ></img>
                    </div>
                    <div className="categoryProductInfo w-full mt-2">
                        <div className="categoryProductTitle font-bold">Nike Air Jordon</div>
                        <div className="categoryProductPrice font-bold text-gray-600 text-sm">Rs.15000</div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default CategoryBody