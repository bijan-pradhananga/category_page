import React from 'react'

const Banner = () => {
    
  return (
    <div className="bannerContainer w-full px-3 mt-4">
    <div className="banner w-full h-20 bg-gray-200 rounded md:w-3/4 md:h-60 md:mx-auto">
        <img src='/shoeBanner.jpg' className="w-full h-full object-cover rounded" ></img>
    </div>
    </div>
  )
}

export default Banner